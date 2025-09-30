"use client";

import { useEffect } from "react";

const sections = [
  { id: "mission", label: "Our Mission" },
  { id: "leadership", label: "Leadership" },
  { id: "strengths", label: "PPH Strengths" },
  { id: "brand-expertise", label: "Brand Expertise" },
  { id: "recognition", label: "Recognition" },
  { id: "employee-relations", label: "Employee Relations" },
  { id: "sustainability", label: "Sustainability at Pacific Pearl Hotels" },
  { id: "technology-data", label: "Technology & Data" },
  { id: "citizenship", label: "Corporate Citizenship" },
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
          className="w-full text-center px-3 py-5 rounded transition hover:bg-[#010810] hover:text-white border-b border-[#E7E7E7] font-general font-medium text-lg"
        >
          {s.label}
        </button>
      ))}
    </aside>
  );
}
