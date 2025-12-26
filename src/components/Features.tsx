import { Bus, Users, DollarSign, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";
import passengersMockup from "@/assets/passengers-mockup.jpg";
import whatsappMockup from "@/assets/whatsapp-mockup.jpg";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Bus,
    title: "Gestão Completa de Viagens",
    description: "Sistema completo para organizar caravanas com múltiplos ônibus, passeios integrados e pagamentos flexíveis",
    details: [
      "Múltiplos ônibus por viagem",
      "Passeios opcionais com cobrança automática",
      "Sistema de setores e valores personalizados",
      "Controle de lotação em tempo real"
    ],
    image: passengersMockup,
    reverse: false,
    slug: "gestao-viagens",
    featured: true
  },
  {
    icon: Users,
    title: "Controle Inteligente de Passageiros",
    description: "Cadastro rápido, grupos familiares, descontos automáticos e realocação flexível entre ônibus",
    details: [
      "Cadastro simplificado e rápido",
      "Descontos automáticos por regras",
      "Realocação entre ônibus com drag & drop",
      "Histórico completo de viagens"
    ],
    image: passengersMockup,
    reverse: true,
    slug: "controle-passageiros",
    featured: true
  },
  {
    icon: DollarSign,
    title: "Financeiro Automatizado",
    description: "Dashboard completo, margem de lucro por viagem, controle de despesas e fluxo de caixa em tempo real",
    details: [
      "Receitas e despesas detalhadas",
      "Margem de lucro automática",
      "Contas a receber e a pagar",
      "Relatórios executivos"
    ],
    image: dashboardMockup,
    reverse: false,
    slug: "financeiro-completo",
    featured: false
  },
  {
    icon: MessageSquare,
    title: "Comunicação em Massa",
    description: "WhatsApp integrado, templates personalizados, envios automáticos e geração de links de cadastro",
    details: [
      "Mensagens em massa personalizadas",
      "Templates com variáveis dinâmicas",
      "Links de cadastro público",
      "Histórico de comunicações"
    ],
    image: whatsappMockup,
    reverse: true,
    slug: "integracao-whatsapp",
    featured: false
  },
];

export const Features = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-foreground mb-6">Funcionalidades Completas</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Os 4 pilares principais do sistema mais completo de gestão de caravanas
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-12 items-center animate-fade-in-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 border border-primary/20">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  {feature.featured && (
                    <Badge variant="default" className="text-sm">
                      ⭐ Carro-chefe
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-3xl font-bold text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                <ul className="space-y-3">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      </div>
                      <span className="text-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  onClick={() => navigate(`/funcionalidades/${feature.slug}`)}
                  className="mt-4"
                >
                  Ver Detalhes
                </Button>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] border border-border hover:shadow-[var(--shadow-glow)] transition-all duration-500">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to See All Features */}
        <div className="text-center mt-20">
          <Button 
            size="lg" 
            onClick={() => navigate("/funcionalidades")}
            className="text-lg px-8"
          >
            Ver Todas as 13 Funcionalidades
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Explore o sistema completo com detalhes de cada módulo
          </p>
        </div>
      </div>
    </section>
  );
};
