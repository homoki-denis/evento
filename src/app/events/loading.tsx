import { SkeletonCard } from "@/components/layout";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-wrap max-w-[1100px] max-auto px-[20px] py-24 gap-20 justify-center">
      {Array.from({ length: 6 }).map((item, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
