import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
<footer className="mt-32 mb-16 bg-[#050505] rounded-2xl w-[60%] mx-auto">
  <div className="px-6 py-6 flex items-center justify-between text-sm text-muted">
    {/* Left */}
    <span>© 2025 Angelun Tang</span>

    {/* Right */}
    <div className="flex gap-4">
      <a
        href="https://github.com/AnJianTan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/angelun-jiankai-tang-29233a328/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={20} />
      </a>
    </div>
  </div>
</footer>
  )
}
