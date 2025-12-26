import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Home, Settings } from "lucide-react";

export default function CheckoutSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan");

  useEffect(() => {
    // Track conversion
    console.log("Conversion tracked:", { plan, timestamp: new Date() });
  }, [plan]);

  const planNames = {
    license: "Licença Única",
    saas: "Plano Mensal SaaS"
  };

  const planName = plan ? planNames[plan as keyof typeof planNames] : "GoFans";

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full animate-scale-in">
        <CardContent className="pt-12 pb-8 text-center space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 blur-2xl rounded-full animate-pulse" />
              <CheckCircle className="w-24 h-24 text-secondary relative animate-scale-in" />
            </div>
          </div>

          {/* Success Message */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">
              Pagamento Confirmado! 🎉
            </h1>
            <p className="text-2xl font-semibold text-primary">
              Bem-vindo ao {planName}
            </p>
            <p className="text-muted-foreground max-w-md mx-auto">
              Seu pagamento foi processado com sucesso. Você está a poucos passos de transformar 
              sua operação de caravanas esportivas.
            </p>
          </div>

          {/* Purchase Details */}
          <div className="bg-muted/30 rounded-lg p-6 max-w-md mx-auto">
            <h3 className="font-bold mb-4 text-lg">Próximos Passos</h3>
            <ul className="space-y-3 text-left text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>
                  Nossa equipe entrará em contato em até <strong>24 horas</strong> via WhatsApp 
                  para configurar seu sistema
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>
                  Você receberá um <strong>email de confirmação</strong> com todos os detalhes da compra
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>
                  {plan === "saas" 
                    ? "Seu acesso ao painel será liberado em breve"
                    : "Agendaremos a instalação e treinamento da sua equipe"
                  }
                </span>
              </li>
            </ul>
          </div>

          {/* Support Info */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-sm">
              <strong>Precisa de ajuda?</strong><br />
              Entre em contato: <a href="mailto:contato@gofans.com.br" className="text-primary hover:underline">contato@gofans.com.br</a>
              {" ou "}
              <a href="https://wa.me/5511999999999" className="text-primary hover:underline">(11) 99999-9999</a>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" onClick={() => navigate("/")} variant="outline">
              <Home className="w-5 h-5 mr-2" />
              Voltar para Home
            </Button>
            <Button size="lg" onClick={() => navigate("/portal")}>
              <Settings className="w-5 h-5 mr-2" />
              Acessar Painel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}