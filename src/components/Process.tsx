export default function Process() {
  const steps = [
    {
      num: "1",
      title: "Kapcsolatfelvétel",
      desc: "Kérjen egy ingyenes, 20 perces telefonos konzultációt, ahol átbeszéljük a helyzetüket."
    },
    {
      num: "2",
      title: "Első találkozás",
      desc: "Vegyenek részt egy 80 perces közös feltáró beszélgetésen Debrecenben vagy online."
    },
    {
      num: "3",
      title: "Közös munka",
      desc: "Dolgozunk a hozott mintákon és új kommunikációs eszközöket sajátítunk el."
    },
    {
      num: "4",
      title: "A megtérülés",
      desc: "Élvezzék a felszabadult, békés mindennapokat és a visszanyert intimitást."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">3 egyszerű lépés a harmonikus párkapcsolat felé</h2>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-8 left-12 right-12 h-0.5 bg-gray-100 z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white border-4 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-sm">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-3 text-dark">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
