const btn = document.querySelector('#submitbtn')
// realiza a ação do botão 
const header = document.querySelector('h1')
    btn.addEventListener("click", function(event){
    // recebe os dados do formulario
        event.preventDefault()
        // faz com que não possa ser deixado nada em branco
        const name = document.querySelector('#name').value
        const tel = document.querySelector('#telefone').value
        const mymail = document.querySelector('#mymail').value
        const birthdate = document.querySelector('#birthdate').value
        const city = document.querySelector('#cidade').value
        const est = document.querySelector('#estado').value
        const end = document.querySelector('#endereco').value
        const sexo = document.querySelector('input[name="genero"]:checked').value;
        
        
        console.log([name,tel,mymail,birthdate,sexo,city,est,end])
})