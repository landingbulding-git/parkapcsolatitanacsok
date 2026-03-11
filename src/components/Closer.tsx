import { CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export default function Closer() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-white">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight text-white">
              Ne várja meg, amíg végleg elhidegülnek – mentse meg kapcsolatát még ma!
            </h2>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary" size={24} />
                <span className="text-xl font-medium">Ingyenes, 20 perces telefonos tájékoztató.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary" size={24} />
                <span className="text-xl font-medium">Személyre szabott megoldási terv.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary" size={24} />
                <span className="text-xl font-medium">Diszkrét, debreceni helyszín vagy online kényelem.</span>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-center mb-6 text-dark">Kérjen időpontot most!</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="c-name" className="block text-sm font-medium text-gray-700 mb-1">Név</label>
                  <input type="text" id="c-name" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Teljes név" required />
                </div>
                <div>
                  <label htmlFor="c-phone" className="block text-sm font-medium text-gray-700 mb-1">Telefonszám</label>
                  <input type="tel" id="c-phone" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="+36 30 123 4567" required />
                </div>
                <button type="submit" className="w-full bg-secondary hover:bg-secondary-hover text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 mt-4">
                  Kérem az ingyenes visszahívást
                </button>
              </form>
              
              <div className="mt-6 flex flex-col items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                  <span className="flex items-center gap-1"><Clock size={16} /> Válasz 24 órán belül</span>
                  <span className="flex items-center gap-1"><ShieldCheck size={16} /> 100% titoktartás</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>
  );
}
