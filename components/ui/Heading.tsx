type HeadingProps = {
  heading: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export default function Heading({
  heading,
  as: Tag = "h2",
  className = "",
}: HeadingProps) {
  return (
    <div className="py-6">
      <Tag
        className={`bg-foreground/10 border-foreground/40 inline-flex items-center gap-1.5 rounded border border-dashed px-4 py-1.5 text-sm font-medium ${className}`}
      >
        <span aria-hidden="true" className="text-foreground/50">
          ~
        </span>
        {heading}
      </Tag>
    </div>
  );
}
