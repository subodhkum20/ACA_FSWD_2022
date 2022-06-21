const submitaction = document.querySelector('.submit').addEventListener('click', callSignUp);

function callSignUp () {
    const user = {
        username : document.querySelector('.username').value,
        password : document.querySelector('.password').value,
        firstName : document.querySelector('.firstName').value,
        lastName : document.querySelector('.lastName').value,
    }
    fetch('https://yournoteserver.herokuapp.com/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'origin',
            'Origin': 'https://yournoteserver.herokuapp.com/',
        },
        body: new URLSearchParams(user)
    })
        .then(response => {
            return response.json()
        })
        .then(response => {
            if (response.err == "try a different username"){
                //document.querySelector('.response').textContent = response.err;
                alert(response.err);
                document.querySelector('.response').textContent = '';
            }
            else if (response.err == "try different password"){
                //document.querySelector('.response').textContent = response.err;
                alert(response.err);
                document.querySelector('.response').textContent = '';
            }
            else if (response.err == "username and password required"){
                //document.querySelector('.response').textContent = response.err;
                alert(response.err);
                document.querySelector('.response').textContent = '';
            } 
            else {
                document.querySelector('.response').textContent = "Congratulations! You have signed up successfully!!";
            }
        })
}