import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Check, ArrowLeft, Tag } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const checkoutSchema = z.object({
  name: z.string().trim().min(3, "Nome deve ter no mínimo 3 caracteres").max(100),
  email: z.string().email("Email inválido").max(255),
  company: z.string().trim().max(100).optional(),
  whatsapp: z.string().trim().min(10, "WhatsApp inválido").max(20),
  coupon: z.string().optional()
});

type CheckoutForm = z.infer<typeof checkoutSchema>;

export default function Checkout() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [couponApplied, setCouponApplied] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutForm>({
    resolver: zodResolver(checkoutSchema),
  });

  const plans = {
    license: {
      id: "license",
      name: "Licença Única",
      price: 3500,
      displayPrice: "R$ 2.500 - R$ 5.000",
      benefits: [
        "Sistema completo e funcional",
        "3 meses de suporte técnico",
        "Instalação e configuração",
        "Treinamento da equipe",
        "Código-fonte incluído"
      ]
    },
    saas: {
      id: "saas",
      name: "Plano Mensal SaaS",
      price: 225,
      displayPrice: "R$ 150 - R$ 300/mês",
      benefits: [
        "Hospedagem incluída",
        "Suporte ilimitado",
        "Atualizações automáticas",
        "Backup diário",
        "Escalabilidade garantida"
      ]
    }
  };

  useEffect(() => {
    const planParam = searchParams.get("plan");
    if (planParam && (planParam === "license" || planParam === "saas")) {
      setSelectedPlan(planParam);
    } else {
      setSelectedPlan("saas");
    }
  }, [searchParams]);

  const selectedPlanData = selectedPlan ? plans[selectedPlan as keyof typeof plans] : null;

  const applyCoupon = (coupon: string) => {
    if (coupon.toUpperCase() === "GOFANS2025") {
      setCouponApplied(true);
      toast({
        title: "Cupom aplicado!",
        description: "Você ganhou 10% de desconto",
      });
    } else {
      toast({
        title: "Cupom inválido",
        description: "O cupom digitado não existe ou expirou",
        variant: "destructive"
      });
    }
  };

  const onSubmit = async (data: CheckoutForm) => {
    if (!selectedPlan) {
      toast({
        title: "Selecione um plano",
        description: "Você precisa escolher um plano antes de continuar",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);

    // Simulação de processamento (substituir por integração Stripe real)
    setTimeout(() => {
      console.log("Checkout data:", { ...data, plan: selectedPlan, couponApplied });
      
      toast({
        title: "Redirecionando para pagamento...",
        description: "Você será redirecionado para o checkout seguro",
      });

      // Simular redirecionamento
      setTimeout(() => {
        navigate(`/checkout/success?plan=${selectedPlan}`);
      }, 1500);
    }, 1000);
  };

  const finalPrice = selectedPlanData 
    ? couponApplied 
      ? selectedPlanData.price * 0.9 
      : selectedPlanData.price
    : 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-primary">GoFans</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Finalizar Contratação</h1>
            <p className="text-muted-foreground">
              Complete os dados abaixo para garantir seu acesso ao GoFans
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Plan Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>1. Selecione seu Plano</CardTitle>
                  <CardDescription>Escolha o modelo de contratação</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.values(plans).map(plan => (
                      <button
                        key={plan.id}
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`p-6 rounded-lg border-2 text-left transition-all ${
                          selectedPlan === plan.id
                            ? "border-primary bg-primary/5 shadow-md"
                            : "border-border hover:border-muted-foreground"
                        }`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-bold text-lg">{plan.name}</h3>
                          {selectedPlan === plan.id && (
                            <Check className="w-6 h-6 text-primary" />
                          )}
                        </div>
                        <p className="text-2xl font-bold text-primary mb-2">
                          {plan.displayPrice}
                        </p>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Customer Data */}
              <Card>
                <CardHeader>
                  <CardTitle>2. Seus Dados</CardTitle>
                  <CardDescription>Informações para contato e faturamento</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="Seu nome completo"
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="seu@email.com"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        {...register("company")}
                        placeholder="Nome da sua empresa (opcional)"
                      />
                    </div>

                    <div>
                      <Label htmlFor="whatsapp">WhatsApp *</Label>
                      <Input
                        id="whatsapp"
                        {...register("whatsapp")}
                        placeholder="(11) 99999-9999"
                        className={errors.whatsapp ? "border-destructive" : ""}
                      />
                      {errors.whatsapp && (
                        <p className="text-sm text-destructive mt-1">{errors.whatsapp.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={!selectedPlan || isProcessing}
                    >
                      {isProcessing ? "Processando..." : "Finalizar Pagamento"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Resumo da Compra</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedPlanData && (
                    <>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Plano Selecionado</p>
                        <p className="font-bold text-lg">{selectedPlanData.name}</p>
                      </div>

                      <Separator />

                      <div>
                        <p className="text-sm text-muted-foreground mb-3">Benefícios Inclusos</p>
                        <ul className="space-y-2">
                          {selectedPlanData.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Separator />

                      {/* Coupon */}
                      <div>
                        <Label htmlFor="coupon">Cupom de Desconto</Label>
                        <div className="flex gap-2 mt-1">
                          <Input
                            id="coupon"
                            {...register("coupon")}
                            placeholder="Digite o cupom"
                            disabled={couponApplied}
                          />
                          <Button
                            type="button"
                            variant="outline"
                            onClick={(e) => {
                              const input = (e.target as HTMLElement).previousElementSibling as HTMLInputElement;
                              applyCoupon(input.value);
                            }}
                            disabled={couponApplied}
                          >
                            <Tag className="w-4 h-4" />
                          </Button>
                        </div>
                        {couponApplied && (
                          <p className="text-sm text-secondary mt-2">✓ Cupom GOFANS2025 aplicado</p>
                        )}
                      </div>

                      <Separator />

                      {/* Total */}
                      <div className="space-y-2">
                        {couponApplied && (
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span className="line-through">
                              R$ {selectedPlanData.price.toFixed(2)}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between items-center">
                          <span className="font-bold">Total</span>
                          <span className="text-2xl font-bold text-primary">
                            R$ {finalPrice.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}