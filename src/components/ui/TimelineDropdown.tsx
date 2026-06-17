// components/TimelineDropdown.tsx

import { useState, useRef, useEffect } from "react";

interface TimelineDropdownProps {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  hasError: boolean;
  options: string[];
}

export default function TimelineDropdown({
  value,
  onChange,
  onBlur,
  hasError,
  options,
}: TimelineDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        if (open) onBlur();
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onBlur]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        onBlur();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onBlur]);

  const handleToggle = () => setOpen((prev) => !prev);

  const handleSelect = (option: string) => {
    onChange(option);
    setOpen(false);
    onBlur();
  };

  const borderClass = hasError
    ? "border-red-400 focus-within:ring-2 focus-within:ring-red-200"
    : "border-gray-200 focus-within:border-[#1CA6A3] focus-within:ring-2 focus-within:ring-[#1CA6A3]/20";

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger button */}
      <button
        type="button"
        onClick={handleToggle}
        className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-left outline-none transition-all duration-200 flex items-center justify-between ${borderClass} ${
          value ? "text-[#333333]" : "text-gray-400"
        }`}
      >
        <span>{value || "Select a timeline"}</span>
        <svg
          className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180 text-[#1CA6A3]" : "rotate-0 text-gray-400"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown list */}
      {open && (
        <ul className="absolute z-50 mt-1.5 -pb-3 w-full rounded-lg border border-gray-100 bg-white  shadow-lg shadow-black/10 overflow-hidden">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className={`px-4 py-2 text-sm cursor-pointer transition-colors duration-150 ${
                value === option
                  ? "bg-[#1CA6A3] text-white font-medium"
                  : "text-[#333333] hover:bg-[#1CA6A3]/10 hover:text-[#1CA6A3]"
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}