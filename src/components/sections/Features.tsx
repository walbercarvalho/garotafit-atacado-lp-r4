import React from 'react';
import { TrendingUp, Diamond, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: TrendingUp,
    title: 'Alta Margem de Lucro',
    description: 'Compre no atacado com descontos exclusivos e maximize os lucros da sua loja revendendo produtos de altíssima saída.'
  },
  {
    icon: Diamond,
    title: 'Qualidade Premium',
    description: 'Tecidos tecnológicos que não ficam transparentes, oferecem compressão ideal e durabilidade excepcional para suas clientes.'
  },
  {
    icon: ShieldCheck,
    title: 'Compra Segura e Garantida',
    description: 'Pagamento facilitado e processo de compra 100% seguro. Suporte dedicado para lojistas e revendedoras em cada etapa.'
  },
  {
    icon: Zap,
    title: 'Giro Rápido de Estoque',
    description: 'Modelagens exclusivas e tendências que as clientes adoram. Produtos desenvolvidos especificamente para ter alto giro.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
          >
            Por que revender Garotafit?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-600"
          >
            Nossa marca é sinônimo de qualidade e inovação. Entregamos muito mais que roupas de ginástica, entregamos um negócio lucrativo para você.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{feature.title}</h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
