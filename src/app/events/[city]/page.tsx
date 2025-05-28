import EventsList from "@/components/events/EventsList";
import H1 from "@/components/ui/H1";
import React, { Suspense } from "react";
import Loading from "../loading";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";
import { z } from "zod";

interface PageProps {
  params: Promise<{
    city: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const city = resolvedParams.city;

  return {
    title: `${city === "all" ? "All events" : `Events in ${capitalize(city)}`}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const city = resolvedParams.city;
  const page = Number(resolvedSearchParams.page) || 1;
  const parsedPage = pageNumberSchema.safeParse(resolvedSearchParams.page);

  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }

  return (
    <main className="flex flex-col items-center py-24 px-[20px]">
      <H1 className="mb-28">
        {city === "all" ? "All Events" : `Events in ${capitalize(city)}`}
      </H1>

      <Suspense key={city + page} fallback={<Loading />}>
        <EventsList city={city} page={page} />
      </Suspense>
    </main>
  );
}
