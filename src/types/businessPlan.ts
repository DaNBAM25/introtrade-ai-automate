
export interface BusinessPlanResponse {
  payback_period_months: number;
  monthly_revenue_estimate: number;
  startup_investment: number;
  business_plan: string;
  marketing_plan: string;
  market_analysis: string;
}

export const fallbackData: BusinessPlanResponse = {
  payback_period_months: 18,
  monthly_revenue_estimate: 5000,
  startup_investment: 25000,
  business_plan: "Это демонстрационный бизнес-план. Настоящие расчёты будут доступны после подключения к серверу. Пожалуйста, попробуйте позже или свяжитесь с нами для получения детальной консультации.",
  marketing_plan: "Демонстрационный план маркетинга. Для получения актуального плана, пожалуйста, попробуйте позже.",
  market_analysis: "Демонстрационный анализ рынка. Для получения актуального анализа, пожалуйста, попробуйте позже."
};
