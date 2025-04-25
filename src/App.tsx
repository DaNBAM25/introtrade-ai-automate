
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import AiConsultant from "./pages/AiConsultant";
import BusinessPlan from "./pages/BusinessPlan";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import AIBots from "./pages/AIBots";
import DataAnalysis from "./pages/DataAnalysis";
import AIProtection from "./pages/AIProtection";
import FinancialAnalysis from "./pages/FinancialAnalysis";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/ai-bots" element={<AIBots />} />
          <Route path="/solutions/data-analysis" element={<DataAnalysis />} />
          <Route path="/solutions/ai-protection" element={<AIProtection />} />
          <Route path="/solutions/financial-analysis" element={<FinancialAnalysis />} />
          <Route path="/ai-consultant" element={<AiConsultant />} />
          <Route path="/business-plan" element={<BusinessPlan />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
