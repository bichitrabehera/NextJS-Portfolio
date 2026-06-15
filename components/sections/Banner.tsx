"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Banner = () => {
  const [pats, setPats] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPats = async () => {
      const res = await fetch("/api/pat");
      const data = await res.json();
      setPats(data.count);
    };

    getPats();
  }, []);

  const handlePat = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const res = await fetch("/api/pat", {
        method: "POST",
      });

      const data = await res.json();
      setPats(data.count);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 flex justify-start">
      <div className="flex items-center gap-4">
        <motion.button
          onClick={handlePat}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, rotate: -5 }}
          className="cursor-pointer"
        >
          <Image
            src="/assets/sauropod.svg"
            alt="Friendly Sauropod"
            width={50}
            height={80}
            priority
            className="-scale-x-100"
          />
        </motion.button>

        <div>
          <p className="text-xs text-muted-foreground">
            Click to pat the Sauropod
          </p>

          <p className="text-xs font-medium">
            {pats === null
              ? "Loading..."
              : `${pats.toLocaleString()} pats received`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
