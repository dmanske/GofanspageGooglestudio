import { Button } from "@/components/ui/button";
import { Check, CreditCard, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PricingInfo = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Escolha Como Quer <span className="text-primary">Adquirir</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Licença única ou assinatura mensal - você decide o que faz mais sentido para sua operação
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* License Option */}
          <div className="group relative bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Licença Única</h3>
                <p className="text-sm text-muted-foreground">Compre uma vez, use para sempre</p>
              </div>
            </div>

            <div className="text-4xl font-bold text-primary mb-2">
              R$ 2.500 - R$ 5.000
            </div>
            <p className="text-muted-foreground mb-6">Pagamento único</p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Sistema completo e funcional</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm">3 meses de suporte técnico</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Instalação e configuração inicial</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Treinamento da equipe</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Código-fonte incluído</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm font-bold">Sem mensalidades</span>
              </li>
            </ul>

            <div className="bg-muted/50 p-4 rounded-lg mb-6">
              <p className="text-sm">
                💡 <span className="font-semibold">Ideal para:</span> Empresas com infraestrutura própria e equipe de TI
              </p>
            </div>

            <Button
              onClick={() => navigate("/checkout?plan=license")}
              variant="outline"
              className="w-full"
              size="lg"
            >
              Comprar Licença
            </Button>
          </div>

          {/* SaaS Option */}
          <div className="group relative bg-card/50 backdrop-blur-sm border-2 border-primary rounded-2xl p-8 hover:shadow-glow transition-all duration-300">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                ⭐ Mais Popular
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6 mt-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Assinatura Mensal</h3>
                <p className="text-sm text-muted-foreground">Pague mensalmente, sem compromisso</p>
              </div>
            </div>

            <div className="text-4xl font-bold text-primary mb-2">
              R$ 150 - R$ 300<span className="text-xl text-muted-foreground">/mês</span>
            </div>
            <p className="text-muted-foreground mb-6">Cancele quando quiser</p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm font-bold">Hospedagem incluída</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm font-bold">Suporte contínuo ilimitado</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Atualizações automáticas</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Backup diário automático</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Escalabilidade garantida</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm font-bold">Sem custos de infraestrutura</span>
              </li>
            </ul>

            <div className="bg-primary/10 p-4 rounded-lg mb-6 border border-primary/30">
              <p className="text-sm">
                ✨ <span className="font-semibold">Ideal para:</span> Começar rápido sem investimento inicial alto
              </p>
            </div>

            <Button
              onClick={() => navigate("/checkout?plan=saas")}
              className="w-full"
              size="lg"
            >
              Assinar Mensalmente
            </Button>
          </div>
        </div>

        {/* Info Footer */}
        <div className="max-w-3xl mx-auto text-center mt-12">
          <p className="text-muted-foreground">
            🎯 Não sabe qual escolher? <button onClick={() => navigate("/#cta")} className="text-primary hover:underline font-semibold">Fale com um especialista</button> e descubra a melhor opção para você
          </p>
        </div>
      </div>
    </section>
  );
};
