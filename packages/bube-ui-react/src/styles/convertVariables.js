import fs from "fs";

// Load the exported variables from Figma
const data = JSON.parse(
  fs.readFileSync("./src/styles/exportedVariables.json", "utf-8")
);

const figmaVariables = {
  spacing: {},
  borderRadius: {},
  colors: {},
};

// Bube.Numbersのマッピングを取得
const numberMapping = data["Size.値.tokens.json"]["Bube"]["Numbers"];

// JSONデータを解析し、figmaVariablesオブジェクトに変換する関数
function parseTokens(json, output) {
  for (const [key, value] of Object.entries(json)) {
    if (typeof value === "object" && value !== null && "$value" in value) {
      const resolvedValue = resolveValue(value.$value);
      if (key.includes("size")) {
        output.spacing[key] = resolvedValue;
      } else if (key.includes("radius")) {
        output.borderRadius[key] = resolvedValue;
      } else if (
        key.includes("color") ||
        key.includes("gray") ||
        key.includes("blue") ||
        key.includes("red") ||
        key.includes("yellow") ||
        key.includes("green") ||
        key.includes("purple") ||
        key.includes("black") ||
        key.includes("white")
      ) {
        output.colors[key] = resolvedValue;
      }
    } else if (typeof value === "object" && value !== null) {
      parseTokens(value, output);
    }
  }
}

// Bube.Numbersのプレースホルダーを解決する関数
function resolveValue(value) {
  // valueが文字列かどうかをチェック
  if (typeof value === "string") {
    const match = value.match(/\{Bube\.Numbers\.(\d+)\}/);
    if (match) {
      return numberMapping[match[1]]["$value"] || value;
    }
  }
  // 文字列でない場合、元の値を返す
  return value;
}

// JSONデータを解析し、figmaVariablesオブジェクトに変換
for (const [key, value] of Object.entries(data)) {
  parseTokens(value, figmaVariables);
}

// figmaVariablesをJavaScriptファイルとして書き出し
const outputJs = `const figmaVariables = ${JSON.stringify(figmaVariables, null, 2)};\n\nexport default figmaVariables;`;
fs.writeFileSync("src/styles/variablesOutput.js", outputJs);

console.log("variablesOutput.js file has been generated!");
