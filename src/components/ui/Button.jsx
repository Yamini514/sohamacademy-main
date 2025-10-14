import React from "react";

// Utility to merge class names (simple version of `cn`)
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Button = React.forwardRef(
  (
    {
      children,
      className = "",
      variant = "default",
      size = "default",
      disabled = false,
      ...props
    },
    ref
  ) => {
    // ---- Variants ----
    const baseStyles =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

    const variantStyles = {
      default: "bg-[#00B7FF] text-primary-foreground hover:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    };

    const sizeStyles = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    };

    const classes = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    return (
      <button ref={ref} className={classes} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
