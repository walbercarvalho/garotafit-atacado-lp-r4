import { motion } from 'framer-motion';
import { WHATSAPP_PRINTS } from '../../constants/content';

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white dark:bg-black">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white"
          >
            Nossas clientes <span className="text-red-600">comprovam</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            Veja o que as revendedoras Garotafit estão falando sobre nossos produtos e a lucratividade do negócio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHATSAPP_PRINTS.map((print, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
                <img 
                  src={print.image} 
                  alt={print.alt}
                  className="w-full h-auto object-contain max-h-[600px]"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
