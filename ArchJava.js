//abrir o cerrar menu de iniciar sesion
const iconoUsuario = document.getElementById("iconoUsuario");
const submenu = document.getElementById("submenu");

iconoUsuario.addEventListener("click", function() {
    if (submenu.style.maxHeight=="400px") {
        submenu.style.maxHeight = null;
    } else {
        submenu.style.maxHeight = "400px";
    }
});

//iniciarsesion
const iniciarSesionBtn = document.getElementById("iniciarSesion");
const emailInput = document.querySelector(".email input");
const contrasenaInput = document.querySelector(".contraseña input");
const textoEmail = document.getElementById("TextoEmail");
const textoContraseña = document.getElementById("TextoContraseña");

iniciarSesionBtn.addEventListener("click", function(event) {
    const email = emailInput.value;
    const contrasena = contrasenaInput.value;

    if (email && contrasena) {
        emailInput.style.display = 'none';
        contrasenaInput.style.display = 'none';
        textoContraseña.style.display = "none";
        iniciarSesionBtn.style.display = "none";

        textoEmail.innerHTML = "Bienvenido " + email + " !";
    } else {
        alert("Usa un correo electrónico y contraseña validos.");
    }
});

//Carrito
const BotonComprarr = document.getElementById("BotonComprarr");
const TotalCar = document.getElementById("TotalCar");

BotonComprarr.addEventListener("click", function(event) {
    const email = emailInput.value;
    const contrasena = contrasenaInput.value;

    if (email && contrasena) {
        emailInput.style.display = 'none';
        contrasenaInput.style.display = 'none';
        textoContraseña.style.display = "none";
        iniciarSesionBtn.style.display = "none";

        textoEmail.innerHTML = "Bienvenido " + email + " !";
    } else {
        alert("Usa un correo electrónico y contraseña validos.");
    }

    
});

const pedidosIcono = document.getElementById("ImgCarrito");
const ContCarrito = document.getElementById("ContCari");

pedidosIcono.addEventListener("click", function() {
    if (ContCarrito.style.maxHeight=="400px") {
        ContCarrito.style.maxHeight = null;
    } else {
        ContCarrito.style.maxHeight = "400px";
    }
});
