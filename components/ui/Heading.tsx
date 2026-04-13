import React from "react";

const Heading = ({
  heading,
  // description,
}: {
  heading: string;
  // description?: string;
}) => {
  return (
    <div className="py-4">
      <h1 className="text mb-2 text-white/60 uppercase " style={{letterSpacing:"2px"}}>
        {heading}
      </h1>
      {/* <p className="text-foreground/70 my-6 max-w-3xl">{description}</p> */}
    </div>
  );
};

export default Heading;
