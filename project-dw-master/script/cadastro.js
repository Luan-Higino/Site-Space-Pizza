const url = "https://go-wash-api.onrender.com/api/user"
async function cadastro(){
    let nome = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let cpf_cnpj = document.getElementById('cpf_cnpj').value
    let birthday = document.getElementById('birthday').value
    let terms = document.getElementById('terms').checked


    if(!nome){
        alert('Você deve colocar o nome de usuario.')
        return
    }
    if(!email){
        alert('Você deve colocar o email de usuario.')
        return
    }
    if(!password){
        alert('Você deve colocar a senha de usuario.')
        return
    }
    if(!cpf_cnpj){
        alert('Você deve colocar o cpf_cnpj de usuario.')
        return
    }
    if(!birthday){
        alert('Você deve colocar a Data de nascimento de usuario.')
        return
    }
    if(!terms){
        alert('Você deve aceitar os termos para se cadastrar.')
        return
    }
    
    let api = await fetch(url,{
        method:"POST",
        body:JSON.stringify({

                "name":nome,
                "email":email,
                "user_type_id":1,
                "password": password,
                "cpf_cnpj": cpf_cnpj,
                "terms": 1,
                "birthday":birthday    
        }),
        headers:{
            'Content-Type':'application/json'
        }       
    })
    
    if(api.ok){
        let resposta = await api.json();
        console.log(resposta);
        alert(resposta.data);
        
        return 
    }
    let respostaErro = await api.json();
        alert(respostaErro.data.errors.cpf_cnpj)
}
