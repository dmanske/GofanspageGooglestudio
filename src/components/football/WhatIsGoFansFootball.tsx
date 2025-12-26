import { BarChart3, Users, Bus, DollarSign, Ticket, MessageSquare, ArrowRight } from "lucide-react";
import stadiumFansAtmosphere from "@/assets/football/stadium-fans-atmosphere.jpg";
import heroDashboard from "@/assets/promo/hero-dashboard.png";

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

export const WhatIsGoFansFootball = () => {
  return (
    <section id="what-is-gofans" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${stadiumFansAtmosphere})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/85 to-slate-950/90"></div>
      </div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-600/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-cyan-600/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-blue-400 font-medium text-sm">Visão Geral</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que é o <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">GoFans</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            O GoFans é um <span className="text-blue-400 font-semibold">sistema de gestão completo</span> para viagens esportivas. 
            Ele organiza sua operação de ponta a ponta.
          </p>
        </div>

        {/* Layout: Image on left, Features on right */}
        <div className="grid lg:grid-cols-2 gap-10 items-start max-w-7xl mx-auto">
          {/* Left side - Dashboard Image */}
          <div className="relative group lg:sticky lg:top-24">
            {/* Animated glow rings */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 rounded-2xl opacity-30 blur-2xl animate-[pulse_3s_ease-in-out_infinite]"></div>
            
            {/* Main image with hover effect */}
            <div className="relative overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]">
              <img 
                src={heroDashboard} 
                alt="GoFans - Sistema de Gestão de Caravanas" 
                className="w-full rounded-2xl shadow-2xl shadow-blue-500/30 relative z-10"
              />
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full z-20" style={{ transition: 'transform 0.7s ease-out, opacity 0.3s' }}></div>
            </div>
            
            {/* Floating particles effect */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-[bounce_4s_ease-in-out_infinite]"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-[bounce_5s_ease-in-out_infinite_0.5s]"></div>
          </div>

          {/* Right side - Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-3 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-colors">
                  <feature.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1.5">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                <div className="mt-3 flex items-center text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Saiba mais</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
