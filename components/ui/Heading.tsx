import React from "react";

const Heading = ({
  heading,
  description,
}: {
  heading: string;
  description?: string;
}) => {
  return (
    <div className="py-4">
      <h1 className="text-xl mb-2 font-bold text-white/60 font-mono uppercase">
        {heading}
      </h1>
      <p className="text-foreground/70 my-6 max-w-3xl">{description}</p>
    </div>
  );
};

export default Heading;
