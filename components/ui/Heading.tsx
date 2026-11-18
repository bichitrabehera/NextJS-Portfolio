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
      <Tag className={`text-xl font-normal ${className} display`}>
        <span aria-hidden="true" className="text-foreground/50"></span>⭐{" "}
        {heading}
      </Tag>
    </div>
  );
}
