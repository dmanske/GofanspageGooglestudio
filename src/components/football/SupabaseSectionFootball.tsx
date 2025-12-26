import { Database, Shield, Server, Download, Lock, DollarSign, ArrowRight, CheckCircle2, CreditCard, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import stadiumTechBg from "@/assets/football/stadium-tech.jpg";

const benefits = [
  {
    icon: Database,
    title: "Banco Exclusivo",
    description: "Cada cliente tem seu próprio projeto Supabase. Seus dados nunca se misturam com outros.",
    stat: "100%",
    statLabel: "Isolamento"
  },
  {
    icon: Server,
    title: "74 Tabelas",
    description: "Estrutura robusta com relacionamentos otimizados para gestão completa de caravanas.",
    stat: "74",
    statLabel: "Tabelas"
  },
  {
    icon: Shield,
    title: "Row Level Security",
    description: "Políticas de segurança em nível de linha garantem que cada usuário veja apenas seus dados.",
    stat: "RLS",
    statLabel: "Ativo"
  },
  {
    icon: Download,
    title: "Ownership Total",
    description: "Exporte, faça backup ou migre seus dados a qualquer momento. Você é o dono.",
    stat: "24/7",
    statLabel: "Acesso"
  },
  {
    icon: Lock,
    title: "Criptografia",
    description: "Dados sensíveis criptografados em trânsito e em repouso com padrões bancários.",
    stat: "AES-256",
    statLabel: "Padrão"
  },
  {
    icon: DollarSign,
    title: "Custo Previsível",
    description: "Você paga diretamente ao Supabase: plano Pro a partir de $25/mês. Sem intermediários.",
    stat: "$25",
    statLabel: "/mês"
  }
];

const costBreakdown = [
  {
    icon: CheckCircle2,
    label: "Licença GoFans",
    value: "R$ 3.500",
    type: "once",
    description: "Pagamento único, vitalício"
  },
  {
    icon: Database,
    label: "Supabase Pro",
    value: "~$25/mês",
    type: "monthly",
    description: "Pago diretamente ao Supabase"
  },
  {
    icon: Globe,
    label: "Hospedagem",
    value: "~$20/mês",
    type: "monthly",
    description: "Opcional, se site próprio (Vercel/Netlify)"
  }
];

export const SupabaseSectionFootball = () => {
  const navigate = useNavigate();

  return (
    <section id="supabase" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${stadiumTechBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-900/90 to-slate-950/95"></div>
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-medium text-sm">Infraestrutura</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Por que <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Supabase</span>?
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            O GoFans é construído sobre o Supabase, a alternativa open-source ao Firebase. 
            Isso significa <span className="text-blue-400 font-semibold">mais controle, segurança e transparência</span> para você.
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
          {[
            { value: "74", label: "Tabelas" },
            { value: "44", label: "Permissões" },
            { value: "13", label: "Módulos" },
            { value: "4", label: "Níveis" },
          ].map((stat, i) => (
            <div 
              key={i}
              className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-all duration-300"
            >
              <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{stat.value}</span>
              <p className="text-slate-400 mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-colors">
                    <IconComponent className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-white">{benefit.stat}</span>
                    <p className="text-xs text-slate-500">{benefit.statLabel}</p>
                  </div>
                </div>
                <h4 className="font-semibold text-white mb-2">{benefit.title}</h4>
                <p className="text-sm text-slate-400">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Cost Transparency Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full mb-4">
              <CreditCard className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-medium text-sm">Transparência Total</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Entenda Exatamente o Que Você Paga
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {costBreakdown.map((cost, index) => {
              const IconComponent = cost.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border rounded-xl p-6 text-center ${
                    cost.type === 'once' 
                      ? 'border-emerald-500/30 ring-1 ring-emerald-500/20' 
                      : 'border-slate-700/50'
                  }`}
                >
                  {cost.type === 'once' && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      ÚNICO
                    </div>
                  )}
                  {cost.type === 'monthly' && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      MENSAL
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4 mt-2">
                    <IconComponent className={`w-6 h-6 ${cost.type === 'once' ? 'text-emerald-400' : 'text-blue-400'}`} />
                  </div>
                  <h4 className="font-semibold text-white mb-1">{cost.label}</h4>
                  <p className={`text-2xl font-bold mb-2 ${cost.type === 'once' ? 'text-emerald-400' : 'text-white'}`}>
                    {cost.value}
                  </p>
                  <p className="text-xs text-slate-500">{cost.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 text-center">
            <p className="text-slate-400 text-sm">
              <span className="text-white font-medium">Importante:</span> Os custos mensais (Supabase e hospedagem) são pagos diretamente aos provedores. 
              <br className="hidden md:block" />
              Você tem controle total e pode cancelar a qualquer momento.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center">
                <Database className="w-8 h-8 text-emerald-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Licença Única + Seu Próprio Supabase
            </h3>
            <p className="text-slate-400 mb-6">
              Com a licença única do GoFans, configuramos seu projeto Supabase completo. 
              A mensalidade do Supabase (~$25/mês) é paga diretamente por você, sem intermediários.
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/checkout?plan=license")}
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-semibold shadow-xl shadow-emerald-600/20"
            >
              Adquirir Licença - R$ 3.500
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
