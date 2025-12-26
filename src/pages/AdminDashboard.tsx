import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Package, 
  Search,
  Filter,
  Download,
  Mail,
  Phone
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - será substituído por dados reais do Supabase
  const stats = [
    {
      title: "Total de Clientes",
      value: "47",
      change: "+12%",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "Receita Mensal",
      value: "R$ 12.450",
      change: "+8%",
      icon: DollarSign,
      color: "text-secondary"
    },
    {
      title: "Conversão",
      value: "18.2%",
      change: "+3.1%",
      icon: TrendingUp,
      color: "text-primary"
    },
    {
      title: "Assinaturas Ativas",
      value: "32",
      change: "+5",
      icon: Package,
      color: "text-secondary"
    }
  ];

  const customers = [
    {
      id: "1",
      name: "João Silva",
      email: "joao@example.com",
      company: "Torcida Organizada ABC",
      plan: "saas",
      status: "active",
      value: 225,
      joined: "2025-01-10"
    },
    {
      id: "2",
      name: "Maria Santos",
      email: "maria@example.com",
      company: "Caravanas Express",
      plan: "license",
      status: "active",
      value: 3500,
      joined: "2025-01-05"
    },
    {
      id: "3",
      name: "Pedro Costa",
      email: "pedro@example.com",
      company: "Viagens FC",
      plan: "saas",
      status: "pending",
      value: 225,
      joined: "2025-01-15"
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      active: "default",
      pending: "secondary",
      cancelled: "destructive"
    } as const;
    
    const labels = {
      active: "Ativo",
      pending: "Pendente",
      cancelled: "Cancelado"
    };

    return (
      <Badge variant={variants[status as keyof typeof variants]}>
        {labels[status as keyof typeof labels]}
      </Badge>
    );
  };

  const getPlanBadge = (plan: string) => {
    return plan === "saas" ? (
      <Badge variant="outline" className="bg-primary/10">SaaS</Badge>
    ) : (
      <Badge variant="outline" className="bg-secondary/10">Licença</Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-primary">GoFans Admin</h1>
            <p className="text-sm text-muted-foreground">Dashboard Administrativo</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => navigate("/admin/coupons")}>
              Cupons
            </Button>
            <Button variant="outline" onClick={() => navigate("/")}>
              Ver Site
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
                <p className="text-sm text-secondary mt-1">{stat.change} vs mês anterior</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customers Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Clientes</CardTitle>
                <CardDescription>Gerencie todos os clientes da plataforma</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Filter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="relative mt-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar clientes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-sm">Cliente</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Empresa</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Plano</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Valor</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Entrada</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-medium">{customer.name}</p>
                          <p className="text-sm text-muted-foreground">{customer.email}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm">{customer.company}</td>
                      <td className="py-4 px-4">{getPlanBadge(customer.plan)}</td>
                      <td className="py-4 px-4">{getStatusBadge(customer.status)}</td>
                      <td className="py-4 px-4 font-semibold">
                        R$ {customer.value.toFixed(2)}
                      </td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">
                        {new Date(customer.joined).toLocaleDateString('pt-BR')}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Mail className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Phone className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}