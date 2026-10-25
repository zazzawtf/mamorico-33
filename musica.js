

const canciones = [
    {
        nombre: "Canción 1",
        archivo: "musica1.mp3",
        portada: "portada1.jpg"
    },
    {
        nombre: "Canción 2",
        archivo: "musica2.mp3",
        portada: "portada2.jpg"
    },
    {
        nombre: "Canción 3",
        archivo: "musica3.mp3",
        portada: "portada3.jpg"
    }
];



let actual = 0;

const audio = document.getElementById("audio");
const nombre = document.getElementById("nombre-cancion");
const portada = document.getElementById("portada");

audio.volume = 0.4;


function cargarCancion() {
    audio.src = canciones[actual].archivo;

    nombre.textContent = canciones[actual].nombre;

    portada.src = canciones[actual].portada;
}



function reproducir() {
    audio.play().catch(() => {
        console.log("El navegador bloqueó la reproducción automática.");
    });
}




function abrirMusica() {
    const reproductor = document.getElementById("reproductor");

    if (reproductor.style.display === "block") {
        reproductor.style.display = "none";
    } else {
        reproductor.style.display = "block";
    }
}




function pausar() {
    if (audio.paused) {
        reproducir();
    } else {
        audio.pause();
    }
}




function siguiente() {
    actual = (actual + 1) % canciones.length;

    cargarCancion();
    reproducir();
}



function anterior() {
    actual = (actual - 1 + canciones.length) % canciones.length;

    cargarCancion();
    reproducir();
}



function cambiarVolumen(valor) {
    audio.volume = valor / 100;
}



audio.addEventListener("play", function() {
    portada.classList.add("girando");
});

audio.addEventListener("pause", function() {
    portada.classList.remove("girando");
});




audio.addEventListener("ended", siguiente);




cargarCancion();

// Intentar reproducir automáticamente
reproducir();

// Si Chrome lo bloquea, intentar
// reproducir después del primer clic
document.addEventListener("click", function iniciar() {
    if (audio.paused) {
        reproducir();
    }

    document.removeEventListener("click", iniciar);
}, { once: true });