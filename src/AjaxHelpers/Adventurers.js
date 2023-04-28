const registerNewAdventurer = async(firstName, lastName, username, password, confirmPassword, emailAddress, setter, classSetter, nav) =>{ 
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
    
    })
    .then(response =>response.json())
    .then(result => {
      setter(result.message);
      if(!result.error){
         classSetter('text-success');
         window.localStorage.setItem('advToken', result.token);
         window.localStorage.setItem('username', username);
         nav('/');
        }
      else classSetter('text-danger');
  }).catch(console.error)
};

export const loginAdventurer = (username, password, setter, classSetter, nav) =>{
  fetch(`api/login`,{
    method: "POST",
    headers:{
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  .then(response => response.json())
    .then(result => {
      setter(result.message);
      if(!result.error){
        classSetter('text-success');
        window.localStorage.setItem('advToken', result.token);
        window.localStorage.setItem('username', username);
        nav('/');
      }
      else classSetter('text-danger');
    }).catch(console.error);
};

export default registerNewAdventurer