import { BarChart3, Users, Bus, DollarSign, Ticket, MessageSquare } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Dashboard com dados em tempo real",
    description: "Visualize todas as métricas importantes da sua operação em um só lugar"
  },
  {
    icon: Users,
    title: "Gestão de passageiros com filtros avançados",
    description: "Organize e encontre passageiros rapidamente com filtros inteligentes"
  },
  {
    icon: Bus,
    title: "Organização de ônibus e responsáveis",
    description: "Gerencie sua frota e delegue responsabilidades de forma eficiente"
  },
  {
    icon: DollarSign,
    title: "Controle financeiro automatizado",
    description: "Acompanhe receitas, despesas e parcelamentos automaticamente"
  },
  {
    icon: Ticket,
    title: "Distribuição e controle de ingressos",
    description: "Controle estoque, setores e distribua ingressos com facilidade"
  },
  {
    icon: MessageSquare,
    title: "Envio de mensagens em massa pelo WhatsApp",
    description: "Comunique-se com todos os passageiros de forma rápida e eficiente"
  },
];

export const WhatIsGoFans = () => {
  return (
    <section id="what-is-gofans" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-foreground mb-6">O que é o GoFans</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            O GoFans é um <span className="text-primary font-semibold">sistema de gestão completo</span> para viagens esportivas. 
            Ele organiza sua operação de ponta a ponta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)] animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
