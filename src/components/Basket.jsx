


export function Basket({orders, plus, minus, remove, removeAll}){

    const total = orders.reduce( (sum, el)  => sum + el.price*el.quantity, 0) 
    

    return <div className="Basket bg-slate-100 fixed top-2 right-2 z-10 min-w-[400px] min-h-[300px] max-h-[600px] snap-y shadow-md shadow-gray-700 p-4 overflow-y-auto" >
        {
            orders.map( order => <div key={order.id} className=" flex items-center space-x-4 shadow-md m-2">
                {/* <span className=" font-bold">{order.title}</span> */}
                <img src={order.image} className=" w-[32px] h-[32px]" alt={order.title} />
                <button className=" w-5 h-5 bg-red-600" onClick={()=> minus(order.id)}> - </button>
                <span> {order.quantity} </span>
                <button className="w-5 h-5 bg-green-600" onClick={()=> plus(order.id)}> + </button>
                <span> = </span>
                <span>{order.price * order.quantity}$</span>
                <button onClick={()=> remove(order.id)}> x </button>
            </div>)
        }
        <div>Total: {total.toFixed(2)}</div>
        <button onClick={removeAll} className="">REMOVE ALL</button>

        
    </div>
}