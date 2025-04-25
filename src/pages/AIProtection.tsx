
import { ServicePage } from "@/components/ServicePage";
import { Shield } from "lucide-react";

const AIProtection = () => {
  return (
    <ServicePage
      title="Protection Against AI Attacks"
      description="Safeguard your AI systems and data with cutting-edge protection against sophisticated AI-powered cyber threats and vulnerabilities."
      icon={Shield}
      iconColor="text-emerald-600"
      backgroundColor="bg-emerald-50"
      features={[
        "LLM injection attack prevention and detection",
        "Data leak protection specialized for AI systems",
        "Advanced prompt engineering security measures",
        "AI model security assessment and hardening",
        "Comprehensive AI security policies implementation",
        "Real-time monitoring of AI system vulnerabilities"
      ]}
      benefits={[
        "Prevent malicious actors from exploiting your AI systems",
        "Protect sensitive data from extraction through AI manipulation",
        "Maintain regulatory compliance with AI security standards",
        "Build customer trust with secure AI implementations",
        "Reduce risk of reputational damage from AI security incidents",
        "Stay ahead of emerging AI-specific threat vectors"
      ]}
    />
  );
};

export default AIProtection;
