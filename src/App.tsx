import { useEffect, useState } from "react";
import { listarOcorrencias, type Ocorrencia } from "./api";

export default function App() {
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    listarOcorrencias()
      .then(setOcorrencias)
      .catch((e) => setErro(e.message))
      .finally(() => setCarregando(false));
  }, []);

  if (carregando) return <p>Carregando...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <main style={{ maxWidth: 640, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>Ocorrências</h1>
      <ul>
        {ocorrencias.map((o) => (
          <li key={o.id}>
            <strong>{o.rodovia}</strong> km {o.km}: {o.tipo}
            {o.descricao && ` (${o.descricao})`}
          </li>
        ))}
      </ul>
    </main>
  );
}