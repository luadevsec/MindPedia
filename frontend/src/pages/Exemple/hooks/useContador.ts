import { useState } from 'react';

export function useContador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador((prev) => prev + 1);
  const decrementar = () => setContador((prev) => Math.max(prev - 1, 0));

  return { contador, incrementar, decrementar };
}
