
import { BusinessPlanResponse, fallbackData } from "@/types/businessPlan";

export async function fetchBusinessPlan(
  idea: string, 
  location: string, 
  webhookUrl: string,
  timeout: number = 35000 // Increased from 15000 to 35000 (20 seconds more)
): Promise<BusinessPlanResponse> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  console.log("Sending business plan request to:", webhookUrl);
  console.log("Request payload:", { idea, location });
  
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
    console.error("Business plan API error:", response.status);
    throw new Error(`Ошибка сервера: ${response.status}`);
  }

  const data = await response.json();
  console.log("Business plan response received:", data);
  return data;
}

export function getDefaultBusinessPlan(): BusinessPlanResponse {
  return fallbackData;
}
