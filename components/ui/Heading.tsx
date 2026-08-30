import React from "react";

const Heading = ({
  heading,
  // description,
}: {
  heading: string;
  // description?: string;
}) => {
  return (
    <div className="py-6">
      <h1 className="font-display mb-2 text-2xl lowercase"># {heading}</h1>
    </div>
  );
};

export default Heading;
