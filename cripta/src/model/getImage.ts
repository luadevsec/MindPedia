const getImage = (id: string) => {
    return require(`../assets/${id}.jpeg`).default;
  };
  
  export default getImage;
  