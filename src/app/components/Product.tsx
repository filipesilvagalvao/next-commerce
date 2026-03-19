import { ProductType } from "@/types/ProductType"
import styles from "./Product.module.css"

type ProductProps = {
    product: ProductType
}

function Product({ product }: ProductProps) {
    return (
        <article className={styles.product}>
            <figure className={styles.product__img}>
               
            </figure>
            <div>{product.title}</div>
            <button>Adicionar ao carrinho</button>
        </article>
    )
}

export default Product