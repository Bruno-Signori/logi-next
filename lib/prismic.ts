import Prismic from 'prismic-javascript';

export const apiEndPoint = "https://logitech.cdn.prismic.io/api/v2"

;
export const client = (req = null) => {
  // aqui estou verificando se estou recembendo a propriedade req, caso contrario seto como null;
  const options = req ? {req} : null;
  
  return Prismic.client(apiEndPoint, options)
};