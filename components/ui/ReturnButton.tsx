import React from "react";
import Link from "next/link";

const ReturnButton = () => {
  return (
    <div>
      <Link
        href="/"
        className="border-border hover:bg-foreground hover:text-background mb-8 inline-flex items-center rounded border px-4 py-2 text-sm transition"
      >
        Home
      </Link>
    </div>
  );
};

export default ReturnButton;
