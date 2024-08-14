import { createContext, useState, useEffect } from 'react';
import Response from '../utils/api';

// 1. Criação do Contexto
const MyContext = createContext({
  userCard: [],
  loading: true
});

// 2. Criação do Provider
function MyProvider({ children} : any) {
  const [userCard, setCard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Response.get('/cardInfo').then((response : any) => {
      setCard(response);
      setLoading(false);
    }, (error : any) => {
      console.error(error);
      setLoading(false);
    });
  }, []); // Executa uma vez, ao montar o componente

  return (
    <MyContext.Provider value={{ userCard, loading }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;