$(document).ready(function(){

    /*$("#entrar").on('click', function(event) {
        email = $("#email").val();
        password = $("#password").val();
        $.post("http://localhost:8080/v1/api/user",
        {
            "firstName": "Teste",
            "lastName": "Teste",
            "email": email,
            "password": password
        },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });*/
    
   $("#entrar").on('click', function(event) {

        event.preventDefault()

        email = $("#email").val();
        password = $("#password").val();

        if((!email || !password) || (email == '' && password == '')){
            alert("Email e/ou senha são obrigatorios")
            return false
        }

        jsonTeste = { 
            email: email, 
            password: password 
        }

        $.ajax({
            url:"http://localhost:8080/v1/api/auth",
            type:"POST",
            data:JSON.stringify(jsonTeste),
            contentType:"application/json",
            dataType:"json",
            accept: "application/json; charset=utf-8"
          }).done(function (data, status) {
            alert(data.result)
          })


    /*dados = ''
    $.post("http://localhost:8080/v1/api/auth",
    {
        "firstName": "Teste",
        "lastName": "Teste",
        "email" : email,
        "password" : password
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
        console.log(data)
        console.log(status)
        dados = data
    }).done(function(data, status) {
        alert( "second success" );
        alert("Data: " + data + "\nStatus: " + status);
      });
    alert(dados)
    
    alert("teste")
        /*$.post({
            url : 'http://localhost:8080/v1/api/auth',
            type : 'POST',
            data : {
                email: $("#email").val(),
                password : $("#password").val()
            },
            dataType:'json',
            success : function(data) {              
                alert('Data: '+data);
            },
            error : function(request, error)
            {
                alert("Request: "+JSON.stringify(request));
                alert(error)
            }
        });*/
    });

  });

  