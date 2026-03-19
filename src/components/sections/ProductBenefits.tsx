import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const benefitsList = [
  'Tecido Zero Transparência',
  'Proteção UV50+',
  'Costuras Reforçadas',
  'Modelagem Anatômica',
  'Alta Compressão',
  'Evaporação Rápida (Dry)',
  'Fadiga Muscular Reduzida',
  'Não Desbota'
];

export const ProductBenefits = () => {
  return (
    <section className="py-24 bg-neutral-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary font-medium text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Tecnologia de Ponta
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              O produto que suas clientes vão <span className="text-primary">amar usar</span>
            </h2>
            
            <p className="text-lg text-neutral-300 mb-10 leading-relaxed">
              Não vendemos apenas roupas, entregamos performance e estilo. Nossas peças são desenvolvidas com tecidos premium que garantem o máximo de conforto e durabilidade, aumentando a retenção das suas clientes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {benefitsList.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-neutral-200">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a 
                href="#cadastro" 
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto text-lg"
              >
                Quero Revender Garotafit
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden relative group">
              {/* Fallback pattern if image is missing */}
              <div className="absolute inset-0 bg-neutral-800" />
              
              <img 
                src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Detalhe do tecido Garotafit" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-xl">100%</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Satisfação</h4>
                    <p className="text-neutral-300 text-sm">Das revendedoras aprovam a qualidade</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
