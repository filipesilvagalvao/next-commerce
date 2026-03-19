import Product from "./components/Product"
import styles from "./page.module.css"
import type { ProductType } from "@/types/ProductType"

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products")

  if(!res.ok){
    throw new Error("Faled to fetch data")
  }

  return res.json()
}

export default async function Home() {
  const products = await getProducts()
  console.log(products)
  return (
    <div className={styles.page__container}>
      <div className={styles.page__grid}>
        {
          products.map((product:ProductType)=>(
            <Product product={product} key={product.id}/>
          ))
        }
      </div>
    </div>
  );
}
