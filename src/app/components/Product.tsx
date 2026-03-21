import { ProductType } from "@/types/ProductType"
import styles from "./Product.module.css"
import Image from "next/image"


type ProductProps = {
    product: ProductType
}

function Product({ product }: ProductProps) {
    return (
        <article className={styles.product}>
            <figure className={styles.product__img}>
               <Image src={product.image} alt={product.title} fill style={{ objectFit: "cover" }}/>
            </figure>
            <div className={styles.product__info}>
                <p className={styles.product__title}>{product.title}</p>
                <p className={styles.product__price}>{product.price}</p>
            </div>
            <button>Adicionar ao carrinho</button>
        </article>
    )
}

export default Product