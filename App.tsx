
import React, { useState, useRef, useEffect } from 'react';

import { REGISTRATION_LINK, FAQ_DATA, PRODUCTS, WHATSAPP_PRINTS } from './src/constants/content';

// --- Helper Components ---

const SectionSubtitle: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="h-[1px] w-8 bg-black"></div>
    <span className="uppercase text-xs tracking-widest font-bold">{text}</span>
  </div>
);

const AccordionItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
  const contentId = `accordion-content-${question.replace(/\s+/g, '-').toLowerCase()}`;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <div
        className="accordion-header"
        onClick={onClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span>{question}</span>
        {isOpen ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        )}
      </div>
      <div className="accordion-content" id={contentId} role="region" aria-labelledby={contentId}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedProductImage, setSelectedProductImage] = useState<string | null>(null);
  const [isModalClosing, setIsModalClosing] = useState(false);

  const closeModal = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setSelectedProductImage(null);
      setIsModalClosing(false);
    }, 300); // tempo bate com a duração da animação (300ms)
  };

  const MULTIPLIER = 4;
  const extendedPrints = Array(MULTIPLIER).fill(WHATSAPP_PRINTS).flat();

  useEffect(() => {
    // Scroll inicial para permitir rolagem livre para ambos os lados
    if (scrollContainerRef.current) {
      setTimeout(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const setWidth = container.scrollWidth / MULTIPLIER;
          container.scrollTo({ left: setWidth, behavior: 'auto' });
        }
      }, 150);
    }
  }, []);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const setWidth = container.scrollWidth / MULTIPLIER;

    // Se estiver no final das réplicas ou no início, dá um 'salto' invisível para manter o loop
    if (container.scrollLeft >= setWidth * (MULTIPLIER - 1)) {
      container.scrollTo({ left: container.scrollLeft - setWidth, behavior: 'auto' });
    } else if (container.scrollLeft <= 0) {
      container.scrollTo({ left: container.scrollLeft + setWidth, behavior: 'auto' });
    }
  };

  const getItemScrollStep = () => {
    if (!scrollContainerRef.current) return 300;
    const item = scrollContainerRef.current.querySelector('.carousel-item') as HTMLElement;
    const itemWidth = item ? item.offsetWidth : 300;
    const gap = window.innerWidth >= 768 ? 32 : 16;
    return itemWidth + gap;
  };

  useEffect(() => {
    if (isPaused) return; // Pausa se o usuário interagir
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: getItemScrollStep(), behavior: 'smooth' });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollLeftBtn = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -getItemScrollStep(), behavior: 'smooth' });
    }
  };

  const scrollRightBtn = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: getItemScrollStep(), behavior: 'smooth' });
    }
  };

  return (
    <div className="antialiased">
      {/* Header Atualizado com Grid para Centralização */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 px-4 md:px-6 py-2 md:py-4 flex justify-between lg:grid lg:grid-cols-3 items-center h-[70px] md:h-[90px]">
        {/* Lado Esquerdo: Logo e Badge */}
        <div className="flex items-center gap-4">
          <img
            src="https://storage.googleapis.com/vms1/stores/10/logo-garotafit-atacado.png"
            alt="Garotafit Atacado - Moda Fitness no Atacado"
            className="w-[120px] md:w-[180px] object-contain cursor-pointer"
          />
          <span className="hidden lg:block text-[10px] uppercase font-bold bg-black text-white px-2 py-1 rounded">
            Site Oficial Atacado
          </span>
        </div>

        {/* Centro: Texto Institucional Centralizado */}
        <div className="hidden lg:flex justify-center text-center">
          <span className="text-[11px] font-medium max-w-[560px]">Tenha acesso ao catálogo, peças e valores exclusivos para atacado.</span>
        </div>

        {/* Lado Direito: Botão de Cadastro */}
        <div className="flex items-center justify-end h-full">
          <a
            href={REGISTRATION_LINK}
            className="btn-primary text-[12px] md:text-xs py-0 px-4 md:px-8 h-full flex items-center justify-center rounded-none min-w-[120px] md:min-w-[200px] leading-tight text-center min-h-[44px]"
            aria-label="Fazer cadastro para revenda Garotafit"
          >
            Fazer meu cadastro
          </a>
        </div>
      </header>

      <main className="pt-[70px] md:pt-[90px]">
        {/* Section 1: Hero */}
        <section className="bg-white px-6 lg:px-20 py-16 lg:py-28 flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
          <div className="w-full lg:w-1/2 space-y-8">
            <SectionSubtitle text="Revenda Garotafit" />
            <h1 className="heading-hero text-black">
              <span className="text-accent">Moda fitness</span> no atacado para revender com retorno de <span className="text-accent">até 100%</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl">
              Peças à pronta entrega com despacho em até 24h após confirmação do pagamento (envio de SP para todo Brasil).
            </p>
            <ul className="space-y-3 font-semibold text-sm lg:text-base">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#FFB02E] rounded-full" aria-hidden="true"></div>
                Até 6x sem juros no cartão
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#FFB02E] rounded-full" aria-hidden="true"></div>
                Catálogo e preços exclusivos liberados após cadastro
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#FFB02E] rounded-full" aria-hidden="true"></div>
                Suporte dedicado no WhatsApp
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={REGISTRATION_LINK} className="btn-primary" aria-label="Fazer cadastro para revenda Garotafit">Fazer meu cadastro</a>
              <a href={REGISTRATION_LINK} className="btn-secondary" aria-label="Quero revender produtos Garotafit">Quero revender Garotafit</a>
            </div>
            <p className="text-xs text-gray-500 italic max-w-md">
              *Após o cadastro, você fala diretamente com nosso time no WhatsApp e libera seu acesso ao catálogo com preços exclusivos para atacado.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative group cursor-pointer flex justify-center mt-8 lg:mt-0">
            <div className="w-3/4 md:w-2/3 lg:w-3/4 relative z-10 border-[10px] lg:border-[15px] border-white shadow-2xl">
              <img
                src="https://lp.garotafitbrasil.com.br/wp-content/uploads/2025/07/9-683x1024.jpg"
                alt="Modelo vestindo conjunto fitness Garotafit - Moda fitness de alta qualidade para revenda"
                className="w-full h-auto object-cover grayscale-0 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute top-10 -right-[-10%] md:-right-[-20%] w-3/4 md:w-2/3 lg:w-3/4 h-full bg-[#FFB02E] -z-10 opacity-10"></div>
          </div>
        </section>

        {/* Section 2: Mini-bloco */}
        <section className="bg-black text-white px-6 py-20 lg:py-32 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-5xl">O setor que mais cresce no Brasil</h2>
            <p className="text-lg lg:text-xl text-gray-400">
              A moda fitness nunca esteve tão em alta e isso significa uma coisa: vendas constantes. E você pode ter um lucro de até 100% já na sua primeira venda.
            </p>
            <div className="pt-6">
              <a href={REGISTRATION_LINK} className="btn-primary" aria-label="Fazer cadastro para começar a revender">Fazer meu cadastro</a>
            </div>
          </div>
        </section>

        {/* Section 3: Valor Unico */}
        <section className="bg-white px-6 lg:px-20 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
            <div className="space-y-6">
              <SectionSubtitle text="Nossos diferenciais" />
              <h2 className="text-3xl lg:text-5xl leading-tight">
                Por que revendedoras preferem a Garotafit no atacado de moda fitness
              </h2>
            </div>
            <div className="text-lg text-gray-600">
              Comece pequeno, venda rápido e cresça com suporte especializado. A Garotafit entrega moda fitness no atacado com condições exclusivas para sua revenda e atendimento especializado no WhatsApp para você vender com segurança.
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Retorno de até 100%", d: "Margem competitiva para você reinvestir e escalar seu negócio." },
              { t: "Parcele em até 6x sem juros", d: "Ganhe fôlego para montar seu estoque." },
              { t: "Lançamentos Mensais", d: "Tenha acesso antecipado aos novos modelos e coleções fitness." },
              { t: "Pronta entrega + despacho em até 24h", d: "Após confirmação do pagamento." },
            ].map((card, i) => (
              <div key={i} className="card-value group">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#FFB02E] transition-colors duration-300">
                  <span className="font-bold text-xl">{i + 1}</span>
                </div>
                <h3 className="text-xl mb-4">{card.t}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{card.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center space-y-6">
            <a href={REGISTRATION_LINK} className="btn-primary" aria-label="Quero me tornar revendedor Garotafit">Quero me tornar um(a) revendedor(a)</a>
            <p className="text-sm text-gray-400 font-medium">Cadastre-se para liberar o catálogo, peças e valores exclusivos do atacado.</p>
          </div>
        </section>

        {/* Section 4: Produtos */}
        <section className="bg-gray-50 px-6 lg:px-20 py-20 lg:py-32">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <SectionSubtitle text="Coleção Atacado" />
            <h2 className="text-3xl lg:text-5xl">Produtos premium com alto giro - moda fitness no atacado</h2>
            <p className="text-gray-600">Monte um mix com peças de alto giro. Cadastre-se para liberar os valores de atacado, peças e condições exclusivas.</p>
            <div className="mt-6 inline-block bg-[#FFB02E] text-black font-bold px-6 py-3 uppercase text-xs tracking-tighter">
              Comece com apenas algumas peças + retorno de até 100% + pronta entrega
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
            {PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="group cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`Ver produto: ${prod.tag}`}
                onClick={() => setSelectedProductImage(prod.img)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProductImage(prod.img);
                  }
                }}
              >
                <div className="overflow-hidden border border-gray-200">
                  <img
                    src={prod.img}
                    alt={`${prod.tag} - Moda fitness Garotafit para revenda no atacado`}
                    className="w-full h-auto aspect-[3/4] object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4">
                  <span className="product-tag">{prod.tag}</span>
                  <div className="mt-2 h-[1px] w-0 group-hover:w-full bg-black transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center space-y-8">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
              Pedido despachado em até 24h após confirmação do pagamento (envio de SP para todo Brasil).
            </p>
            <a href={REGISTRATION_LINK} className="btn-primary" aria-label="Fazer cadastro para acessar catálogo">Fazer meu cadastro</a>
          </div>
        </section>

        {/* Section 5: Como funciona */}
        <section className="bg-white px-6 lg:px-20 py-20 lg:py-32">
          <div className="max-w-3xl mb-16">
            <SectionSubtitle text="Passo a Passo" />
            <h2 className="text-3xl lg:text-5xl">Como comprar no atacado com a Garotafit e começar a revender hoje</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                p: "Passo 1",
                t: "Faça seu cadastro",
                d: "Libere catálogo, peças e valores do atacado.",
                icon: (
                  <svg className="w-10 h-10 text-[#FFB02E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                )
              },
              {
                p: "Passo 2",
                t: "Contato via WhatsApp",
                d: "Nosso time irá te ajudar a montar o seu primeiro pedido.",
                icon: (
                  <svg className="w-10 h-10 text-[#FFB02E]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.554 4.197 1.604 6.04L0 24l6.117-1.605a11.782 11.782 0 005.925 1.597h.005c6.635 0 12.032-5.396 12.035-12.033a11.77 11.77 0 00-3.504-8.508z" />
                  </svg>
                )
              },
              {
                p: "Passo 3",
                t: "Receba e comece a vender",
                d: "Pronta entrega e despacho em até 24h após confirmação.",
                icon: (
                  <svg className="w-10 h-10 text-[#FFB02E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                )
              }
            ].map((step, i) => (
              <div key={i} className="flex flex-col gap-4 group">
                <div className="mb-2 p-4 bg-gray-50 w-fit group-hover:bg-[#FFB02E]/10 transition-colors">
                  {step.icon}
                </div>
                <span className="text-accent font-bold text-xs uppercase tracking-widest">{step.p}</span>
                <h3 className="text-2xl">{step.t}</h3>
                <p className="text-gray-500 leading-relaxed">{step.d}</p>
                <div className="mt-4 h-[2px] w-12 bg-black"></div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <a href={REGISTRATION_LINK} className="btn-primary" aria-label="Fazer cadastro para começar a revender">Fazer meu cadastro</a>
          </div>
        </section>

        {/* Section 6: Prova Social (Depoimentos) */}
        <section className="bg-black text-white px-6 lg:px-20 py-20 lg:py-32">
          <div className="text-center mb-20 space-y-4">
            <SectionSubtitle text="Revendedores de Sucesso" />
            <h2 className="text-3xl lg:text-5xl">Resultados reais de revendedores Garotafit</h2>
            <p className="text-gray-400">Depoimentos reais de quem começou com pouco e escalou rápido.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                n: "Lucia Helena",
                c: "Revendedora - Rio de Janeiro",
                b: "A rapidez do envio me surpreendeu, chegou em 3 dias. Vendi tudo em uma semana!",
                img: "https://lp.garotafitbrasil.com.br/wp-content/uploads/2025/07/foto-1-1024x1024.png"
              },
              {
                n: "Ricardo Costa",
                c: "Revendedor - Santa Catarina",
                b: "O atendimento no WhatsApp foi essencial para eu montar meu mix. Os macaquinhos vendem muito e são maravilhosos.",
                img: "https://lp.garotafitbrasil.com.br/wp-content/uploads/2025/07/foto-2-1024x1024.png"
              },
              {
                n: "Rafael Oliveira",
                c: "Revendedor - São Paulo",
                b: "Minhas clientes amam o tecido. Giro muito rápido e já estou no meu terceiro pedido em 2 meses.",
                img: "https://lp.garotafitbrasil.com.br/wp-content/uploads/2025/07/foto3-1024x1024.png"
              }
            ].map((dep, i) => (
              <div key={i} className="border border-white/10 overflow-hidden flex flex-col relative group bg-white/5 p-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1 text-[#FFB02E]" role="img" aria-label="Avaliação 5 estrelas">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-3 h-3 fill-current" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                    ))}
                  </div>
                  {/* Imagem alterada para 112px como solicitado */}
                  <div className="w-[112px] h-[112px] overflow-hidden rounded-full border border-white/20">
                    <img
                      src={dep.img}
                      alt={`Foto de ${dep.n}, ${dep.c}`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                <p className="italic text-gray-300 mb-6 leading-relaxed">"{dep.b}"</p>

                <div className="mt-auto pt-4 border-t border-white/10">
                  <h4 className="font-bold text-white text-sm">{dep.n}</h4>
                  <p className="text-[10px] text-[#FFB02E] font-bold uppercase mt-1 tracking-widest">{dep.c}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nova Seção: Prova Social (WhatsApp Prints) */}
        <section className="bg-white px-6 lg:px-20 py-20 lg:py-32">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl leading-tight">
              VEJA O DEPOIMENTO DE QUEM JÁ ESTÁ <span className="text-accent">LUCRANDO MUITO</span> COM A GAROTAFIT
            </h2>
            <p className="text-gray-500 max-w-4xl mx-auto text-lg">
              Conversas reais entre nossas consultoras e suas revendedoras de sucesso que já conquistaram sua independência financeira revendendo Garotafit
            </p>
          </div>

          {/* Controles e Carrossel */}
          <div
            className="relative max-w-6xl mx-auto group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >

            {/* Botão Voltar */}
            <button
              onClick={scrollLeftBtn}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
              aria-label="Voltar carrossel"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Container do Carrossel */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory pt-4 pb-8 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
              {extendedPrints.map((img, i) => (
                <div
                  key={i}
                  className="carousel-item w-[70vw] sm:w-[280px] md:w-[320px] lg:w-[350px] flex-shrink-0 snap-center border-[6px] md:border-[8px] border-[#FFB02E] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl md:shadow-2xl transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Depoimento real de revendedora Garotafit via WhatsApp`}
                    className="w-full h-auto block"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            {/* Botão Avançar */}
            <button
              onClick={scrollRightBtn}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
              aria-label="Avançar carrossel"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="mt-16 text-center">
            <a href={REGISTRATION_LINK} className="btn-primary px-12" aria-label="Quero revender moda fitness Garotafit">Quero revender moda fitness</a>
          </div>
        </section>

        {/* Section 7: FAQ (Melhorada conforme print) */}
        <section className="bg-[#0a0a0a] text-white px-6 lg:px-20 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <div className="flex items-center justify-center gap-4 text-[#FFB02E] mb-2 font-bold tracking-[0.2em] text-xs uppercase">
                <div className="w-8 h-[1px] bg-[#FFB02E]"></div>
                FAQ
                <div className="w-8 h-[1px] bg-[#FFB02E]"></div>
              </div>
              <h2 className="text-3xl lg:text-5xl">
                Dúvidas Frequentes
              </h2>
            </div>

            <div className="space-y-4">
              {FAQ_DATA.map((item, i) => (
                <AccordionItem
                  key={i}
                  question={item.q}
                  answer={item.a}
                  isOpen={openFaqIndex === i}
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                />
              ))}
            </div>

            <div className="mt-16 text-center">
              <a href={REGISTRATION_LINK} className="btn-primary px-16 py-5 text-lg" aria-label="Fazer cadastro para revenda Garotafit">Fazer meu cadastro</a>
            </div>
          </div>
        </section>

        {/* Section 8: CTA Final */}
        <section className="relative h-[600px] flex items-center justify-center text-center px-6 overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src="https://popstore.com.br/popstorage/components_files/26/17703095853882-viva_verao_garotafit.webp"
            alt="Revenda Garotafit"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />

          <div className="relative text-white z-20 max-w-4xl space-y-8">
            <h2 className="text-3xl lg:text-5xl">
              Pronta para revender moda fitness com a <span className="text-accent">Garotafit?</span>
            </h2>
            <p className="text-xl text-gray-200">
              Comece com suas primeiras peças, tenha retorno de até 100%, parcelamento em 6x sem juros e despacho em até 24h após confirmação.
            </p>
            <div className="space-y-4">
              <a href={REGISTRATION_LINK} className="btn-primary px-12 py-6 text-xl" aria-label="Fazer cadastro final para revenda Garotafit">Fazer meu cadastro</a>
              <p className="text-sm text-gray-300 italic font-medium">Você será atendida no WhatsApp pelo time comercial.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 px-6 lg:px-20 py-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <img
              src="https://storage.googleapis.com/vms1/stores/10/logo-garotafit-atacado.png"
              alt="Garotafit Atacado - Moda Fitness"
              className="w-[150px] object-contain"
            />
            <p className="text-sm text-gray-500">Moda fitness de alta performance com design exclusivo para sua revenda.</p>
          </div>
          <div>
            <h5 className="font-bold text-xs uppercase tracking-widest mb-6">Links Úteis</h5>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href={REGISTRATION_LINK} className="hover:text-black transition-colors" aria-label="Ir para cadastro atacado">Cadastro Atacado</a></li>
              <li><a href="https://www.garotafit.com.br/info/90/quem-somos/" className="hover:text-black transition-colors" aria-label="Conhecer a Garotafit">Quem Somos</a></li>
              <li><a href="https://www.garotafit.com.br/info/93/trocas-e-devolucoes/" className="hover:text-black transition-colors" aria-label="Ver política de troca">Política de Troca</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-xs uppercase tracking-widest mb-6">Redes Sociais</h5>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="https://www.instagram.com/garotafit/" className="hover:text-black transition-colors" aria-label="Seguir Garotafit no Instagram" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.facebook.com/garotafit/" className="hover:text-black transition-colors" aria-label="Seguir Garotafit no Facebook" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-xs uppercase tracking-widest mb-6">Contato</h5>
            <p className="text-sm text-gray-500">Envios para todo o Brasil via São Paulo/SP.</p>
            <p className="text-sm text-black font-bold mt-2">
              <a href="mailto:loja.virtual@garotafit.com.br" className="hover:text-[#FFB02E] transition-colors" aria-label="Enviar email para Garotafit">loja.virtual@garotafit.com.br</a>
            </p>
            <p className="text-sm text-black font-bold mt-2">
              <a href="tel:+5511969900605" className="hover:text-[#FFB02E] transition-colors" aria-label="Ligar para WhatsApp Garotafit">WhatsApp: (11) 96990-0605</a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 uppercase font-bold tracking-widest">
          <span>&copy; 2026 Garotafit Atacado. Todos os direitos reservados.</span>
          <span>Desenvolvido por <a href="https://novamedia.com.br" className="hover:text-black transition-colors" aria-label="Visitar site da Novamedia" target="_blank" rel="noopener noreferrer">Novamedia</a>.</span>
        </div>
      </footer>

      {/* Modal de Imagem do Produto */}
      {(selectedProductImage || isModalClosing) && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer transition-opacity duration-300 ${isModalClosing ? 'opacity-0' : 'opacity-100 animate-fadeIn'}`}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1); }
            }
            .animate-fadeIn {
              animation: fadeIn 0.3s ease-out forwards;
            }
          `}</style>
          <div
            className={`relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center cursor-default transition-all duration-300 ${isModalClosing ? 'scale-95' : 'scale-100'}`}
            onClick={(e) => e.stopPropagation()} // Evita que clique na imagem feche o modal
          >
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 md:-right-10 text-white hover:text-[#FFB02E] transition-colors p-2"
              aria-label="Fechar"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedProductImage}
              alt="Produto em destaque"
              className="max-h-[85vh] h-auto w-auto object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
