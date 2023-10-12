"use client";

import { useEffect } from "react";
import ClientsTable from "@/components/ClientsTable";
import TopSection from "@/components/TopSection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
const preline = require("preline");

export default function Home() {
  useEffect(() => {
    import(preline);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <main>
        <TopSection />
        <ClientsTable />
      </main>
    </QueryClientProvider>
  );
}
