import logo from '../assets/logo.jpeg';

//todo: re-do kkkk literalmente, refazer tudo e passar pra typescript

const maxImgs = 11;

// Objeto para armazenar os pares chave-valor de imagens
const ImgsMap = {};

// Preencher o objeto com os caminhos das imagens
for (let i = 1; i <= maxImgs; i++) {
  ImgsMap[i.toString()] = require(`../assets/${i}.jpeg`).default; // Importação dinâmica usando require().default
}

// Exemplo de uso
console.log(ImgsMap);

// Adicionar manualmente um novo par chave-valor
ImgsMap['logo'] = logo; // Importação direta da imagem de logo
ImgsMap['default'] = '../assets/1.jpeg'

// Exemplo de uso após adicionar manualmente
console.log(ImgsMap);

const imageResolve = (img) => {
  return ImgsMap[img] ? ImgsMap[img] : ImgsMap['default'];
};

export default imageResolve;