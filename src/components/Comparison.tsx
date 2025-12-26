import { X, Check } from "lucide-react";

const comparisons = [
  {
    aspect: "Organização de Dados",
    before: "Planilhas manuais desorganizadas",
    after: "Sistema centralizado e automatizado"
  },
  {
    aspect: "Comunicação",
    before: "Mensagens individuais no WhatsApp",
    after: "Envio em massa com templates"
  },
  {
    aspect: "Controle Financeiro",
    before: "Cálculos manuais e erros frequentes",
    after: "Dashboard com dados em tempo real"
  },
  {
    aspect: "Gestão de Passageiros",
    before: "Listas em papel e conferência manual",
    after: "Filtros inteligentes e status online"
  },
  {
    aspect: "Tempo de Organização",
    before: "Horas de trabalho manual",
    after: "Minutos com automação"
  },
];

export const Comparison = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-foreground mb-6">Antes e Depois do GoFans</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja a transformação que o sistema traz para sua operação
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before Column */}
            <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8 animate-slide-in-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                  <X className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Antes</h3>
              </div>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div key={index} className="border-b border-destructive/10 pb-4">
                    <div className="font-semibold text-muted-foreground text-sm mb-1">
                      {item.aspect}
                    </div>
                    <div className="text-foreground">{item.before}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* After Column */}
            <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-8 animate-slide-in-right shadow-[var(--shadow-elegant)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Check className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Depois</h3>
              </div>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div key={index} className="border-b border-secondary/10 pb-4">
                    <div className="font-semibold text-muted-foreground text-sm mb-1">
                      {item.aspect}
                    </div>
                    <div className="text-foreground font-medium">{item.after}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">80%</div>
              <div className="text-muted-foreground">Redução no tempo de organização</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">5x</div>
              <div className="text-muted-foreground">Mais eficiência na comunicação</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">15%</div>
              <div className="text-muted-foreground">Aumento médio de receita</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
