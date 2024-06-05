import { cardComponent } from "../components/cardComponent.js";
import { products } from "../data/product.js";
// import { products } from "../data/products.json";

let renderArea = document.querySelector("#card-area");
const BASE_URL = "http://127.0.0.1:5500/data/products.json";

// products.filter(product=>product.category=="jewelery").map((product)=>{
//     renderArea.innerHTML += cardComponent(product);
//     console.log(product);
// })

// fetch(BASE_URL)
// .then((res) => res.json())
// .then((d)=> console.log(d))


fetch(BASE_URL).then((res)=> res.json()).then((data)=> {
  data.map(products => {
     renderArea.innerHTML += cardComponent(products);
   })
});
