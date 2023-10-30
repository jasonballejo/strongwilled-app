"use client";

import ClientsTable from "@/components/ClientsTable";
import TopSection from "@/components/TopSection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TestAPI from "@/components/TestAPI"

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <main>
        <TopSection />
        <ClientsTable />
        <TestAPI />
      </main>
    </QueryClientProvider>
  );
}
