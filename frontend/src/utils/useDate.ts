interface ReturnDate {
    date: {
      day: string;
      month: string;
      year: string;
      hours: string;
      minutes: string;
      raw: string; // ISO string em vez de Date
    };
  }
  
  const useDate = () => {
    // Função para formatar uma data em ReturnDate
    const formatDate = (date: Date): ReturnDate => {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Mês começa em 0
      const year = String(date.getFullYear());
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
  
      return {
        date: {
          day,
          month,
          year,
          hours,
          minutes,
          raw: date.toISOString(), // Converte para ISO string
        },
      };
    };
  
    // Retorna a data atual no formato ReturnDate
    const getCurrentDate = (): ReturnDate => {
      const now = new Date();
      return formatDate(now);
    };
  
    // Converte uma string ISO para o formato ReturnDate
    const convertDateFromISO = (isoString: string): ReturnDate => {
      const date = new Date(isoString);
      return formatDate(date);
    };
  
    // Converte ReturnDate para string para salvar no banco
    const formatDateString = (date: ReturnDate): string => {
      const { year, month, day, hours, minutes } = date.date;
      return `${day}/${month}/${year} - ${hours}:${minutes}`;
    };
  
    return {
      getCurrentDate,
      convertDate: convertDateFromISO,
      visualDate: formatDateString,
    };
  };
  
  export default useDate;
  