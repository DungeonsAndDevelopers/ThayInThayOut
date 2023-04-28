
const fetchAdventurerCart = async(username, setter) =>{
  try{
    const response = await fetch(`/api/cart/${username}`);
    const result =  await response.json();
    setter(result.cart);
  }catch(err){
    throw err
  }
}

export default fetchAdventurerCart;