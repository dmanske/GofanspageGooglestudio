import { MessageSquare, Mail, MapPin, Instagram } from "lucide-react";
import { useSmartNavigation } from "@/hooks/useSmartNavigation";
import gofansIcon from "@/assets/gofans-icon.png";
import footerFansBg from "@/assets/football/footer-fans.png";

export const Footer = () => {
  const { navigateToSection } = useSmartNavigation();

  return (
    <footer className="relative border-t border-slate-700/50 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${footerFansBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/95 to-slate-950/80"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={gofansIcon} alt="GoFans" className="h-12 w-auto" />
              <h3 className="text-2xl font-bold text-white">GoFans</h3>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              A plataforma nº1 para gestão de caravanas esportivas. 
              Organize viagens, passageiros, ingressos e pagamentos com um só sistema.
            </p>
            <a 
              href="https://instagram.com/gofansoficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 hover:bg-blue-500/20 hover:border-blue-400 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-slate-300" />
              </div>
              <span className="text-sm">@gofansoficial</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigateToSection('hero')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('what-is')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  O que é?
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('screenshots')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Screenshots
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('modules')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Módulos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('videos')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  TOP 7
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('comparison')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Comparação
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('supabase')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Banco de Dados
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('pricing')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Planos
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-slate-400">
                <MessageSquare className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>(47) 9 8833-6386</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>contato@gofans.com.br</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Santa Catarina, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 GoFans. Todos os direitos reservados. Desenvolvido por Daniel Manske.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
