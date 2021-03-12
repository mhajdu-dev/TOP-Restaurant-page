
function createH1() {
  const pageDiv = document.createElement('div');
  const h1Element = document.createElement('h1');
  const pElem = document.createElement('p');
  h1Element.innerHTML = 'Default Restaurant';
  let img = document.createElement('img');
  img.src = "https://media-cdn.tripadvisor.com/media/photo-s/11/fa/54/9c/cbd.jpg";
  pElem.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium aliquam magni eius magnam, ratione itaque modi omnis facilis aperiam nam iusto? Commodi ab, tenetur nobis assumenda tempore adipisci esse fuga.";
  pageDiv.appendChild(h1Element);
  pageDiv.appendChild(img);
  pageDiv.appendChild(pElem);
  return pageDiv;
}

export default createH1