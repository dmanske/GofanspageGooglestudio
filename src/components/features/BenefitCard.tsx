import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface BenefitCardProps {
  stat: string;
  description: string;
}

export const BenefitCard = ({ stat, description }: BenefitCardProps) => {
  return (
    <Card className="border-2 border-primary/20 bg-primary/5">
      <CardContent className="p-6 text-center space-y-2">
        <div className="flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-primary mr-2" />
        </div>
        <p className="text-4xl font-bold text-primary">{stat}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};
