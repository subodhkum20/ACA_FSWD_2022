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
                    document.querySelector('.response').textContent = '';
                }
                else if(response.err == "incorrect password"){
                    alert(response.err);
                    document.querySelector('.response').textContent = '';
                }
                else if (response.success){
                    document.querySelector(".response").textContent = "You are a valid user!";
                }
            })
}