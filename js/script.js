function validarForm(){

    var valorCampoNombres = document.getElementById('first_name').value; 
    var valorCampoApellidos = document.getElementById('last_name').value;
    var valorCampoEmail = document.getElementById('email').value;

    if (valorCampoNombres == null || valorCampoNombres.length == 0 || /^\s+$/.test(valorCampoNombres)){
        alert("[ERROR] Por favor diligencie todos los campos.");
        return false;
    }
    else if (valorCampoApellidos == null || valorCampoApellidos.length == 0 || /^\s+$/.test(valorCampoApellidos)){
        alert("[ERROR] Por favor diligencie todos los campos.");
        return false;
    }
    else if (valorCampoEmail == null || valorCampoEmail.length == 0 || /^\s+$/.test(valorCampoEmail)){
        alert("[ERROR] Por favor diligencie todos los campos.");
        return false;
    }
    else{
        alert("¡ENHORABUENA! Pronto estaremos en contacto con usted.");
        return true;
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var elem = document.querySelector('.collapsible.expandable');
    var instance = M.Collapsible.init(elem, {
        accordion: false
    });
});

  


  

