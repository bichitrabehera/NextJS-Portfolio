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
                    px-3 py-3
                    border border-border rounded-full
                    hover:bg-foreground hover:text-background
                    transition"
      >
       <HomeIcon className=" w-5 h-5" />
      </Link>
    </div>
  );
};

export default ReturnButton;
