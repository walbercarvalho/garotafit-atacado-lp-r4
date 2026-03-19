import { INSTAGRAM_LINK, TIKTOK_LINK, TIKTOK_AT, WHATSAPP_SUPPORT } from '../../constants/content';
import { Mail, Phone } from 'lucide-react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <div className="flex items-center gap-2 text-2xl font-black text-white mb-6">
              GAROTA<span className="text-red-500">FIT</span>
            </div>
            <p className="mb-6">
              A marca líder em moda fitness atacado no Brasil. Qualidade premium, modelagem exclusiva e alta lucratividade para você.
            </p>
            <div className="flex items-center gap-4">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="bg-zinc-900 p-3 rounded-full hover:bg-red-600 hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href={TIKTOK_LINK} target="_blank" rel="noopener noreferrer" className="bg-zinc-900 p-3 rounded-full hover:bg-red-600 hover:text-white transition-colors" aria-label="TikTok">
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#produtos" className="hover:text-red-500 transition-colors">Produtos</a></li>
              <li><a href="#vantagens" className="hover:text-red-500 transition-colors">Vantagens</a></li>
              <li><a href="#como-funciona" className="hover:text-red-500 transition-colors">Como Funciona</a></li>
              <li><a href="#depoimentos" className="hover:text-red-500 transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-red-500 transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FaWhatsapp className="w-5 h-5 text-red-500 shrink-0" />
                <a href={WHATSAPP_SUPPORT} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                  Atendimento WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500 shrink-0" />
                <a href="mailto:contato@garotafit.com.br" className="hover:text-red-500 transition-colors">
                  contato@garotafit.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaInstagram className="w-5 h-5 text-red-500 shrink-0" />
                <span>@garotafit</span>
              </li>
              <li className="flex items-center gap-3">
                <FaTiktok className="w-5 h-5 text-red-500 shrink-0" />
                <span>{TIKTOK_AT}</span>
              </li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Segurança</h4>
             <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
               <p className="text-sm font-semibold mb-1 text-zinc-300">Compra 100% Segura</p>
               <p className="text-xs">Seus dados estão protegidos. Site com certificação SSL de segurança.</p>
             </div>
          </div>

        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© {year} Garotafit. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
