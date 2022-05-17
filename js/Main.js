function recuperar_datos() { 
    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var nombre 
   
    if(user=="anna0"){
        alert('Tu nombre de usuario '+user +' es correcto');
        if(password=="white00"){
            alert('tu contraseña es correcta');
        }else{
            alert('tu contraseña es incorrecta');
        }
    }else if(user=="carol1"){
        alert('Tu nombre de usuario '+user +' es correcto');
        if(password=="orange01"){
            alert('tu contraseña es correcta');
        }else{
            alert('tu contraseña es incorrecta');
        }
    }else if(user=="julia2"){
        alert('Tu nombre de usuario '+user +' es correcto');
        if(password=="yellow02"){
            alert('tu contraseña es correcta');
        }else{
            alert('tu contraseña es incorrecta');
        }
    }else{
        alert('Tu nombre de usuario es incorrecto');
        nombre=false
        if(nombre==true){

        }else{
            alert('Tu contraseña es incorrecta');
        }
    }
    
}
