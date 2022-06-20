
	function run(){
		var reqBody={
			"username":document.getElementById("username"),
			"password":document.getElementById("password")
		}
		console.log("abcd")
		fetch("https://yournoteserver.herokuapp.com/users/login",{
			method:"POST",
			body:new URLSearchParams(reqBody),
			headers:{
				"Content-type":"application/x-www-form-urlencoded",
				'Access-Control-Request-Method':"POST",
				"Access-Control-Request-Headers":"origin",
				"Origin":"https://yournoteserver.herokuapp.com/"
			}
		}).then((response)=>{
			return response.json();
		}).then((user)=>{
			document.cookie=user.token;
		})
	}
