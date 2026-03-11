export default function Founder() {
  return (
    <section className="py-20 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 max-w-md mx-auto lg:mx-0">
              <img 
                src="https://pjvq1reclhljbaqu.public.blob.vercel-storage.com/464688942_875451487900874_2304038547068012444_n-Photoroom.png" 
                alt="Lévai Lívia" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl -z-0"></div>
          </div>
          
          <div className="max-w-xl relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Lévai Lívia – Az Önök kísérője a változás útján.</h2>
            <div className="space-y-6 text-lg text-white/90 leading-relaxed font-light">
              <p>
                "14 éves korom óta az önismeret a szenvedélyem. Diplomás coachként és szupervizorként nem csak elméleteket tanítok, hanem segítek lebontani azokat a falakat, amik Önök közé álltak."
              </p>
              <p>
                "Célom egy olyan biztonságos tér megteremtése, ahol a legnehezebb dolgokat is ki lehet mondani, ítélkezés nélkül. Hiszem, hogy a megfelelő iránymutatással minden kapcsolat képes a megújulásra."
              </p>
            </div>
            
            <div className="mt-10 flex items-center gap-4">
              <img 
                src="https://www.parkapcsolatitanacsok.hu/wp-content/uploads/2021/09/parkapcsolatitanacsokhu-levai-livia-v08.png" 
                alt="Lévai Lívia portrait" 
                className="w-16 h-16 rounded-full border-2 border-white/20"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-bold text-xl">Lévai Lívia</p>
                <p className="text-white/70">Párkapcsolati tanácsadó, Coach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
