import { Client } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

const CLIENTS_QK = "CLIENTS";

const fetchClients = async (): Promise<Client[]> => {
  const response = await fetch("/api/clients");
  return response.json();
};

export default function useClients() {
  return useQuery({
    queryKey: [CLIENTS_QK],
    queryFn: fetchClients,
  });
}
