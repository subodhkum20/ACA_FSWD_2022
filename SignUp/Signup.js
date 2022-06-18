
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise.then( response => {
  const jsonPromise = response.json();
  jsonPromise.then( json => {
    console.log(json[0].name);
  });
});
var reqBody = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value,
    firstName: document.getElementById('FirstName').value,
    lastName: document.getElementById('LastName').value
}
res.statusCode=401;
res.setHeader('Content-Type', 'application/json');
res.send({err:'try a different username'});
res.statusCode=500;
res.setHeader('Content-Type', 'application/json');
res.send({err:"username and password required"})
res.statusCode=200;
res.setHeader('Content-Type', 'application/json');
res.send(user);
