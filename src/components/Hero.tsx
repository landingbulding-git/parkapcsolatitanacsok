import { Star, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-slate-50 pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Copy */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <span className="text-sm font-semibold text-gray-700">4.9/5 Csillagos értékelés elégedett ügyfelektől</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6 text-dark">
              Találják meg újra a közös hangot <span className="text-primary">3 hónap alatt</span>, és teremtsenek olyan békés otthont, ahol gyermekeik is szeretetben nőhetnek fel.
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Felejtse el a végtelen veszekedéseket és a fojtogató elhidegülést – ismerje meg azt a tudatos kommunikációs módszert, amellyel még a válás széléről is visszahozható a kapcsolat.
            </p>

            {/* Trust Logos */}
            <div className="flex items-center gap-4 mb-10 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck className="text-primary" size={24} />
              </div>
              <div>
                <p className="font-bold text-dark text-sm">HUB Közösségi Tér</p>
                <p className="text-xs text-gray-500">Debrecen szívében, diszkrét és biztonságos környezetben várom Önöket.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual & Form */}
          <div className="flex flex-col gap-8 h-full max-w-md mx-auto w-full">
            {/* Image - decreased size */}
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://parkapcsolatitanacsok.hu/wp-content/uploads/2021/09/parkapcsolatitanacsokhu-levai-livia-v04.jpg" 
                alt="Párkapcsolat" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent"></div>
            </div>

            {/* Lead Capture Form */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 relative w-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 whitespace-nowrap shadow-sm">
                <Clock size={16} /> Nincs elköteleződés
              </div>
              <h3 className="text-2xl font-bold text-center mb-6 mt-2">Kérjen ingyenes, 20 perces telefonos tájékoztatót!</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Keresztnév</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Pl. Katalin" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefonszám</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="+36 30 123 4567" required />
                </div>
                <button type="submit" className="w-full bg-secondary hover:bg-secondary-hover text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  Kérem az ingyenes visszahívást
                </button>
              </form>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-500" /> 24 órán belüli válasz</span>
                <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-green-500" /> 100% titoktartás</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}