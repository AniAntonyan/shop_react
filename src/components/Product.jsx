import { useState } from "react"



export function Product({product, addToBasket}){


    const [flag ,setFlag] = useState(false);


    return <div className="product shadow-md p-4">
            <img className="w-100% h-80" src={product.image} alt={product.title} />
            <div className="font-bold">{product.title}</div>
            <div>
                {
                    product.description.length > 200 ? product.description.slice(0,200) + '...': product.description
                }
            </div>
            <div className=" text-green-500">{product.price}$</div>
            <div>
                <button className=" bg-gray-500 px-4 py-2 m-4" onClick={()=> setFlag(true)}>DETAIL</button>
                <button className=" bg-green-500 px-4 py-2  m-4" onClick={()=> addToBasket(product)}>ADD TO CARD </button>
            </div>    

            {
                flag && <div className="DetailProduct fixed top-0 right-0 bottom-0 left-0 bg-black/70 flex justify-center items-center flex-col">
                    <img className="w-100% h-80" src={product.image} alt={product.title} />
                    <div className="font-bold text-white italic text-3xl">{product.title}</div>
                    <div className="font-bold text-white italic text-3xl w-[70%] text-center"> {product.description}</div>
                    <div className="text-green">{product.price}</div>
                    <button className=" bg-green-500 px-4 py-2  m-4" onClick={()=> addToBasket(product)}>ADD TO CARD </button>
                    <button 
                        className=" absolute top-4 left-4 text-[70px] text-white"
                        onClick={()=> setFlag(false)}
                    >  X </button>
                </div>    
            }
              
    </div>
}