import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface FeaturePricingProps {
  featureTitle: string;
}

export const FeaturePricing = ({ featureTitle }: FeaturePricingProps) => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Como ter acesso ao {featureTitle}?
            </h2>
            <p className="text-xl text-muted-foreground">
              Escolha o plano ideal para sua operação
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Licença Única */}
            <Card className="border-2 hover:shadow-elegant transition-all">
              <CardHeader className="text-center pb-6">
                <div className="text-4xl mb-4">📦</div>
                <CardTitle className="text-2xl">Licença Única</CardTitle>
                <div className="text-3xl font-bold text-primary mt-4">
                  R$ 2.500 - R$ 5.000
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Pagamento único
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Sistema completo e funcional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">3 meses de suporte técnico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Instalação e configuração</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Código-fonte incluído</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Sem mensalidades</span>
                  </li>
                </ul>
                <div className="bg-muted/50 p-4 rounded-lg mt-6">
                  <p className="text-sm font-medium">
                    💡 Ideal para empresas com infraestrutura própria
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4"
                  onClick={() => navigate("/checkout?plan=license")}
                >
                  Comprar Licença
                </Button>
              </CardContent>
            </Card>

            {/* SaaS Mensal */}
            <Card className="border-2 border-primary shadow-glow">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold rounded-bl-lg">
                ⭐ Recomendado
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <div className="text-4xl mb-4">🔄</div>
                <CardTitle className="text-2xl">Assinatura Mensal</CardTitle>
                <div className="text-3xl font-bold text-primary mt-4">
                  R$ 150 - R$ 300/mês
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Cancele quando quiser
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Hospedagem incluída</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Suporte contínuo ilimitado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Atualizações automáticas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Backup diário automático</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Escalabilidade garantida</span>
                  </li>
                </ul>
                <div className="bg-primary/10 p-4 rounded-lg mt-6 border border-primary/20">
                  <p className="text-sm font-medium">
                    💡 Comece rápido sem preocupações técnicas
                  </p>
                </div>
                <Button
                  className="w-full mt-4"
                  onClick={() => navigate("/checkout?plan=saas")}
                >
                  Assinar Agora
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Não sabe qual escolher? Fale com um especialista
            </p>
            <Button variant="outline" size="lg">
              Agendar Consultoria Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
