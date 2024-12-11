import { Product } from "./Product"


export function Products({products, addToBasket}){




    return <div className="grid  gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-12">
          {
            products.map(product=><Product key={product.id} product={product} addToBasket={addToBasket}/>)
        }
    </div>
}