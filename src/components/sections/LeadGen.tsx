import { motion } from 'framer-motion';
import { REGISTRATION_LINK } from '../../constants/content';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function LeadGen() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = REGISTRATION_LINK;
  };

  const benefits = [
    "Acesso imediato aos preços de atacado",
    "Catálogo exclusivo para revendedoras",
    "Material de apoio para vendas",
    "Atendimento personalizado via WhatsApp"
  ];

  return (
    <section id="cadastro" className="py-20 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 dark:text-white">
              Dê o primeiro passo para o seu <span className="text-red-600">novo negócio</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              Cadastre-se agora e junte-se a milhares de mulheres que transformaram suas vidas revendendo Garotafit.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-md mx-auto"
          >
            <div className="bg-white dark:bg-zinc-950 p-8 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-red-400" />
              
              <h3 className="text-2xl font-bold text-center mb-6 text-zinc-900 dark:text-white">
                Libere seu Acesso
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    Nome Completo
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors outline-none"
                    placeholder="Digite seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    E-mail
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors outline-none"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    WhatsApp
                  </label>
                  <input 
                    type="tel" 
                    id="whatsapp"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors outline-none"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 group"
                >
                  Continuar Cadastro
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-xs text-center text-zinc-500 dark:text-zinc-400 mt-4">
                  Seus dados estão seguros conosco. Não enviamos spam.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
