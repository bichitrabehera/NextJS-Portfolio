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
      <h1 className="mb-2 text-xl"> {heading}</h1>
    </div>
  );
};

export default Heading;
