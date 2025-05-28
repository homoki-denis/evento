import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};

export default function PaginationControls({
  previousPath,
  nextPath,
}: PaginationControlsProps) {
  const btnStyles =
    "text-white flex items-center gap-x-2 hover:opacity-100 transition text-sm px-5 py-3 bg-white/5 rounded-md opacity-75";
  return (
    <section className="flex w-full justify-between">
      {previousPath ? (
        <Link href={previousPath} className={btnStyles}>
          <ArrowLeftIcon /> Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPath ? (
        <Link href={nextPath} className={btnStyles}>
          <ArrowRightIcon /> Next
        </Link>
      ) : (
        <div />
      )}
    </section>
  );
}
