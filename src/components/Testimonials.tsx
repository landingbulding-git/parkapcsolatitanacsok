export default function Testimonials() {
  const testimonials = [
    {
      headline: "A válás küszöbéről találtunk vissza egymáshoz",
      text: "Már a papírokat is beadtuk volna, annyira eltávolodtunk. Lívia módszereivel megtanultuk újra hallani egymást. Ma már békésebb a kapcsolatunk, mint valaha.",
      author: "Katalin és Péter, Debrecen"
    },
    {
      headline: "Végre megszűnt a mindennapos feszültség",
      text: "Minden apróságon összevesztünk. A tanácsadás során rájöttünk, hogy mik a valódi mozgatórugók a vitáink mögött. A házi feladatok nagyon sokat segítettek a mindennapokban.",
      author: "Eszter és Zoltán, Debrecen"
    },
    {
      headline: "Újra van intimitás a kapcsolatunkban",
      text: "Évek óta csak lakótársakként éltünk. Lívia ítélkezésmentes közege segített megnyílni, és újra felfedezni azt, amiért annak idején egymásba szerettünk.",
      author: "Anna és Gábor, Hajdúböszörmény"
    },
    {
      headline: "Megtanultunk kommunikálni",
      text: "Azt hittem, jól kommunikálok, de kiderült, hogy csak beszélek, nem figyelek. A 3 hónapos program teljesen átformálta a hozzáállásunkat.",
      author: "Judit és Tamás, Debrecen"
    },
    {
      headline: "Biztonságos tér a legnehezebb témáknak is",
      text: "Olyan dolgokat is ki tudtunk mondani Líviánál, amiket otthon sosem mertünk volna. A mediátori szemlélete aranyat ér.",
      author: "Nóra és Márk, Online"
    },
    {
      headline: "A legjobb befektetés a családunkba",
      text: "A gyerekeink is észrevették, hogy már nem feszült a hangulat otthon. Ez mindennél többet ér számunkra. Köszönjük!",
      author: "Szilvia és László, Debrecen"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Akiknek már sikerült: Tanúvallomások a közös munkánkról</h2>
          <p className="text-lg text-gray-600">Valós történetek olyan pároktól, akik a szakadék széléről hozták vissza a kapcsolatukat.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((test, idx) => (
            <div key={idx} className="break-inside-avoid bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <h3 className="font-bold text-lg mb-3 text-dark leading-tight">"{test.headline}"</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{test.text}</p>
              <p className="text-sm font-bold text-primary uppercase tracking-wider">{test.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
