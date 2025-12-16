import { ExternalLink } from "lucide-react"

// Example project data
const projects = [
  {
    title: "Portfolio Website",
    description: "Mijn persoonlijke portfolio website gebouwd met React en Tailwind CSS.",
    link: "#",
  },
  {
    title: "Tegelwip Atlas",
    description: "Interactieve kaart-app om vergroening van steden te laten zien, gebouwd met React Native.",
    link: "#",
  },
  {
    title: "Jeff",
    description: "Interactief ziekenhuis display project voor positieve afleiding, gemaakt met React en sensors.",
    link: "#",
  },
  // Voeg hier meer projecten toe
]

export default function Projects() {
  return (
    <section id="projects" className="mt-24 max-w-5xl mx-auto px-6">
      <h2 className="text-2xl sm:text-3xl pl-0 font-bold mb-8">Projecten</h2>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#111111] p-6 rounded-2xl hover:scale-105 transition transform shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-sm mb-4">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-yellow-400 font-semibold hover:underline"
              >
                Bekijk project <ExternalLink size={16} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
