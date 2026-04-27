"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu } from "lucide-react";

const nav = ["MEN", "WOMEN", "EYEWEAR"];

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      <div className="hidden lg:flex justify-end items-center gap-4 px-8 pt-3 pb-1">
        <SearchToggle
          open={searchOpen}
          onToggle={() => setSearchOpen((o) => !o)}
        />
        <button
          aria-label="Shopping bag"
          className="p-1 cursor-pointer hover:opacity-50 transition-opacity"
        >
          <ShoppingBag size={18} strokeWidth={1.5} />
        </button>
      </div>

      <div className="hidden lg:flex items-baseline gap-8 px-8 pt-1 pb-4 border-b border-gray-light">
        <Link
          href="/"
          className="font-bold text-3xl leading-[1] whitespace-nowrap"
        >
          ATELIER NOIR
        </Link>
        <nav className="flex gap-8">
          {nav.map((label) => (
            <Link
              key={label}
              href="#"
              className="text-lg font-bold leading-[1] hover:opacity-50 transition-opacity"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="hidden md:flex lg:hidden items-center justify-between px-6 pt-3 pb-1">
        <button aria-label="Open menu" className="p-1 cursor-pointer">
          <Menu size={22} strokeWidth={1.5} />
        </button>
        <Link
          href="/"
          className="font-bold text-3xl leading-none whitespace-nowrap"
        >
          ATELIER NOIR
        </Link>
      </div>

      <div className="hidden md:flex lg:hidden justify-end items-center gap-4 px-6 pb-3 border-b border-gray-light">
        <SearchToggle
          open={searchOpen}
          onToggle={() => setSearchOpen((o) => !o)}
        />
        <button
          aria-label="Shopping bag"
          className="p-1 cursor-pointer hover:opacity-50 transition-opacity"
        >
          <ShoppingBag size={18} strokeWidth={1.5} />
        </button>
      </div>

      <div className="md:hidden relative flex items-center h-14 px-4">
        <button aria-label="Open menu" className="p-1 cursor-pointer">
          <Menu size={22} strokeWidth={1.5} />
        </button>
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 font-bold text-3xl leading-none whitespace-nowrap"
        >
          ATELIER NOIR
        </Link>
      </div>

      <div className="md:hidden flex items-center gap-3 px-4 pb-3 border-b border-gray-light">
        <Search size={18} strokeWidth={1.5} />
        <input
          type="search"
          placeholder="Search"
          className="flex-1 text-sm outline-none placeholder:text-gray-light"
        />
      </div>
    </header>
  );
}

function SearchToggle({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      {open && (
        <input
          autoFocus
          type="search"
          placeholder="Search"
          className="w-[200px] text-sm outline-none border-b border-black pb-0.5"
        />
      )}
      <button
        onClick={onToggle}
        aria-label={open ? "Close search" : "Search"}
        className="p-1 cursor-pointer hover:opacity-50 transition-opacity"
      >
        <Search size={18} strokeWidth={1.5} />
      </button>
    </div>
  );
}
