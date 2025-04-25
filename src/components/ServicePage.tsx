
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { ContactFormModal } from "@/components/ContactFormModal";
import { LucideIcon } from "lucide-react";

interface ServicePageProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  benefits: string[];
  iconColor?: string;
  backgroundColor?: string;
}

export const ServicePage = ({
  title,
  description,
  icon: Icon,
  features,
  benefits,
  iconColor = "text-blue-500",
  backgroundColor = "bg-blue-50"
}: ServicePageProps) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <div className={`${backgroundColor} py-16`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-8">
            <div className={`p-4 rounded-full ${backgroundColor} mb-4`}>
              <Icon className={`h-16 w-16 ${iconColor}`} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">{title}</h1>
            <p className="text-xl text-center max-w-3xl">{description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className={`h-5 w-5 rounded-full ${backgroundColor} flex items-center justify-center`}>
                      <div className={`h-2 w-2 rounded-full ${iconColor.replace('text', 'bg')}`}></div>
                    </div>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Benefits</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className={`h-5 w-5 rounded-full ${backgroundColor} flex items-center justify-center`}>
                      <div className={`h-2 w-2 rounded-full ${iconColor.replace('text', 'bg')}`}></div>
                    </div>
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to implement {title.toLowerCase()}?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Our experts will analyze your business needs and offer a customized solution
            that perfectly fits your requirements and budget.
          </p>
          <Button size="lg" onClick={() => setIsContactModalOpen(true)}>
            Contact a specialist
          </Button>
        </div>
      </div>

      <ContactFormModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
        title={`Get a consultation on ${title}`}
        description="Leave your contact details and our specialist will contact you shortly with a personalized offer."
      />
    </div>
  );
};
