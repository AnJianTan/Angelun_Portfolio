import { SiJavascript, SiHtml5, SiCss3, SiReact, SiTailwindcss, SiPhp, SiMysql } from "react-icons/si"
import { useState } from "react"

export default function Tools() {
  const languages = [
    { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "PHP", icon: SiPhp, color: "text-purple-600" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-400" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  ]

  const [hovered, setHovered] = useState(null)

  return (
    <section id="tools" className="mt-24 flex justify-center">
      <div className="flex items-center gap-4 border border-gray-700 rounded-xl p-4 bg-[#111111] transition-all duration-300">
        {languages.map((lang, idx) => {
          const Icon = lang.icon
          const isHovered = hovered === lang.name

          return (
            <div
              key={idx}
              className="flex flex-col items-center cursor-pointer px-2 py-1 relative transition-all duration-300"
              onMouseEnter={() => setHovered(lang.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <Icon size={28} className={`${lang.color}`} />

              <span
                className={`absolute mt-10 text-xs font-semibold transition-all duration-300 
                  ${isHovered ? "opacity-100 translate-y-0 text-white" : "opacity-0 translate-y-2"}`}
              >
                {lang.name}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}