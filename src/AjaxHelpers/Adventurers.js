const registerNewAdventurer = async(firstName, lastName, username, password, confirmPassword, emailAddress) =>{

 
  fetch(`/api/register/`,{
    method: "POST",
    headers:{
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      firstName,
      lastName, 
      username,
      password,
      confirmPassword,
      emailAddress
    })
    .then(response => response.json())
    .then(result => {
      console.log(result)
    })

  })
}

const loginAdventurer = (username, password) =>{
  fetch(`api/login`,{
    method: "POST",
    headers:{
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
    .then(response => response.json())
    .then(result => {
      console.log(result)
    })
  
  })
}