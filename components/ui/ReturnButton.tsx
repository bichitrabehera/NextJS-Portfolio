import Link from "next/link";
import { ArrowBigLeft } from "lucide-react";

const ReturnButton = () => {
  return (
    <div>
      <Link
        href="/"
        className="mb-8 inline-flex text-white hover:text-neutral-200 items-center px-4 py-2 text-sm transition"
      >
         <ArrowBigLeft className="mr-2 h-4 w-4" />
        Home
      </Link>
    </div>
  );
};

export default ReturnButton;
