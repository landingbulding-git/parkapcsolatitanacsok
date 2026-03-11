import { CalendarDays, HeartHandshake, Wrench } from 'lucide-react';

export default function ValueProps() {
  const props = [
    {
      icon: <CalendarDays className="text-white" size={32} />,
      title: "Személyre szabott 3 hónapos program",
      desc: "Hogy ne csak tüneti kezelést kapjanak, hanem tartós alapokat építsenek a közös jövőhöz."
    },
    {
      icon: <HeartHandshake className="text-white" size={32} />,
      title: "Ítélkezésmentes, mediátori szemlélet",
      desc: "Hogy mindkét fél végre valódi megértésre találjon a másikban, és biztonságban érezze magát."
    },
    {
      icon: <Wrench className="text-white" size={32} />,
      title: "Gyakorlatias házi feladatok",
      desc: "Azonnal bevethető technikák, hogy a feszültséget már az első alkalmak után otthon is rendezni tudják."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Valódi megoldások, nem csak beszélgetés</h2>
          <p className="text-lg text-gray-600">A módszertan, ami segít áttörni a kommunikációs gátakat és újraépíteni a bizalmat.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {props.map((vp, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 transform -rotate-3">
                {vp.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-dark">{vp.title}</h3>
              <p className="text-gray-600 leading-relaxed">{vp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
