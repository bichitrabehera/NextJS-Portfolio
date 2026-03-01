import React from "react";
import Link from "next/link";

const ReturnButton = () => {
  return (
    <div>
      <Link
        href="/"
        className="
                    inline-flex items-center text-sm mb-8
                    px-4 py-2
                    border border-border rounded-2xl
                    hover:bg-foreground hover:text-background
                    transition"
      >
        ← return
      </Link>
    </div>
  );
};

export default ReturnButton;
