const url =  'https://go-wash-api.onrender.com/api/login'
async function login(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if(!email){
        alert('Você deve colocar o email de usuario.')
        return
    }
    if(!password){
        alert('Você deve colocar a senha de usuario.')
        return
    }

    let api = await fetch(url,{
        method:"POST",
        body:JSON.stringify({

                "email":email,
                "password":password,
                "user_type_id":1,
                  
        }),
        headers:{
            'Content-Type':'application/json'
        }    
        
    })

    
    if(api.ok){
        let resposta = await api.json();
        localStorage.setItem("user", resposta.access_token)
        console.log(resposta)
        alert("Login com sucesso");
        window.location.href = 'home.html';
    }
    let respostaErro = await api.json();
        alert(respostaErro.data.errors);
}
