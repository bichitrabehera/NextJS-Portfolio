import React from "react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  onClick,
  variant = "primary",
  loading = false,
  disabled = false,
  className = "",
  target,
  rel,
}) => {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 focus:ring-blue-500 shadow-lg hover:shadow-xl",
    secondary:
      "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "cursor-pointer";

  const classes = `${baseStyles} ${variants[variant]} ${disabledStyles} ${className}`;

  // If href is provided → render anchor
  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        className={classes}
      >
        {text}
      </a>
    );
  }

  // Otherwise render button
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
    >
      {loading && (
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      )}
      {text}
    </button>
  );
};

export default Button;
