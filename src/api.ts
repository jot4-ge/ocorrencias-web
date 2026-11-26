export type Ocorrencia = {
  id: number;
  rodovia: string;
  tipo: "acidente" | "buraco" | "alagamento" | "obstrucao";
  km: number;
  descricao: string | null;
};

const BASE_URL = import.meta.env.VITE_API_URL ?? "http://127.0.0.1:8000";

export async function listarOcorrencias(): Promise<Ocorrencia[]> {
  const resp = await fetch(`${BASE_URL}/ocorrencias`);
  if (!resp.ok) throw new Error(`Erro ${resp.status}`);
  return resp.json();
}