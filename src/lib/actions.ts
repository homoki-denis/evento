import { EventoEvent } from "./types";

export async function getEvents(city: string, page?: number): Promise<EventoEvent[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events?city=${city}&page=${page || 1}`,
    {
      next: {
        revalidate: 60, // Revalidate every minute
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  return response.json();
} 