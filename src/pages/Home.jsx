import { useEffect, useState } from "react"
import { Basket } from "../components/Basket";
import {Products} from "../components/Products";


export function HomePage(){
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [showBasket, setShowBasket] = useState(false);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                console.log(json);
                setProducts(json);
            })
    },[]);


    const addToBasket = (product) =>{
        const index = orders.findIndex(el=> el.id === product.id);
        if(index === -1){
            const newOrder = {
                ...product,
                quantity: 1
            };
            setOrders([...orders, newOrder])
        }
        else{
            const newOrders = orders.map((el,i)=>{
                if(i === index) el.quantity = el.quantity+1;
                return el;
            })
            setOrders(newOrders);
        }
    }


    const plus = (id) => {
        const newOrders = orders.map(el=>{
            if(el.id === id) el.quantity = el.quantity+1;
            return el;
        });

        setOrders(newOrders);
    }

    const minus = (id) => {
        const newOrders = orders.map(el=>{
            if(el.id === id) el.quantity = el.quantity>0 ? el.quantity-1: 0;
            return el;
        });

        setOrders(newOrders);
    }

    const remove = (id) =>{
        const newOrders = orders.filter(el=> el.id !== id);
        setOrders(newOrders);
    }

    const removeAll = ()=>{
        setOrders([]);
    }

    return <div className="HomePage container mx-auto" >
        <button onClick={()=> setShowBasket(!showBasket)} className="z-20 bg-red-700 fixed top-2 right-2"> CART </button>
        { showBasket && <Basket orders={orders} plus={plus} minus={minus} remove={remove} removeAll={removeAll} /> }
      <Products products={products} addToBasket={addToBasket} />
</div>
}