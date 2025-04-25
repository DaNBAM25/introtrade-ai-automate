
import { ServicePage } from "@/components/ServicePage";
import { Bot } from "lucide-react";

const AIBots = () => {
  return (
    <ServicePage
      title="AI Bots for Automation"
      description="Deploy intelligent bots that automate routine tasks, provide 24/7 customer support, and process applications with unprecedented efficiency."
      icon={Bot}
      iconColor="text-blue-600"
      backgroundColor="bg-blue-50"
      features={[
        "Conversational chatbots with natural language processing capabilities",
        "Voice assistants for hands-free operation and accessibility",
        "Automated application processing and document handling",
        "Multi-language support for global businesses",
        "Integration with existing business systems and workflows",
        "Custom AI training on your business-specific data"
      ]}
      benefits={[
        "Reduce support load by up to 70% by automating routine inquiries",
        "24/7 availability with no staff burnout or overtime costs",
        "Consistent customer experience across all interactions",
        "Faster response times leading to improved customer satisfaction",
        "Reduced operational costs and increased staff productivity",
        "Detailed analytics on customer interactions and pain points"
      ]}
    />
  );
};

export default AIBots;
