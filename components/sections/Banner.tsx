"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const SYNC_DELAY = 500;

const Banner = () => {
  const [pats, setPats] = useState<number | null>(null);

  const pendingPatsRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const syncingRef = useRef(false);

  useEffect(() => {
    const getPats = async () => {
      try {
        const res = await fetch("/api/pat");

        if (!res.ok) {
          throw new Error("Failed to fetch pats");
        }

        const data = await res.json();

        setPats(data.count);
      } catch (error) {
        console.error(error);
        setPats(0);
      }
    };

    getPats();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const syncPats = async () => {
    if (syncingRef.current) return;

    const pendingPats = pendingPatsRef.current;

    if (pendingPats === 0) return;

    pendingPatsRef.current = 0;
    syncingRef.current = true;

    try {
      const res = await fetch("/api/pat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          count: pendingPats,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to sync pats");
      }

      const data = await res.json();

      setPats(data.count + pendingPatsRef.current);
    } catch (error) {
      console.error(error);

      pendingPatsRef.current += pendingPats;
    } finally {
      syncingRef.current = false;

      if (pendingPatsRef.current > 0) {
        timeoutRef.current = setTimeout(syncPats, SYNC_DELAY);
      }
    }
  };

  const handlePat = () => {
    pendingPatsRef.current += 1;

    setPats((current) => (current ?? 0) + 1);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(syncPats, SYNC_DELAY);
  };

  return (
    <div className="mt-10 flex justify-start">
      <div className="flex items-center gap-4">
        <motion.button
          type="button"
          onClick={handlePat}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.15 }}
          className="cursor-pointer"
          aria-label="Pat the Sauropod"
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
