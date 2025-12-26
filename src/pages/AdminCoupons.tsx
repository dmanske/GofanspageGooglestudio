import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Plus, 
  Trash2, 
  Edit, 
  Copy,
  Tag,
  Calendar,
  Percent,
  ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AdminCoupons() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Mock data - será substituído por dados reais do Supabase
  const [coupons, setCoupons] = useState([
    {
      id: "1",
      code: "GOFANS2025",
      discount: 10,
      type: "percentage",
      uses: 12,
      maxUses: 100,
      expiresAt: "2025-12-31",
      active: true
    },
    {
      id: "2",
      code: "PRIMEIRACOMPRA",
      discount: 15,
      type: "percentage",
      uses: 5,
      maxUses: 50,
      expiresAt: "2025-06-30",
      active: true
    },
    {
      id: "3",
      code: "LANCAMENTO",
      discount: 500,
      type: "fixed",
      uses: 23,
      maxUses: null,
      expiresAt: "2025-03-31",
      active: false
    }
  ]);

  const [newCoupon, setNewCoupon] = useState({
    code: "",
    discount: "",
    type: "percentage",
    maxUses: "",
    expiresAt: ""
  });

  const handleCreateCoupon = () => {
    if (!newCoupon.code || !newCoupon.discount) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha código e desconto",
        variant: "destructive"
      });
      return;
    }

    const coupon = {
      id: String(coupons.length + 1),
      code: newCoupon.code.toUpperCase(),
      discount: parseFloat(newCoupon.discount),
      type: newCoupon.type,
      uses: 0,
      maxUses: newCoupon.maxUses ? parseInt(newCoupon.maxUses) : null,
      expiresAt: newCoupon.expiresAt,
      active: true
    };

    setCoupons([...coupons, coupon]);
    
    toast({
      title: "Cupom criado!",
      description: `Cupom ${coupon.code} criado com sucesso`,
    });

    setNewCoupon({ code: "", discount: "", type: "percentage", maxUses: "", expiresAt: "" });
    setIsDialogOpen(false);
  };

  const copyCouponCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copiado!",
      description: `Código ${code} copiado para a área de transferência`,
    });
  };

  const toggleCouponStatus = (id: string) => {
    setCoupons(coupons.map(c => 
      c.id === id ? { ...c, active: !c.active } : c
    ));
  };

  const deleteCoupon = (id: string) => {
    setCoupons(coupons.filter(c => c.id !== id));
    toast({
      title: "Cupom excluído",
      description: "O cupom foi removido com sucesso",
    });
  };

  const getDiscountDisplay = (coupon: typeof coupons[0]) => {
    return coupon.type === "percentage" 
      ? `${coupon.discount}%` 
      : `R$ ${coupon.discount.toFixed(2)}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/admin")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-primary">Cupons de Desconto</h1>
              <p className="text-sm text-muted-foreground">Gerencie cupons promocionais</p>
            </div>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Novo Cupom
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Criar Novo Cupom</DialogTitle>
                <DialogDescription>
                  Configure um novo cupom de desconto para seus clientes
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <Label htmlFor="code">Código do Cupom *</Label>
                  <Input
                    id="code"
                    placeholder="EXEMPLO2025"
                    value={newCoupon.code}
                    onChange={(e) => setNewCoupon({...newCoupon, code: e.target.value.toUpperCase()})}
                  />
                </div>

                <div>
                  <Label htmlFor="type">Tipo de Desconto</Label>
                  <Select 
                    value={newCoupon.type} 
                    onValueChange={(value) => setNewCoupon({...newCoupon, type: value})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">Percentual (%)</SelectItem>
                      <SelectItem value="fixed">Valor Fixo (R$)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="discount">
                    Desconto * {newCoupon.type === "percentage" ? "(%)" : "(R$)"}
                  </Label>
                  <Input
                    id="discount"
                    type="number"
                    placeholder={newCoupon.type === "percentage" ? "10" : "50.00"}
                    value={newCoupon.discount}
                    onChange={(e) => setNewCoupon({...newCoupon, discount: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="maxUses">Limite de Usos (opcional)</Label>
                  <Input
                    id="maxUses"
                    type="number"
                    placeholder="Deixe vazio para ilimitado"
                    value={newCoupon.maxUses}
                    onChange={(e) => setNewCoupon({...newCoupon, maxUses: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="expiresAt">Data de Expiração</Label>
                  <Input
                    id="expiresAt"
                    type="date"
                    value={newCoupon.expiresAt}
                    onChange={(e) => setNewCoupon({...newCoupon, expiresAt: e.target.value})}
                  />
                </div>

                <Button onClick={handleCreateCoupon} className="w-full">
                  Criar Cupom
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Cupons Ativos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {coupons.filter(c => c.active).length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total de Usos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">
                {coupons.reduce((sum, c) => sum + c.uses, 0)}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Desconto Médio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {(coupons.reduce((sum, c) => sum + (c.type === 'percentage' ? c.discount : 0), 0) / coupons.filter(c => c.type === 'percentage').length).toFixed(1)}%
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coupons List */}
        <Card>
          <CardHeader>
            <CardTitle>Todos os Cupons</CardTitle>
            <CardDescription>
              {coupons.length} cupons cadastrados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {coupons.map((coupon) => (
                <div
                  key={coupon.id}
                  className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Tag className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <p className="font-bold text-lg">{coupon.code}</p>
                        <Badge variant={coupon.active ? "default" : "secondary"}>
                          {coupon.active ? "Ativo" : "Inativo"}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyCouponCode(coupon.code)}
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Percent className="w-3 h-3" />
                          Desconto: {getDiscountDisplay(coupon)}
                        </span>
                        <span>
                          Usos: {coupon.uses}
                          {coupon.maxUses ? `/${coupon.maxUses}` : ""}
                        </span>
                        {coupon.expiresAt && (
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            Expira: {new Date(coupon.expiresAt).toLocaleDateString('pt-BR')}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleCouponStatus(coupon.id)}
                    >
                      {coupon.active ? "Desativar" : "Ativar"}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteCoupon(coupon.id)}
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}