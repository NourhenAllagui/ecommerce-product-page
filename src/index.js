

const photos = document.querySelector('#galerie_mini');
const titleSneaker = document.querySelector('.titleSneaker');
const prix = document.querySelector('.prix');
let lien = photos.getElementsByTagName('a');
const objet_photo = document.querySelector('#la_photo');
const moins = document.querySelector('.btnMoins');
const plus = document.querySelector('.btnPlus');
const num = document.querySelector('.num');
const shop = document.querySelector('.btn-shop');
const pannier = document.querySelector('.change');
const prixStr= prix.innerText.slice(1, prix.innerText.length);
shop.addEventListener('click', event => {
pannier.innerHTML = `
 <div class='divPannier'>
  <div class='contentDiv'>
  <div class='divImg'>
  <img src="${lien[0].hreflang}"/>
  </div>
  <div class='detail'>
  <div class='detailText'>
   <p>${titleSneaker.innerText}</p>
   <p>${prix.innerText} x ${num.innerText} <strong>$${prixStr * num.innerText}</strong></p>
   </div>
   <div class='deletePannier'>
  <button><img src='../images/icon-delete.svg'></button>
  </div>
  </div>
  </div>
  <div>
  <button class="btn-chekout">Checkout</button>
  </div>
 </div>
`;
console.log(titleSneaker);
})
moins.addEventListener('click', event => {
  if (num.innerText > 0) {
   num.innerText--; 
  }
})
plus.addEventListener('click', event => {
  num.innerText++;
})
for (let i = 0; i < lien.length; i++) {
  lien[i].addEventListener('click', () => {
    objet_photo.src = lien[i].hreflang;
    return false;
  })
  
}