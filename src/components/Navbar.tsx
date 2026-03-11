export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-serif font-bold text-xl text-primary">Lévai Lívia</span>
          <span className="hidden sm:inline-block text-sm text-gray-500 border-l border-gray-300 pl-2 ml-2">Párkapcsolati tanácsadás</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-secondary hover:bg-secondary-hover text-white font-bold py-2 px-6 rounded-full shadow-md transition-all transform hover:-translate-y-0.5 text-sm sm:text-base">
            Kérem az ingyenes visszahívást
          </button>
        </div>
      </div>
    </header>
  );
}
