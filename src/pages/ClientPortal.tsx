import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CreditCard, 
  Download, 
  FileText, 
  Calendar,
  AlertCircle,
  CheckCircle,
  LogOut,
  Settings
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

export default function ClientPortal() {
  const navigate = useNavigate();
  const [plan] = useState("saas"); // Mock - virá do Supabase

  // Mock data
  const subscription = {
    plan: "Plano Mensal SaaS",
    status: "active",
    price: 225,
    nextBilling: "2025-02-15",
    startDate: "2025-01-15",
    usagePercent: 65
  };

  const invoices = [
    { id: "1", date: "2025-01-15", amount: 225, status: "paid", pdfUrl: "#" },
    { id: "2", date: "2024-12-15", amount: 225, status: "paid", pdfUrl: "#" },
    { id: "3", date: "2024-11-15", amount: 225, status: "paid", pdfUrl: "#" }
  ];

  const systemAccess = {
    url: "https://app.gofans.com.br",
    username: "cliente@example.com",
    setupComplete: true
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-primary">GoFans</h1>
            <p className="text-sm text-muted-foreground">Portal do Cliente</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Configurações
            </Button>
            <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Subscription Status */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Sua Assinatura</CardTitle>
                    <CardDescription>{subscription.plan}</CardDescription>
                  </div>
                  <Badge variant="default" className="bg-secondary">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Ativa
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Valor Mensal</p>
                    <p className="text-2xl font-bold text-primary">R$ {subscription.price.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Próxima Cobrança</p>
                    <p className="text-lg font-semibold">
                      {new Date(subscription.nextBilling).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Uso do período</span>
                    <span className="font-medium">{subscription.usagePercent}%</span>
                  </div>
                  <Progress value={subscription.usagePercent} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">
                    Período: {new Date(subscription.startDate).toLocaleDateString('pt-BR')} - {new Date(subscription.nextBilling).toLocaleDateString('pt-BR')}
                  </p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" className="flex-1">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Alterar Pagamento
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Cancelar Assinatura
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Invoices */}
            <Card>
              <CardHeader>
                <CardTitle>Faturas</CardTitle>
                <CardDescription>Histórico de pagamentos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {invoices.map((invoice) => (
                    <div
                      key={invoice.id}
                      className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                          <p className="font-medium">
                            {new Date(invoice.date).toLocaleDateString('pt-BR', { 
                              month: 'long', 
                              year: 'numeric' 
                            })}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            R$ {invoice.amount.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="bg-secondary/10">
                          Pago
                        </Badge>
                        <Button variant="ghost" size="icon">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* System Access */}
            <Card>
              <CardHeader>
                <CardTitle>Acesso ao Sistema</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {systemAccess.setupComplete ? (
                  <>
                    <div className="flex items-center gap-2 text-secondary">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">Configuração Completa</span>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                      <p className="text-sm text-muted-foreground">URL de Acesso</p>
                      <a 
                        href={systemAccess.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium break-all"
                      >
                        {systemAccess.url}
                      </a>
                    </div>
                    <Button className="w-full" onClick={() => window.open(systemAccess.url, '_blank')}>
                      Acessar Sistema
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2 text-orange-500">
                      <AlertCircle className="w-5 h-5" />
                      <span className="font-medium">Configuração Pendente</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Nossa equipe entrará em contato em breve para configurar seu acesso.
                    </p>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle>Suporte</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Atendimento
                </Button>
                <div className="bg-muted/30 p-4 rounded-lg space-y-2 text-sm">
                  <p className="font-medium">Entre em Contato</p>
                  <p className="text-muted-foreground">
                    📧 contato@gofans.com.br<br />
                    📱 (11) 99999-9999
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Resumo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Cliente desde</span>
                  <span className="font-medium text-sm">
                    {new Date(subscription.startDate).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total investido</span>
                  <span className="font-medium text-sm text-secondary">
                    R$ {(subscription.price * 3).toFixed(2)}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}