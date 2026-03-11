import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "Mi van, ha a párom nem akar eljönni?",
      a: "Egyéni konzultációval is elindulhat a változás; gyakran ha az egyik fél változtat a dinamikán, a másik is nyitottabbá válik. Nem kell megvárni, amíg mindketten készen állnak, a saját hozzáállásod megváltoztatása is hatalmas hatással lehet a kapcsolatra."
    },
    {
      q: "Hány alkalomra lesz szükség?",
      a: "A 3 hónapos programunkat úgy alakítottuk ki, hogy az alapvető változások rögzülni tudjanak. Ez idő alatt heti rendszerességgel találkozunk (vagy online beszélünk), és folyamatos támogatást kaptok a feladatokhoz."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Gyakori kérdések a tanácsadásról</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.q} answer={faq.a} defaultOpen={idx === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  key?: React.Key;
}

function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button 
        className="w-full px-6 py-5 text-left flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg text-dark">{question}</span>
        {isOpen ? <ChevronUp className="text-primary shrink-0" /> : <ChevronDown className="text-primary shrink-0" />}
      </button>
      {isOpen && (
        <div className="px-6 py-5 bg-white text-gray-600 leading-relaxed border-t border-gray-100">
          {answer}
        </div>
      )}
    </div>
  );
}
