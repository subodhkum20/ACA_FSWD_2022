let submitaction = document.querySelector('.submit').addEventListener("click", callLogin);

function callLogin(){
    const form = {
        username: document.querySelector('.username').value,
        password: document.querySelector('.password').value,
    }
    fetch('https://yournoteserver.herokuapp.com/users/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'origin',
            'Origin': 'https://yournoteserver.herokuapp.com/',
        },
        body: new URLSearchParams(form)
    })
        .then(response => {
            return response.json();
        })
            .then(response => {
                if(response.err == "user not found"){
                    alert(response.err);
                }
                else if(response.err == "incorrect password"){
                    alert(response.err);
                }
                else if (response.success){
                    document.querySelector(".response").textContent = "You are a valid user!";
                }
            })
}


/*async function callLogin(){
    let response = await fetch('https://yournoteserver.herokuapp.com/users/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
        username: form.username.value,
        password: form.password.value,
    }),
    });

    let result = await response.json();
    if (result.statusCode == 401){
        result.setHeader('Content-Type', 'application/json');
        //result.send({err: "user not found"});
        alert("Error");
    }
    else if(result.statusCode = 401 && password.value != _id.password.value){
        result.setHeader('Content-Type', 'application/json');
        result.send({err: "incorrect password"})
    }
    else{
        let token = authenticate.getToken({_id:user._id})
        result.setHeader('Content-Type', 'application/json');
        result.send({success:true, token:token})
    }
}*/