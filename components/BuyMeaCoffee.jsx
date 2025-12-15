// import Image from "next/image";

import { SiBuymeacoffee } from "react-icons/si";

export default function BuyMeaCoffee() {
    return (
        <a href="https://buymeacoffee.com/bichitrabehera" target="_blank" rel="noopener noreferrer">
            <SiBuymeacoffee size={24} className="hover:text-primary hover:text-yellow-200 transition-colors duration-300" />
        </a>
    );
}
