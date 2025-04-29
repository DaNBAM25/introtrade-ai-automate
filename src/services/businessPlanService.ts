
import { BusinessPlanResponse, fallbackData } from "@/types/businessPlan";

export async function fetchBusinessPlan(
  idea: string, 
  location: string, 
  webhookUrl: string,
  timeout: number = 15000
): Promise<BusinessPlanResponse> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ idea, location }),
    signal: controller.signal
  });

  clearTimeout(timeoutId);
  
  if (!response.ok) {
    throw new Error(`Ошибка сервера: ${response.status}`);
  }

  return await response.json();
}

export function getDefaultBusinessPlan(): BusinessPlanResponse {
  return fallbackData;
}
