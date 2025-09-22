"use client";

import { useEffect } from "react";

const sections = [
  { id: "philosophy", label: "Corporate Philosophy" },
  { id: "operations", label: "Operations" },
  { id: "management", label: "Management" },
  { id: "consulting", label: "Consulting" },
];

export default function AboutSidebar() {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Optional: highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });
      sections.forEach(({ id }) => {
        const btn = document.getElementById(`btn-${id}`);
        if (btn) {
          if (id === current) btn.classList.add("bg-[#010810]", "text-white");
          else btn.classList.remove("bg-[#010810]", "text-white");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="sticky top-24 space-y-2 border border-[#E7E7E7] w-full md:w-64">
      {sections.map((s) => (
        <button
          key={s.id}
          id={`btn-${s.id}`}
          onClick={() => handleClick(s.id)}
          className="w-full text-center px-3 py-5 transition hover:bg-[#010810] hover:text-white border-b border-[#E7E7E7]"
        >
          {s.label}
        </button>
      ))}
    </aside>
  );
}
