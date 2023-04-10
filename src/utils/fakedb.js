const addToDb = id =>{
    let shoppingCart = {}
    const storedCart = localStorage.getItem('shoppingCart')
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }

    const quantity = shoppingCart[id]

    if(quantity){
        const newQuantity = quantity + 1
        shoppingCart[id] = newQuantity

    }
    else{
        shoppingCart[id] =1
    }
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
}

const getStoredCart = () =>{
    let shoppingCart ={}

    const storedCart = localStorage.getItem('shoppingCart')
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
}
export {addToDb, getStoredCart}