import React from 'react';
import { Reveal } from './ui/Reveal';
import { CheckCircle2 } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    "Disciplina funcional (funciona sem motivação)",
    "Fim da procrastinação crônica",
    "Alta produtividade com menos esforço",
    "Evolução física e aumento de energia",
    "Clareza total do que fazer todos os dias",
    "Mentalidade resistente à pressão",
    "Controle e inteligência financeira",
    "Confiança inabalável no processo"
  ];

  return (
    <section className="py-12 md:py-24 px-4 bg-brand-black">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-snug py-2">
              QUEM VOCÊ SERÁ EM 40 DIAS?
            </h2>
            <p className="text-sm md:text-base text-gray-400 px-2">
              Ao final do Código, você não será o mesmo. A evolução é inevitável para quem executa.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6">
          {benefits.map((benefit, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 border-b border-brand-slate/50">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-brand-gold shrink-0 mt-0.5 md:mt-1" />
                <span className="text-sm md:text-lg text-gray-200 font-light">{benefit}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};