import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA, WHATSAPP_SUPPORT } from '../../constants/content';
import { ChevronDown, MessageCircle } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white"
          >
            Dúvidas <span className="text-red-600">Frequentes</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-600 dark:text-zinc-400"
          >
            Tudo o que você precisa saber antes de começar sua jornada como revendedora Garotafit.
          </motion.p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-black rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm hover:border-red-600/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-semibold text-lg text-zinc-900 dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-red-600 transition-transform flex-shrink-0 ml-4 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-5 pt-0 text-zinc-600 dark:text-zinc-400 prose dark:prose-invert">
                      <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Ainda tem dúvidas? Fale com nossa equipe!
          </p>
          <a
            href={WHATSAPP_SUPPORT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 px-6 py-3 rounded-full font-semibold transition-colors shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Chamar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
