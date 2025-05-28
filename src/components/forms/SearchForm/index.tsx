"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText) return;
    router.push(`/events/${searchText}`);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none text-white transition focus:ring=2 focus:bg-white/10"
        type="text"
        placeholder="Search events in any city..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        spellCheck={false}
      />
    </form>
  );
}
