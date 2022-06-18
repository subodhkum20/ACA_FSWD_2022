function e(){
    var reqBody={
     username: document.getElementById('Username').value,
     password:document.getElementById('Password').value,
     
    
    
    }
    
    
    
     e.preventDefault();
    
    
    
     fetch('https://yournoteserver.herokuapp.com/users/login',{
    
     method:'POST',
     body:new URLSearchParams(reqBody),
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'origin',
            'Origin': 'https://yournoteserver.herokuapp.com/',
        }
     
    
    
    
     }).then(function (response) {
    return response.text();
     }).then(function (text) {
    console.log(text);
     }).catch(function (error) {
    
     console.error(error);
     })
    
    }
