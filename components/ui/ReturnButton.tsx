import React from "react";
import Link from "next/link";
import { HomeIcon } from "lucide-react";

const ReturnButton = () => {
  return (
    <div>
      <Link
        href="/"
        className="
                    inline-flex items-center text-sm mb-8
                    px-4 py-2
                    border border-border rounded
                    hover:bg-foreground hover:text-background
                    transition"
      >
        Home
      </Link>
    </div>
  );
};

export default ReturnButton;
