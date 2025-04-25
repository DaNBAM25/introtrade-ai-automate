
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

export const ServiceCard = ({ title, description, icon: Icon, link }: ServiceCardProps) => {
  return (
    <Card className="flex flex-col h-full transition-all hover:shadow-lg">
      <CardContent className="flex-1 pt-6">
        <div className="mb-4 flex justify-center">
          <div className="p-3 rounded-full bg-blue-50">
            <Icon className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
        <p className="text-muted-foreground text-center">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button asChild variant="outline">
          <Link to={link}>More details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
