export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="flex justify-center px-6 py-4">
        <div className="flex gap-8 border-2 border-white rounded-full px-6 py-2 bg-black/40">
          <a
            href="#home"
            className="text-lg font-bold text-muted transition-transform hover:text-white hover:scale-110"
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-lg font-bold text-muted transition-transform hover:text-white hover:scale-110"
          >
            Projects
          </a>
          <a
            href="#aboutme"
            className="text-lg font-bold text-muted transition-transform hover:text-white hover:scale-110"
          >
            Over mij
          </a>
        </div>
      </nav>
    </header>
  )
}