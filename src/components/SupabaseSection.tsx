import { Database, Shield, Server, Download, Lock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

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
    icon: Zap,
    title: "Sem Limites",
    description: "Sem cobrança por uso na maioria dos casos. Escale sem preocupações de custo.",
    stat: "∞",
    statLabel: "Sem Taxas"
  }
];

export const SupabaseSection = () => {
  const navigate = useNavigate();

  return (
    <section id="supabase" className="py-24 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-semibold mb-4">
            🔒 Infraestrutura
          </span>
          <h2 className="text-foreground mb-6">
            Por que Supabase?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O GoFans é construído sobre o Supabase, a alternativa open-source ao Firebase. 
            Isso significa <span className="text-secondary font-semibold">mais controle, segurança e transparência</span> para você.
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
          <div className="bg-card border border-primary/30 rounded-xl p-6 text-center animate-scale-in">
            <span className="text-4xl md:text-5xl font-bold text-primary">74</span>
            <p className="text-muted-foreground mt-2">Tabelas</p>
          </div>
          <div className="bg-card border border-secondary/30 rounded-xl p-6 text-center animate-scale-in" style={{ animationDelay: '100ms' }}>
            <span className="text-4xl md:text-5xl font-bold text-secondary">44</span>
            <p className="text-muted-foreground mt-2">Permissões</p>
          </div>
          <div className="bg-card border border-primary/30 rounded-xl p-6 text-center animate-scale-in" style={{ animationDelay: '200ms' }}>
            <span className="text-4xl md:text-5xl font-bold text-primary">13</span>
            <p className="text-muted-foreground mt-2">Módulos</p>
          </div>
          <div className="bg-card border border-secondary/30 rounded-xl p-6 text-center animate-scale-in" style={{ animationDelay: '300ms' }}>
            <span className="text-4xl md:text-5xl font-bold text-secondary">4</span>
            <p className="text-muted-foreground mt-2">Níveis de Usuário</p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-secondary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)] animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-foreground">{benefit.stat}</span>
                    <p className="text-xs text-muted-foreground">{benefit.statLabel}</p>
                  </div>
                </div>
                <h4 className="font-bold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pagamento Único, Banco Seu Para Sempre
            </h3>
            <p className="text-muted-foreground mb-6">
              Com a licença única do GoFans, você recebe seu próprio projeto Supabase configurado e pronto. 
              Sem taxas mensais de infraestrutura.
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/checkout?plan=license")}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              Adquirir Licença - R$ 3.500
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
