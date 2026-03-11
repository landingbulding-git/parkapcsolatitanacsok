export default function Footer() {
  return (
    <footer className="bg-dark text-white/60 py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-serif font-bold text-xl text-white">Lévai Lívia</div>
        <div className="text-sm text-center">
          Copyright © {new Date().getFullYear()} Lévai Lívia. Minden jog fenntartva.
        </div>
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-white transition-colors">Adatvédelmi irányelvek</a>
          <a href="#" className="hover:text-white transition-colors">Kapcsolat</a>
        </div>
      </div>
    </footer>
  );
}
