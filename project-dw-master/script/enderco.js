const url =  'https://go-wash-api.onrender.com/api/auth/address'
async function cadastrarend(){
    let title = document.getElementById('title').value;
    let cep = document.getElementById('cep').value;
    let address = document.getElementById('andress').value;
    let number = document.getElementById('number').value;
    let complement = document.getElementById('complement').value;
    
    if(!title){
        alert("Complete todos os campos para continuar")
        return
    }
    if(!cep){
        alert("Complete todos os campos para continuar")
        return
    }
    if(!address){
        alert("Complete todos os campos para continuar")
        return
    }
    if(!number){
        alert("Complete todos os campos para continuar")
        return
    }
    if(!complement){
        alert("Complete todos os campos para continuar")
        return
    }

    localStorage.getItem('user')
    let token = localStorage.getItem('user')
    let api = await fetch(url,{
        method:"POST",
        body:JSON.stringify({

                "title":title,
                "cep":cep,
                "address":address,
                "number":number,
                "complement":complement,
                "user_type_id":1,
                  
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        //body: JSON.stringify(data)  
    })
    
    if(api.ok){
        let resposta = await api.json();
        //localStorage.setItem("endereco", JSON.stringify(resposta))
        console.log(resposta)
        //alert(resposta.data);
        window.location.href = 'home.html';
    }
    let respostaErro = await api.json();
        alert(respostaErro.data.errors);
}