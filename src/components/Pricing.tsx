import { Check, AlertCircle, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const Pricing = () => {
  const navigate = useNavigate();

  const plan = {
    id: "license",
    name: "Licença Única",
    icon: "📦",
    price: "R$ 3.500",
    description: "Pagamento único, sistema completo",
    benefits: [
      "Sistema completo com 13 módulos",
      "74 tabelas de banco de dados",
      "44 permissões granulares",
      "Instalação e configuração inicial",
      "Sem mensalidades recorrentes"
    ],
    cta: "Quero Comprar",
    highlight: "Investimento único com controle total do sistema"
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Quanto Custa o <span className="text-primary">GoFans</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Investimento único para transformar sua operação
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto mb-12">
          <Card className="relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-elegant border-2 border-primary shadow-glow">
            <CardHeader className="text-center pb-8 pt-8">
              <div className="text-5xl mb-4">{plan.icon}</div>
              <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
              <CardDescription className="text-base">{plan.description}</CardDescription>
              <div className="text-4xl font-bold text-primary mt-4">
                {plan.price}
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Benefits */}
              <ul className="space-y-3">
                {plan.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Highlight */}
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm font-medium text-foreground">
                  💡 {plan.highlight}
                </p>
              </div>

              {/* CTA */}
              <Button
                onClick={() => navigate(`/checkout?plan=${plan.id}`)}
                className="w-full text-lg h-12"
              >
                {plan.cta}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Supabase Notice */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-card/50 border-border">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-foreground mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-secondary" />
                    Sobre o Banco de Dados
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    O GoFans utiliza <span className="text-primary font-semibold">Supabase</span> como banco de dados. 
                    Você precisará criar uma conta gratuita no Supabase para hospedar seus dados. 
                    <span className="text-foreground font-medium">Se você não souber criar a conta, oferecemos todo o suporte necessário!</span>
                  </p>
                  <div className="bg-background/50 rounded-lg p-4 border border-border">
                    <p className="text-sm text-foreground font-medium mb-2">📋 O que você precisa saber:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Supabase oferece plano gratuito generoso para começar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Custos de hospedagem do banco são por conta do cliente</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Você tem controle total dos seus dados</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Pode exportar, fazer backup e migrar a qualquer momento</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
