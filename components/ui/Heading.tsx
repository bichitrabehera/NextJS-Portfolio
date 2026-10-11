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
      <Tag className={`text-xl font-medium ${className}`}>
        <span aria-hidden="true" className="text-foreground/50"></span>
        {heading}
        <span className="ml-1 inline-block h-2 w-2 rounded-full bg-blue-600"></span>
      </Tag>
    </div>
  );
}
