import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-accent/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-xl rotate-3">
              <ShoppingBag className="text-primary-foreground w-6 h-6 -rotate-3" />
            </div>
            <span className="font-extrabold text-2xl tracking-tighter">GAROTAFIT</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#beneficios" className="hover:text-primary transition-colors text-sm font-medium">Benefícios</a>
              <a href="#colecao" className="hover:text-primary transition-colors text-sm font-medium">Coleção</a>
              <a href="#depoimentos" className="hover:text-primary transition-colors text-sm font-medium">Depoimentos</a>
            </div>
          </div>
          
          <div>
            <motion.a 
              href="#contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-6 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
            >
              Seja Revendedora
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
}
