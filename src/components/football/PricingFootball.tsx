import { Check, AlertCircle, Database, ArrowRight, Shield, Server, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import celebrationBg from "@/assets/football/celebration.jpg";

export const PricingFootball = () => {
  const navigate = useNavigate();

  const plan = {
    id: "license",
    name: "Licença Vitalícia",
    icon: "📦",
    price: "R$ 3.500",
    priceLabel: "pagamento único",
    description: "Pague uma vez • Use para sempre",
    benefits: [
      "Sistema completo com 13 módulos",
      "74 tabelas de banco de dados",
      "44 permissões granulares",
      "Instalação e configuração inicial",
      "Atualizações incluídas por 1 ano",
      "Suporte por WhatsApp"
    ],
    cta: "Solicitar Proposta",
    highlight: "Sem mensalidades para o software"
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${celebrationBg})`,
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
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-blue-400 font-medium text-sm">Investimento</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quanto Custa o <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">GoFans</span>?
          </h2>
          <p className="text-xl text-slate-400">
            Modelo de licenciamento transparente: pague uma vez, use para sempre
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto mb-12">
          <Card className="relative overflow-hidden transition-all duration-300 hover:scale-[1.02] border border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl shadow-2xl">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
            
            {/* Badge */}
            <div className="absolute top-4 right-4">
              <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                SEM MENSALIDADE
              </span>
            </div>
            
            <CardHeader className="text-center pb-8 pt-10">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <span className="text-3xl">{plan.icon}</span>
              </div>
              <CardTitle className="text-2xl mb-2 text-white">{plan.name}</CardTitle>
              <CardDescription className="text-slate-400">{plan.description}</CardDescription>
              <div className="mt-4">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {plan.price}
                </div>
                <div className="text-slate-500 text-sm mt-1">{plan.priceLabel}</div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {plan.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl">
                <p className="text-sm text-emerald-400 font-medium flex items-start gap-2">
                  <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  {plan.highlight}
                </p>
              </div>

              <Button
                onClick={() => navigate(`/checkout?plan=${plan.id}`)}
                className="w-full text-base h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold shadow-xl shadow-blue-600/20"
              >
                {plan.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Important Notice - Customer Responsibilities */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main Notice Card */}
          <Card className="bg-amber-500/5 border border-amber-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-amber-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg text-white mb-3">
                    Importante: Custos por conta do cliente
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    A licença do GoFans é um <span className="text-white font-semibold">pagamento único</span>. 
                    Porém, existem custos de infraestrutura que ficam por conta do cliente:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Supabase */}
                    <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center">
                          <Database className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                          <h5 className="text-white font-medium">Supabase</h5>
                          <span className="text-xs text-slate-500">Banco de Dados</span>
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-400">
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>Plano gratuito disponível para começar</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CreditCard className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                          <span>Planos pagos a partir de ~$25/mês</span>
                        </li>
                      </ul>
                    </div>

                    {/* Hosting */}
                    <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                          <Server className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <h5 className="text-white font-medium">Hospedagem</h5>
                          <span className="text-xs text-slate-500">Site próprio (opcional)</span>
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-400">
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Vercel/Netlify tem plano gratuito</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CreditCard className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                          <span>Domínio próprio: ~R$50/ano</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits Card */}
          <Card className="bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg text-white mb-3">
                    Por que esse modelo?
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        title: "Você é dono dos dados",
                        desc: "Dados ficam no seu Supabase, não no nosso servidor"
                      },
                      {
                        title: "Sem dependência",
                        desc: "Se não quiser mais o GoFans, seus dados continuam com você"
                      },
                      {
                        title: "Transparência total",
                        desc: "Você sabe exatamente o que está pagando e para quem"
                      }
                    ].map((item, i) => (
                      <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                        <h5 className="text-white font-medium mb-2 text-sm">{item.title}</h5>
                        <p className="text-slate-500 text-xs">{item.desc}</p>
                      </div>
                    ))}
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
