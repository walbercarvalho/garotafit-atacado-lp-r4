import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, ShoppingCart, Truck, Smile } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Cadastro Simples',
    description: 'Preencha o formulário com seus dados e aguarde a rápida aprovação do nosso time de especialistas em atacado.'
  },
  {
    icon: ShoppingCart,
    title: 'Acesse o Catálogo',
    description: 'Após aprovado, receba acesso exclusivo aos valores de atacado e condições especiais diretamente no seu e-mail ou WhatsApp.'
  },
  {
    icon: Truck,
    title: 'Faça seu Pedido',
    description: 'Escolha os produtos, atinja o pedido mínimo e finalize sua compra com segurança. Enviamos para todo o Brasil.'
  },
  {
    icon: Smile,
    title: 'Venda e Lucre',
    description: 'Receba seus produtos rapidamente e comece a vender. Nossas peças têm giro garantido e clientes fidelizadas.'
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
          >
            Como Funciona a Parceria
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-600"
          >
            Ser um revendedor Garotafit é fácil, rápido e descomplicado. Veja os passos para começar a lucrar.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-neutral-100 -translate-y-1/2 hidden lg:block" aria-hidden="true" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-white border-4 border-neutral-50 shadow-sm flex items-center justify-center mb-6 relative z-10">
                  <step.icon className="w-8 h-8 text-primary" />
                  
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm shadow-md border-2 border-white">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
