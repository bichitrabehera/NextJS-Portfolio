import { ArrowLeft } from "lucide-react";
import Button from "./button";

const ReturnButton = () => {
  return (
    <div>
      <Button as="a" href="/" size="sm">
        <ArrowLeft className="h-4 w-4" />
        Home
      </Button>
    </div>
  );
};

export default ReturnButton;
