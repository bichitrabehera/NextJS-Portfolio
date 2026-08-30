import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded border text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50";

const sizes = {
  sm: "px-3 py-1.5",
  md: "px-4 py-2",
  lg: "px-5 py-2.5",
} as const;

const variants = {
  primary: "border-transparent bg-primary text-primary-foreground hover:opacity-90",
  secondary:
    "border-foreground/15 bg-transparent text-foreground/80 hover:border-foreground/40 hover:bg-foreground/5 hover:text-foreground",
  ghost:
    "border-transparent bg-transparent text-foreground/70 hover:bg-foreground/5 hover:text-foreground",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type CommonState = {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  children?: React.ReactNode;
};

type AnchorProps = CommonState & AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: "a";
  href: string;
};

type ButtonTypeProps = CommonState &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

export function Button(props: AnchorProps & BaseProps): React.ReactElement;
export function Button(
  props: ButtonTypeProps & BaseProps,
): React.ReactElement;
export function Button({
  as,
  variant = "secondary",
  size = "md",
  className,
  children,
  ...rest
}: (AnchorProps | ButtonTypeProps) & BaseProps) {
  if (as === "a") {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };

    return (
      <a
        href={href}
        className={cn(base, sizes[size], variants[variant], className)}
        {...anchorRest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cn(base, sizes[size], variants[variant], className)}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

export default Button;
