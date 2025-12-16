import { Github, Linkedin, FileDown } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="mt-24">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        
        {/* Left */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <h1 className="text-3xl sm:text-4xl font-semibold whitespace-nowrap">
              Hoi, ik ben Angelun Tang
            </h1>
            <h2 className="text-lg sm:text-xl font-medium">
              19-jarige Software Developer student uit Schiedam
            </h2>
            <p className="text-base sm:text-lg font-semibold">Front-end Developer</p>
            <p className="text-base sm:text-lg text-muted">
                Altijd nieuwsgierig en klaar om nieuwe technologieën te ontdekken
                </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 text-sm">
            {/* CV button */}
            <a
              href="Angelun_Tang_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-border rounded-full px-4 py-1 hover:bg-foreground hover:text-background transition"
            >
              <span className="text-base sm:text-lg font-bold">cv</span>
              <FileDown size={20} />
            </a>

            {/* GitHub button */}
            <a
              href="https://github.com/AnJianTan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-foreground transition"
            >
              <Github size={20} />
            </a>

            {/* LinkedIn button */}
            <a
              href="https://www.linkedin.com/in/angelun-jiankai-tang-29233a328/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-foreground transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="w-48 h-64 lg:w-56 lg:h-80 rounded-xl bg-gray-700">
            <img 
              src="/Angelun_Tang.jpg" 
              alt="Angelun Tang" 
              className="w-full h-full object-cover rounded-xl" 
            /> 
          </div>
        </div>

      </div>
    </section>
  )
}