import type { ComponentProps, ForwardedRef, ReactNode } from "react";
import { forwardRef } from "react";

type Props = {
  // variant?: "primary" | "sub" | "danger" | "sub-danger" | "gray";
  // disabled?: boolean;
  // rounded?: boolean;
  // expand?: boolean;
  // size?: "xs" | "sm" | "md" | "lg";
  // icon?: TIcon;
  // iconPosition?: "left" | "right";
  children?: ReactNode;
} & ComponentProps<"button">;

export const Button = forwardRef(
  (
    { disabled = false, children, ...props }: Props,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button ref={ref} {...props} disabled={disabled}>
        <div
          align="center"
          justify="center"
          gap="xs2"
          reverse={iconPosition === "right"}
          nowrap
        >
          {icon && (
            <WizIcon
              icon={icon}
              color={variantColor[variant]}
              size={iconSize[size]}
            />
          )}
          {children}
        </div>
      </button>
    );
  }
);
