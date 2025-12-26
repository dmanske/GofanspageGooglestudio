import { Check, X } from "lucide-react";

export const ComparisonTable = () => {
  const comparisons = [
    {
      aspect: "Organização de Viagens",
      without: "3-4 horas por viagem",
      with: "15 minutos no sistema",
      improvement: "80% mais rápido"
    },
    {
      aspect: "Controle de Passageiros",
      without: "Planilhas e confusão",
      with: "Tudo automatizado",
      improvement: "Zero erros"
    },
    {
      aspect: "Comunicação com Clientes",
      without: "WhatsApp manual um por um",
      with: "Envios em massa integrados",
      improvement: "10x mais rápido"
    },
    {
      aspect: "Gestão Financeira",
      without: "Cálculos manuais e estimados",
      with: "Margem em tempo real",
      improvement: "+15% de lucro"
    },
    {
      aspect: "Histórico de Clientes",
      without: "Difícil de rastrear",
      with: "100% rastreável",
      improvement: "Fidelização +30%"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Antes vs Depois do <span className="text-primary">GoFans</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja a transformação real que o sistema traz para sua operação
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="font-bold text-lg text-muted-foreground">Aspecto</div>
            <div className="font-bold text-lg flex items-center gap-2">
              <X className="w-5 h-5 text-destructive" />
              Sem GoFans
            </div>
            <div className="font-bold text-lg flex items-center gap-2">
              <Check className="w-5 h-5 text-secondary" />
              Com GoFans
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-4">
            {comparisons.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-3 gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="font-semibold flex items-center">
                  {item.aspect}
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item.without}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{item.with}</span>
                  </div>
                  <span className="text-primary font-bold text-sm">
                    ✨ {item.improvement}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Total Impact */}
          <div className="mt-12 p-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl border border-primary/30">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">ROI em 30 dias</div>
              <p className="text-xl text-foreground">
                Economia de tempo e aumento de receita pagam o investimento em menos de um mês
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
