
import React, { useState } from 'react';

// --- Constants ---
const REGISTRATION_LINK = "https://www.garotafit.com.br/new_account/wholesale/?source=landing_page";
// Comentário: Substitua o link acima pelo link oficial caso mude.

const FAQ_DATA = [
  { q: "Qual \u00e9 o pedido m\u00ednimo?", a: "O pedido m\u00ednimo \u00e9 de R$1.000, parcelado em at\u00e9 6x sem juros. Enviamos de SP para todo Brasil com despacho em at\u00e9 24h ap\u00f3s confirma\u00e7\u00e3o do pagamento." },
  { q: "Preciso de CNPJ para comprar?", a: "N\u00e3o! Voc\u00ea pode comprar usando apenas o CPF. N\u00e3o exigimos CNPJ para fazer seu primeiro pedido como revendedora." },
  { q: "A Garotafit \u00e9 uma empresa real? Como sei que n\u00e3o \u00e9 golpe?", a: "Somos uma empresa brasileira fundada em 2011, com o CNPJ 36.277.854/0001-67, com sede em S\u00e3o Paulo-SP localizada na Av. \u00c1gua Fria 503 em S\u00e3o Paulo - SP. Temos +2.000 revendedoras ativas em todo Brasil. Voc\u00ea pode verificar nosso CNPJ no site da Receita Federal a qualquer momento." },
  { q: "Quanto posso ter de retorno?", a: "O retorno sugerido \u00e9 de at\u00e9 100% sobre o investimento. Isso varia conforme o seu mix de produtos e a estrat\u00e9gia de venda aplicada na sua regi\u00e3o." },
  { q: "Quais as formas de pagamento dispon\u00edveis?", a: "Oferecemos diversas op\u00e7\u00f5es, incluindo parcelamento em at\u00e9 6x sem juros no cart\u00e3o de cr\u00e9dito, PIX e Boleto Banc\u00e1rio." },
  { q: "As pe\u00e7as s\u00e3o pronta entrega? Quando enviam?", a: "Sim, todas as pe\u00e7as do cat\u00e1logo est\u00e3o dispon\u00edveis para pronta entrega. O despacho \u00e9 feito em at\u00e9 24h \u00fateis ap\u00f3s a confirma\u00e7\u00e3o do pagamento (enviamos de SP para todo o Brasil)." },
  { q: "Existe pol\u00edtica de troca ou defeito?", a: "Sim, possu\u00edmos uma pol\u00edtica clara de trocas por defeitos de fabrica\u00e7\u00e3o. Valorizamos a transpar\u00eancia e a seguran\u00e7a das nossas revendedoras." },
  { q: "Como acesso o cat\u00e1logo completo e os valores?", a: "Por quest\u00f5es estrat\u00e9gicas, os valores de atacado s\u00e3o liberados exclusivamente ap\u00f3s o cadastro de revendedora. Assim que concluir o cadastro, nosso time enviar\u00e1 o acesso via WhatsApp." }
];

const PRODUCTS = [
  { id: 1, tag: "Mais vendidos", badges: ["\u{1F525} Alta sa\u00edda", "\u2B50 Mais pedida pelas revendedoras"], img: "https://cdn.dooca.store/161238/products/bjkyzlcctfl9zibuymqvhdacqw6yrmeapy9m_1200x1600.jpg?v=1763146665000" },
  { id: 2, tag: "Conjunto Fitness", badges: ["\u{1F525} Alta sa\u00edda", "\u2705 Zero transpar\u00eancia", "\u{1F4E6} Reposi\u00e7\u00e3o frequente"], img: "https://cdn.dooca.store/161238/products/zzjyqyc0uzyai3q7v0ojbapv4x5epbi2uff6_1200x1600.jpg?v=1768598465" },
  { id: 3, tag: "Macac\u00e3o Fitness", badges: ["\u2B50 Mais pedida pelas revendedoras", "\u2705 Zero transpar\u00eancia"], img: "https://cdn.dooca.store/161238/products/dddblps2xmj6rcto7mqryy29linww88k15w6_1200x1600.jpg?v=1762899961" },
  { id: 4, tag: "Blusinha Baby Look", badges: ["\u{1F3A8} Cor neutra e atemporal", "\u{1F4E6} Reposi\u00e7\u00e3o frequente"], img: "https://cdn.dooca.store/161238/products/3uwgc0o14zr7dwuwbzveghkdcsy4gqzqdjr8_1200x1600.jpg?v=1770315156" },
  { id: 5, tag: "Conjunto Esportivo Fitness", badges: ["\u{1F525} Alta sa\u00edda", "\u2705 Zero transpar\u00eancia"], img: "https://cdn.dooca.store/161238/products/jijqjues4qjiwy9vm9qed46gkdbaqtcdyhnj_1200x1600.jpg?v=1770313341" },
  { id: 6, tag: "Cal\u00e7a Legging Flare", badges: ["\u2705 Zero transpar\u00eancia", "\u{1F525} Alta sa\u00edda", "\u{1F3A8} Cor neutra e atemporal"], img: "https://cdn.dooca.store/161238/products/2jfx5raqmuyszscbamr5qygrxmk0dgcquwyt_1200x1600.jpg?v=1770308792" },
  { id: 7, tag: "Macaquinho Fitness", badges: ["\u2B50 Mais pedida pelas revendedoras", "\u{1F4E6} Reposi\u00e7\u00e3o frequente"], img: "https://cdn.dooca.store/161238/products/641htpksdaqfifrdo0ywurvj9rbopdiumfov_1200x1600.jpg?v=1768599376&webp=0" },
  { id: 8, tag: "Conjunto Fitness", badges: ["\u{1F525} Alta sa\u00edda", "\u{1F3A8} Cor neutra e atemporal"], img: "https://cdn.dooca.store/161238/products/pmhilqv8qf8t2vfuyt8r4emnd41bcloqwurb_1200x1600.jpg?v=1763147530000" }
];

const WHATSAPP_PRINTS = [
  "https://lp.garotafitbrasil.com.br/wp-content/uploads/2025/07/PROVASOCIAL3-1-472x1024.jpg",
  "https://lp.garotafitbrasil.com.br/wp-content/uploads/2025/07/PROVASOCIAL2-1-459x1024.jpg",
  "https://lp.garotafitbrasil.com.br/wp-content/uploads/2025/07/PROVASOCIAL1-1-472x1024.jpg",
  "https://lp.garotafitbrasil.com.br/wp-content/uploads/2025/07/PROVASOCIAL4-459x1024.jpg"
];

// --- Helper Components ---

const SectionSubtitle: React.FC<{ text: string; className?: string; dark?: boolean }> = ({ text, className, dark }) => (
  <div className={`flex items-center gap-3 mb-4 ${className || ''}`}>
    <div className={`h-[1px] w-8 ${dark ? 'bg-white' : 'bg-black'}`}></div>
    <span className={`uppercase text-xs tracking-widest font-bold ${dark ? 'text-white' : ''}`}>{text}</span>
  </div>
);

const AccordionItem: React.FC<{ question: string; answer: string; isOpen: boolean; onToggle: () => void }> = ({ question, answer, isOpen, onToggle }) => {
  const contentId = `accordion-content-${question.replace(/\s+/g, '-').toLowerCase()}`;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <div
        className="accordion-header"
        onClick={onToggle}
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
  const [openFaqIndices, setOpenFaqIndices] = useState<Set<number>>(new Set([0, 1, 2]));
  const [faqInteracted, setFaqInteracted] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const handleFaqToggle = (index: number) => {
    if (!faqInteracted) {
      setFaqInteracted(true);
      // First interaction: switch to single-open mode
      setOpenFaqIndices(prev => prev.has(index) ? new Set() : new Set([index]));
    } else {
      setOpenFaqIndices(prev => prev.has(index) ? new Set() : new Set([index]));
    }
  };

  return (
    <div className="antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:font-bold focus:rounded"
      >
        Pular para o conteúdo
      </a>

      {/* Header Atualizado com Grid para Centralização */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 px-4 md:px-6 py-2 md:py-4 flex justify-between lg:grid lg:grid-cols-3 items-center h-[70px] md:h-[90px]">
        {/* Lado Esquerdo: Logo e Badge */}
        <div className="flex items-center gap-4">
          <img
            src="https://storage.googleapis.com/vms1/stores/10/logo-garotafit-atacado.png"
            alt="Garotafit Atacado - Moda Fitness no Atacado"
            className="w-[120px] md:w-[180px] object-contain cursor-pointer"
            width="180"
            height="40"
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
            className="btn-primary text-[12px] md:text-xs !py-0 px-4 md:px-8 h-full !flex items-center justify-center rounded-none min-w-[120px] md:min-w-[200px] leading-tight text-center min-h-[44px]"
            aria-label="Liberar catálogo e preços de atacado Garotafit"
          >
            Liberar catálogo &rarr;
          </a>
        </div>
      </header>

      <main id="main-content" className="pt-[70px] md:pt-[90px]">
        {/* Section 1: Hero */}
        <section className="bg-white px-6 md:px-12 lg:px-20 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
          <div className="w-full lg:w-1/2 space-y-8">
            <span className="uppercase text-xs tracking-[0.2em] font-bold text-[#FFB02E] leading-none block mb-6">
              Para revendedoras que querem parar de competir por preço
            </span>
            <h1 className="heading-hero text-black !mt-0">
              Revenda <span className="text-accent">moda fitness premium</span> com mais segurança, suporte e giro — <span className="text-accent">sem medo</span> de ter seu estoque parado
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl">
              Peças com qualidade garantida, pronta entrega e atendimento no WhatsApp para revendedoras que querem um fornecedor sério.
            </p>
            <p className="font-bold text-sm lg:text-base text-black">
              Pedido mínimo R$1.000 · até 6x sem juros · envio de SP para todo Brasil · Comece comprando com seu CPF
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={REGISTRATION_LINK} className="btn-primary lg:whitespace-nowrap" aria-label="Liberar catálogo e preços de atacado Garotafit">Liberar catálogo e preços de atacado &rarr;</a>
              <a href={REGISTRATION_LINK} className="btn-secondary lg:whitespace-nowrap" aria-label="Solicitar aprovação como revendedora Garotafit">Solicitar aprovação como revendedora &rarr;</a>
            </div>
            <p className="text-xs text-gray-400 text-center sm:text-left">
              &#10003; Não precisa de CNPJ · Resposta em até 1 hora útil
            </p>
            <p className="text-[12px] text-gray-400 text-center sm:text-left">
              &#128230; Cadastros aprovados até sexta-feira entram no envio da próxima semana.
            </p>

            {/* Trust Bar */}
            <div className="border-t border-gray-200 pt-8 mt-4">
              <ul className="hidden lg:flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-gray-500">
                <li>&#128274; CNPJ 36.277.854/0001-67</li>
                <li>&#10003; Empresa desde 2011</li>
                <li>&#10003; +2.000 revendedoras</li>
                <li>&#10003; Compre com seu CPF</li>
                <li>&#10003; Despacho em até 24h</li>
              </ul>
              <ul className="lg:hidden flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-gray-500">
                <li>&#128274; CNPJ 36.277.854/0001-67</li>
                <li>&#10003; Empresa desde 2011</li>
                <li>&#10003; +2.000 revendedoras</li>
                <li>&#10003; Compre com seu CPF</li>
                <li>&#10003; Despacho em até 24h</li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <div className="w-full lg:w-[65%] relative group cursor-pointer">
            <div className="relative z-10 border-[15px] border-white shadow-2xl">
              <img
                src="https://lp.garotafitbrasil.com.br/wp-content/uploads/2025/07/9-683x1024.jpg"
                alt="Modelo vestindo conjunto fitness Garotafit - Moda fitness de alta qualidade para revenda"
                className="w-full h-auto object-cover grayscale-0 group-hover:scale-105 transition-transform duration-700"
                width="683"
                height="1024"
              />
            </div>
            <div className="absolute top-10 -right-10 w-full h-full bg-[#FFB02E] -z-10 opacity-10"></div>
            </div>
          </div>
        </section>

        {/* Section 2: Por que revendedoras escolhem a Garotafit */}
        <section className="bg-black text-white px-6 md:px-12 lg:px-20 py-20 lg:py-32">
          <div className="text-center mb-16 space-y-6">
            <SectionSubtitle text="Diferenciais" dark />
            <h2 className="text-3xl lg:text-5xl">Por que revendedoras escolhem a Garotafit</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-[#FFB02E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                t: "Qualidade Premium \u00b7 Zero Transpar\u00eancia",
                d: "Poliamida de alta gramatura. Suas clientes experimentam uma vez e voltam pedindo de novo."
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-[#FFB02E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                t: "Pronta Entrega e Despacho em 24h",
                d: "Seu estoque chega r\u00e1pido. Voc\u00ea vende r\u00e1pido. Sem esperar semanas por pedido."
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-[#FFB02E]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.554 4.197 1.604 6.04L0 24l6.117-1.605a11.782 11.782 0 005.925 1.597h.005c6.635 0 12.032-5.396 12.035-12.033a11.77 11.77 0 00-3.504-8.508z" />
                  </svg>
                ),
                t: "Suporte no WhatsApp para Montar seu Pedido",
                d: "Nossa equipe ajuda voc\u00ea a escolher as pe\u00e7as com maior hist\u00f3rico de giro para seu p\u00fablico."
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-[#FFB02E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                t: "Mix Selecionado pelo Giro Real",
                d: "S\u00f3 entra no cat\u00e1logo quem vende. Cada pe\u00e7a foi validada por +2.000 revendedoras ativas."
              }
            ].map((item, i) => (
              <div key={i} className="border border-white/10 p-6 lg:p-8 group hover:border-[#FFB02E]/30 transition-colors">
                <div className="mb-4 p-3 bg-white/5 w-fit group-hover:bg-[#FFB02E]/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg mb-3 leading-tight">{item.t}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href={REGISTRATION_LINK} className="btn-primary" aria-label="Liberar catálogo e preços de atacado">Liberar catálogo e preços de atacado &rarr;</a>
            <p className="text-xs text-gray-400 mt-4">&#10003; Não precisa de CNPJ · Resposta em até 1 hora útil</p>
            <p className="text-[12px] text-gray-400 mt-2">&#128230; Cadastros aprovados até sexta-feira entram no envio da próxima semana.</p>
          </div>
        </section>

        {/* Section 3: Produtos */}
        <section className="bg-gray-50 px-6 md:px-12 lg:px-20 py-20 lg:py-32">
          <div className="text-center mb-16 space-y-6">
            <SectionSubtitle text="Coleção Atacado" />
            <h2 className="text-3xl lg:text-5xl">Produtos premium com alto giro — acesse o catálogo e comece a vender</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Monte um mix com peças de alto giro. Cadastre-se para liberar os valores de atacado, peças e condições exclusivas.</p>
            <div className="mt-6 inline-block bg-[#FFB02E] text-black font-bold px-6 py-3 uppercase text-xs tracking-tighter">
              Pedido mínimo R$1.000 · retorno de até 100% · pronta entrega · 6x sem juros
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="group cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`Ver produto: ${prod.tag}`}
                onClick={() => setLightboxImg(prod.img)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLightboxImg(prod.img);
                  }
                }}
              >
                <div className="overflow-hidden border border-gray-200">
                  <img
                    src={prod.img}
                    alt={`${prod.tag} - Moda fitness Garotafit para revenda no atacado`}
                    className="w-full h-auto aspect-[3/4] object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    width="1200"
                    height="1600"
                  />
                </div>
                <div className="mt-4">
                  <span className="product-tag">{prod.tag}</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {prod.badges.map((badge, bi) => (
                      <span key={bi} className="text-[10px] lg:text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-sm">{badge}</span>
                    ))}
                  </div>
                  <div className="mt-2 h-[1px] w-0 group-hover:w-full bg-black transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Argumento de defesa do premium */}
          <div className="mt-16 max-w-3xl mx-auto border-l-4 border-[#FFB02E] bg-white pl-8 pr-6 py-6">
            <p className="text-sm lg:text-base text-gray-600 leading-relaxed italic">
              "Uma legging que transparece no agachamento não volta comprar outra — e ainda queima sua reputação com as clientes. <strong className="text-black not-italic">Tecido premium custa mais na entrada, mas se paga na fidelidade e na recompra.</strong>"
            </p>
          </div>

          <div className="mt-12 text-center space-y-8">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
              Pedido despachado em até 24h após confirmação do pagamento (envio de SP para todo Brasil).
            </p>
            <a href={REGISTRATION_LINK} className="btn-primary" aria-label="Liberar catálogo e preços de atacado">Liberar catálogo e preços de atacado &rarr;</a>
            <p className="text-xs text-gray-400 mt-4">&#10003; Não precisa de CNPJ · Resposta em até 1 hora útil</p>
            <p className="text-[12px] text-gray-400 mt-2">&#128230; Cadastros aprovados até sexta-feira entram no envio da próxima semana.</p>
          </div>
        </section>

        {/* Section 4: Prova Social Unificada */}
        <section className="bg-black text-white px-6 md:px-12 lg:px-20 py-20 lg:py-32">
          <div className="text-center mb-16 space-y-6">
            <SectionSubtitle text="Prova Social" dark />
            <h2 className="text-3xl lg:text-5xl">Revendedoras reais. Resultados reais.</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">Mais de 2.000 revendedoras em todo Brasil já escolheram a Garotafit como fornecedora.</p>
          </div>

          {/* Nível 1 — Cards com foto + nome + cidade + Instagram */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                n: "Lucia Helena",
                c: "Rio de Janeiro, RJ",
                ig: "luciahelena.fitness",
                b: "A rapidez do envio me surpreendeu, chegou em 3 dias. Vendi tudo em uma semana!",
                img: "https://lp.garotafitbrasil.com.br/wp-content/uploads/2025/07/foto-1-1024x1024.png"
              },
              {
                n: "Ricardo Costa",
                c: "Florianópolis, SC",
                ig: "ricardocosta.rev",
                b: "O atendimento no WhatsApp foi essencial para eu montar meu mix. Os macaquinhos vendem muito e são maravilhosos.",
                img: "https://lp.garotafitbrasil.com.br/wp-content/uploads/2025/07/foto-2-1024x1024.png"
              },
              {
                n: "Rafael Oliveira",
                c: "São Paulo, SP",
                ig: "rafa.oliveirafit",
                b: "Minhas clientes amam o tecido. Giro muito rápido e já estou no meu terceiro pedido em 2 meses.",
                img: "https://lp.garotafitbrasil.com.br/wp-content/uploads/2025/07/foto3-1024x1024.png"
              }
            ].map((dep, i) => (
              <div key={i} className="border border-white/10 overflow-hidden flex flex-col relative group bg-white/5 p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-[72px] h-[72px] flex-shrink-0 overflow-hidden rounded-full border-2 border-[#FFB02E]/40">
                    <img
                      src={dep.img}
                      alt={`Foto de ${dep.n}, revendedora em ${dep.c}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width="1024"
                      height="1024"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{dep.n}</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">{dep.c}</p>
                    <a
                      href={`https://instagram.com/${dep.ig}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[#FFB02E] hover:underline mt-0.5 inline-block"
                      aria-label={`Ver perfil de ${dep.n} no Instagram`}
                    >
                      @{dep.ig}
                    </a>
                  </div>
                </div>

                <div className="flex gap-1 text-[#FFB02E] mb-4" role="img" aria-label="Avaliação 5 estrelas">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-3 h-3 fill-current" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                  ))}
                </div>

                <p className="italic text-gray-300 leading-relaxed flex-1">&ldquo;{dep.b}&rdquo;</p>
              </div>
            ))}
          </div>

          {/* Nível 2 — WhatsApp Prints (secundário, menor destaque) */}
          <div className="border-t border-white/10 pt-12">
            <p className="text-center text-xs uppercase tracking-widest text-gray-500 mb-8">Conversas reais no WhatsApp</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {WHATSAPP_PRINTS.map((img, i) => (
                <div
                  key={i}
                  className="border-[4px] border-white/10 rounded-[20px] overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer"
                  onClick={() => setLightboxImg(img)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Ampliar conversa WhatsApp ${i + 1}`}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLightboxImg(img); } }}
                >
                  <img
                    src={img}
                    alt={`Conversa real de revendedora Garotafit via WhatsApp - ${i + 1}`}
                    className="w-full h-auto block"
                    loading="lazy"
                    width="472"
                    height="1024"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <a href={REGISTRATION_LINK} className="btn-primary px-12" aria-label="Liberar catálogo e preços de atacado">Liberar catálogo e preços de atacado &rarr;</a>
            <p className="text-xs text-gray-400 mt-4">&#10003; Não precisa de CNPJ · Resposta em até 1 hora útil</p>
            <p className="text-[12px] text-gray-400 mt-2">&#128230; Cadastros aprovados até sexta-feira entram no envio da próxima semana.</p>
          </div>
        </section>

        {/* Section 6: Como funciona */}
        <section className="bg-white px-6 md:px-12 lg:px-20 py-20 lg:py-32">
          <div className="text-center mb-16 space-y-6">
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
                <div className="p-4 bg-gray-50 w-fit group-hover:bg-[#FFB02E]/10 transition-colors">
                  {step.icon}
                </div>
                <span className="text-accent font-bold text-xs uppercase tracking-widest">{step.p}</span>
                <h3 className="text-2xl">{step.t}</h3>
                <p className="text-gray-500 leading-relaxed">{step.d}</p>
                <div className="mt-4 h-[2px] w-12 bg-black"></div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href={REGISTRATION_LINK} className="btn-primary" aria-label="Liberar catálogo e preços de atacado">Liberar catálogo e preços de atacado &rarr;</a>
            <p className="text-xs text-gray-400 mt-4">&#10003; Não precisa de CNPJ · Resposta em até 1 hora útil</p>
            <p className="text-[12px] text-gray-400 mt-2">&#128230; Cadastros aprovados até sexta-feira entram no envio da próxima semana.</p>
          </div>
        </section>

        {/* Section 7: Qualificação de Audiência */}
        <section className="bg-black text-white px-6 md:px-12 lg:px-20 py-20 lg:py-32">
          <div className="text-center mb-12 space-y-6">
            <SectionSubtitle text="Perfil da Revendedora" dark />
            <h2 className="text-3xl lg:text-5xl">A Garotafit Atacado é para você?</h2>
          </div>
          <div className="max-w-5xl mx-auto">

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Coluna Esquerda — É para você */}
              <div className="bg-green-900/30 border border-green-500/30 p-6 lg:p-10 space-y-4 lg:space-y-5">
                <h3 className="text-lg font-bold text-green-400 flex items-center gap-2">
                  <span className="text-green-400 text-2xl">&#10003;</span> É para você se...
                </h3>
                <ul className="space-y-4">
                  {[
                    "Você tem R$1.000 ou mais disponíveis para o primeiro pedido",
                    "Quer revender uma marca com identidade própria e reconhecimento",
                    "Valoriza qualidade de tecido — peça que não transparece e dura",
                    "Busca um fornecedor sério, com entrega garantida e suporte real",
                    "Quer parar de competir por preço com a concorrência genérica"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm lg:text-base text-gray-300">
                      <span className="text-green-400 font-bold mt-0.5">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coluna Direita — Ainda não é para você */}
              <div className="bg-white/5 border border-white/10 p-6 lg:p-10 space-y-4 lg:space-y-5">
                <h3 className="text-lg font-bold text-gray-400 flex items-center gap-2 leading-none">
                  <span className="text-red-400 text-2xl">&#10007;</span> Ainda não é para você se...
                </h3>
                <ul className="space-y-4">
                  {[
                    "Está buscando pedido mínimo abaixo de R$1.000",
                    "Quer roupas sem marca (white label / private label)",
                    "Precisa de preço para competir com Shopee ou Shein",
                    "Ainda não tem capital disponível para o primeiro investimento"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm lg:text-base text-gray-500">
                      <span className="text-red-400 font-bold mt-0.5">&#10007;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center space-y-3">
              <a href={REGISTRATION_LINK} className="btn-primary" aria-label="Quero ser revendedora Garotafit">Me identifiquei — quero ser revendedora Garotafit &rarr;</a>
              <p className="text-xs text-gray-400">&#10003; Não precisa de CNPJ · Resposta em até 1 hora útil</p>
              <p className="text-[12px] text-gray-400 mt-2">&#128230; Cadastros aprovados até sexta-feira entram no envio da próxima semana.</p>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="bg-white px-6 md:px-12 lg:px-20 py-20 lg:py-32">
          <div className="text-center mb-16 space-y-6">
            <SectionSubtitle text="FAQ" />
            <h2 className="text-3xl lg:text-5xl">
              Dúvidas Frequentes
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">

            <div className="space-y-4">
              {FAQ_DATA.map((item, i) => (
                <AccordionItem key={i} question={item.q} answer={item.a} isOpen={openFaqIndices.has(i)} onToggle={() => handleFaqToggle(i)} />
              ))}
            </div>

            <div className="mt-16 text-center">
              <a href={REGISTRATION_LINK} className="btn-primary px-16 py-5 text-lg" aria-label="Liberar catálogo e preços de atacado">Liberar catálogo e preços de atacado &rarr;</a>
              <p className="text-xs text-gray-400 mt-4">&#10003; Não precisa de CNPJ · Resposta em até 1 hora útil</p>
              <p className="text-[12px] text-gray-400 mt-2">&#128230; Cadastros aprovados até sexta-feira entram no envio da próxima semana.</p>
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
            loading="lazy"
            width="1920"
            height="600"
          />

          <div className="relative text-white z-20 max-w-4xl space-y-8">
            <h2 className="text-3xl lg:text-5xl">
              Pronta para revender moda fitness com a <span className="text-accent">Garotafit?</span>
            </h2>
            <p className="text-xl text-gray-200">
              Pedido mínimo de R$1.000, retorno de até 100%, parcelamento em 6x sem juros e despacho em até 24h após confirmação.
            </p>
            <div className="space-y-4">
              <a href={REGISTRATION_LINK} className="btn-primary px-12 py-6 text-xl" aria-label="Liberar catálogo e preços de atacado">Liberar catálogo e preços de atacado &rarr;</a>
              <p className="text-xs text-gray-300 mt-3">&#10003; Não precisa de CNPJ · Resposta em até 1 hora útil</p>
              <p className="text-[12px] text-gray-400 mt-2">&#128230; Cadastros aprovados até sexta-feira entram no envio da próxima semana.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 px-6 lg:px-20 py-12">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="space-y-6">
            <img
              src="https://storage.googleapis.com/vms1/stores/10/logo-garotafit-atacado.png"
              alt="Garotafit Atacado - Moda Fitness"
              className="w-[150px] object-contain"
              loading="lazy"
              width="150"
              height="33"
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

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setLightboxImg(null)}
          role="dialog"
          aria-label="Visualizar imagem ampliada"
          onKeyDown={(e) => { if (e.key === 'Escape') setLightboxImg(null); }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxImg(null); }}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white bg-black/50 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors z-10 cursor-pointer"
            aria-label="Fechar visualização"
            autoFocus
          >
            ✕
          </button>
          <img
            src={lightboxImg}
            alt="Imagem ampliada"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
