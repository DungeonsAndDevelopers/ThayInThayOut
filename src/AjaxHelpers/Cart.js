import jwt_decode from 'jwt-decode';


const fetchAdventurerCart = async(username, setter) =>{
  try{
    const response = await fetch(`/api/cart/${username}`);
    const result =  await response.json();
    const adjustedCart = [];
    adjustedCart.push(result.cart[0]);
    for(let i = 1; i < result.cart.length; i++){
      if(adjustedCart[adjustedCart.length-1] && result.cart[i].name ===  adjustedCart[adjustedCart.length-1].name){
        adjustedCart[adjustedCart.length-1].quantity++;
      }
      else{
        adjustedCart.push(result.cart[i])
      }
    }
    setter(adjustedCart);
  }catch(err){
    throw err
  }
};

export const ajaxAddItemToCart = async(spellId) =>{
  try{
    const decodedToken = await jwt_decode(window.localStorage.getItem('advToken'));
    const adventurerId = decodedToken.id;
    const response = await fetch(`/api/cart/addToCart/${adventurerId}`,{
      method: "POST",
      headers:{
        "content-type": 'application/json'
      },
      body: JSON.stringify({
        spellId
      })
    })
    const result = await response.json();
    console.log(result)
  }catch(err){
    throw err
  }
}

export const ajaxRemoveItemFromCart = async(cartId) => {
  const decodedToken = await jwt_decode(window.localStorage.getItem('advToken'));
    const adventurerId = decodedToken.id;
  const response = await fetch(`/inactiveCart/${adventurerId}`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      cartId
    })
  })
  const result = await response.json();
  console.log(result);

}

export default fetchAdventurerCart;