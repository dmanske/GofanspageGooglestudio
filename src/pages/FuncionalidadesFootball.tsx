import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { modules } from "@/data/modulesData";
import { Check, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Screenshots imports
import aniversarios from "@/assets/screenshots/aniversarios.png";
import clienteDetalhe from "@/assets/screenshots/cliente-detalhe.png";
import clientes from "@/assets/screenshots/clientes.png";
import ingressosMobile from "@/assets/screenshots/ingressos-mobile.png";
import ingressos from "@/assets/screenshots/ingressos.png";

// Promo imports
import aniversario from "@/assets/promo/aniversario.png";
import financeiro from "@/assets/promo/financeiro.png";
import gridOverview from "@/assets/promo/grid-overview.png";
import onibus from "@/assets/promo/onibus.png";
import passageiros from "@/assets/promo/passageiros.png";
import viagens from "@/assets/promo/viagens.png";
import whatsappChaos from "@/assets/promo/whatsapp-chaos.png";
import heroDashboard from "@/assets/promo/hero-dashboard.png";

// Background
import stadiumBg from "@/assets/football/stadium-field.jpg";
import lockerRoom from "@/assets/football/locker-room.jpg";

// Screenshots Gallery Data
const screenshots = [
  { image: heroDashboard, title: "Dashboard Principal", description: "Visão geral completa do sistema com estatísticas e métricas em tempo real", category: "dashboard" },
  { image: gridOverview, title: "Gestão de Viagens", description: "Controle completo de todas as viagens e ocupação dos ônibus", category: "viagens" },
  { image: viagens, title: "Detalhes da Viagem", description: "Informações completas de cada viagem com passageiros e pagamentos", category: "viagens" },
  { image: passageiros, title: "Lista de Passageiros", description: "Gestão de passageiros por viagem com status de pagamento", category: "clientes" },
  { image: clientes, title: "Cadastro de Clientes", description: "Base completa de clientes com histórico de viagens", category: "clientes" },
  { image: clienteDetalhe, title: "Perfil do Cliente", description: "Detalhes completos do cliente com histórico e créditos", category: "clientes" },
  { image: aniversarios, title: "Aniversariantes", description: "Lista de clientes aniversariantes para ações de relacionamento", category: "clientes" },
  { image: aniversario, title: "Celebração de Aniversário", description: "Envie mensagens automáticas para aniversariantes", category: "whatsapp" },
  { image: financeiro, title: "Controle Financeiro", description: "Gestão completa de receitas, despesas e fluxo de caixa", category: "financeiro" },
  { image: onibus, title: "Gestão de Ônibus", description: "Cadastro e controle de toda a frota de veículos", category: "onibus" },
  { image: ingressos, title: "Vendas de Ingressos", description: "Controle de venda de ingressos por jogo e setor", category: "ingressos" },
  { image: ingressosMobile, title: "Ingressos Mobile", description: "Versão mobile otimizada para vendas em campo", category: "ingressos" },
  { image: whatsappChaos, title: "Integração WhatsApp", description: "Comunicação em massa com templates personalizados", category: "whatsapp" },
];

const categoryColors: Record<string, string> = {
  dashboard: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  viagens: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  clientes: "bg-green-500/20 text-green-400 border-green-500/30",
  financeiro: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  onibus: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  ingressos: "bg-red-500/20 text-red-400 border-red-500/30",
  whatsapp: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
};

const categoryLabels: Record<string, string> = {
  dashboard: "Dashboard",
  viagens: "Viagens",
  clientes: "Clientes",
  financeiro: "Financeiro",
  onibus: "Ônibus",
  ingressos: "Ingressos",
  whatsapp: "WhatsApp",
};

const FuncionalidadesFootball = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  // All modules are always expanded - no toggle needed

  const categories = ["all", ...Object.keys(categoryColors)];
  
  const filteredScreenshots = activeCategory === "all" 
    ? screenshots 
    : screenshots.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url(${stadiumBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/85 to-slate-950"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-6">
              Funcionalidades Completas
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Conheça <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">todas as funções</span> do GoFans
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
              Uma plataforma completa para gestão de caravanas esportivas. Explore cada módulo e descubra como podemos transformar seu negócio.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#screenshots">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                  Ver Screenshots <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="#modulos">
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                  Explorar Módulos
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section id="screenshots" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 mb-4">
              Galeria de Screenshots
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Veja o sistema em ação
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Screenshots reais do sistema mostrando todas as funcionalidades disponíveis
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-blue-500 text-white"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                }`}
              >
                {cat === "all" ? "Todos" : categoryLabels[cat]}
              </button>
            ))}
          </div>

          {/* Screenshots Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScreenshots.map((screenshot, index) => (
              <Card 
                key={index}
                className="bg-slate-800/50 border-slate-700 overflow-hidden group cursor-pointer hover:border-blue-500/50 transition-all"
                onClick={() => setSelectedImage(screenshots.indexOf(screenshot))}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={screenshot.image} 
                    alt={screenshot.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  <Badge className={`absolute top-3 left-3 ${categoryColors[screenshot.category]}`}>
                    {categoryLabels[screenshot.category]}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{screenshot.title}</h3>
                  <p className="text-sm text-slate-400">{screenshot.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white text-xl"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/50 hover:bg-slate-700/50 text-white p-3 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(prev => prev !== null ? (prev > 0 ? prev - 1 : screenshots.length - 1) : null);
            }}
          >
            ←
          </button>
          <img 
            src={screenshots[selectedImage].image} 
            alt={screenshots[selectedImage].title}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800/50 hover:bg-slate-700/50 text-white p-3 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(prev => prev !== null ? (prev < screenshots.length - 1 ? prev + 1 : 0) : null);
            }}
          >
            →
          </button>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <h3 className="text-xl font-bold text-white mb-1">{screenshots[selectedImage].title}</h3>
            <p className="text-slate-400">{screenshots[selectedImage].description}</p>
          </div>
        </div>
      )}

      {/* All Modules Section */}
      <section 
        id="modulos" 
        className="py-20 relative"
        style={{
          backgroundImage: `url(${lockerRoom})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-slate-950/95"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-4">
              {modules.length} Módulos Disponíveis
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Todos os módulos do GoFans
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Cada módulo foi desenvolvido pensando nas necessidades reais de quem organiza caravanas esportivas
            </p>
          </div>

          <div className="space-y-6">
            {modules.map((module) => {
              const Icon = module.icon;
              
              return (
                <Card 
                  key={module.id}
                  className={`bg-slate-800/50 ${module.borderColor} border overflow-hidden`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl ${module.bgColor} flex items-center justify-center`}>
                        <Icon className={`w-7 h-7 ${module.tagColor.split(' ')[1]}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <CardTitle className="text-xl text-white">{module.emoji} {module.title}</CardTitle>
                          <Badge className={module.tagColor}>{module.tag}</Badge>
                        </div>
                        <p className="text-slate-400 text-sm">{module.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0 border-t border-slate-700/50">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
                      {module.features.map((feature, idx) => (
                        <div 
                          key={idx}
                          className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-700/50"
                        >
                          <div className={`w-6 h-6 rounded-full ${module.bgColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Check className={`w-3.5 h-3.5 ${module.tagColor.split(' ')[1]}`} />
                          </div>
                          <div>
                            <h4 className="text-white font-medium text-sm mb-1">{feature.title}</h4>
                            <p className="text-slate-400 text-xs leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">74+</div>
              <div className="text-blue-100">Tabelas Protegidas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">44</div>
              <div className="text-blue-100">Permissões Configuráveis</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">11</div>
              <div className="text-blue-100">Módulos Completos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-100">Responsivo</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para transformar suas caravanas?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Entre em contato para uma demonstração personalizada e descubra como o GoFans pode revolucionar a gestão do seu negócio.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/futebol#cta">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg px-8 py-6">
                Agendar Demonstração <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/futebol">
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 text-lg px-8 py-6">
                Voltar para Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FuncionalidadesFootball;
