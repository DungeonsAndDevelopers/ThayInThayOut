
const fetchAdventurerCart = async(adventurerId, setter) =>{
  try{
    const response = await fetch(`/api/cart/${adventurerId}`);
    const result =  await response.json();
    console.log(response);
    setter(result.cart);
  }catch(err){
    throw err
  }
}