import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp } from 'lucide-react';
import { HERO_CONTENT } from '../constants/content';
import { VSLPlayer } from './VSLPlayer';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[128px]" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-accent w-fit">
              <span className="flex h-2 w-2 rounded-full bg-primary relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              </span>
              <span className="text-sm font-medium text-foreground/80">{HERO_CONTENT.announcement}</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1]">
              {HERO_CONTENT.title.split('\n')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8fffa0]">{HERO_CONTENT.title.split('\n')[1]}.</span>
            </h1>
            
            <p className="text-lg text-foreground/70 max-w-xl leading-relaxed">
              {HERO_CONTENT.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contato"
                className="bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center shadow-[0_0_30px_rgba(212,255,0,0.3)]"
              >
                {HERO_CONTENT.ctaText}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <div className="flex items-center gap-4 text-sm text-foreground/60 px-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center overflow-hidden z-[${5-i}]`}>
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-primary">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span>+10.000 revendedoras</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center justify-center"
          >
            {/* VSL Player wrapper */}
            <div className="relative w-full aspect-video sm:max-w-[500px] lg:max-w-none lg:w-full rounded-[2rem] overflow-hidden bg-secondary border border-accent">
               <VSLPlayer
                 videoUrl="https://www.youtube.com/watch?v=buXVAEcaSNE"
                 duration="4 min"
                 isActive={true}
               />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-background/80 backdrop-blur-xl border border-accent p-4 rounded-2xl flex items-center gap-4 mt-4"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground/60 font-medium">Margem de Lucro</p>
                <p className="text-xl font-bold text-foreground">Até 150%</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
