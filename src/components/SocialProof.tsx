import { MessageCircleHeart } from 'lucide-react';

export default function SocialProof() {
  const snippets = [
    {
      quote: "Végre újra tudunk beszélgetni anélkül, hogy veszekedés lenne a vége.",
      author: "Anna és Gábor"
    },
    {
      quote: "Lívia segített meglátni, hogy nem egymás ellen vagyunk, hanem egy csapatban.",
      author: "Eszter és Zoltán"
    },
    {
      quote: "A válás széléről hoztuk vissza a kapcsolatunkat. Hálásak vagyunk!",
      author: "Katalin és Péter"
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 max-w-3xl mx-auto text-dark">
          Párok, akik már nézőpontot váltottak és elindultak a közös fejlődés útján Lívia segítségével:
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {snippets.map((snippet, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative">
              <MessageCircleHeart className="absolute top-6 right-6 text-primary/10" size={40} />
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="text-gray-700 font-medium italic mb-4 relative z-10">"{snippet.quote}"</p>
              <p className="text-sm font-bold text-dark">— {snippet.author}</p>
            </div>
          ))}
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
