import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const ReturnButton = () => {
  return (
    <div>
      <Link
        href="/"
        className="mb-8 border border-white/20 inline-flex text-white hover:text-neutral-200 items-center pr-4 pl-3 py-2 text-sm transition"
      >
         <ArrowLeft className="mr-2 h-4 w-4" />
        Home
      </Link>
    </div>
  );
};

export default ReturnButton;
