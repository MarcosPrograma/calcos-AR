const modelViewer = document.querySelector('#visor-ar');

const modelos = {
    'efebo': {
        src: 'assets/efebo.glb',
        alt: 'Efebo de subiaco',
        poster: 'assets/poster-efebo.webp'
    },
    'fauno': {
        src: 'assets/fauno.glb',
        alt: 'Sátiro danzante',
        poster: 'assets/poster-fauno.webp'
    },
    'luchadores': {
        src: 'assets/luchadores.glb',
        alt: 'Luchadores',
        poster: 'assets/poster-luchadores.webp'
    },
    'david': {
        src: 'assets/david.glb',
        alt: 'David',
        poster: ''
    },
    'antinoo': {
        src: 'assets/antinoo.glb',
        alt: 'Antinoo',
        poster: ''   
    },
    'ninoEspina': {
        src: 'assets/ninoEspina.glb',
        alt: 'Niño de la Espina',
        poster: ''   
    }
};

modelViewer.addEventListener('ar-status', (event) => {
    const estado = event.detail.status;

    if (estado === 'session-started') {
        console.log("ra iniciado");
    }
    else if (estado === 'object-placed') {
        console.log("el modelo ha sido anclado");
    }
    else if (estado === 'not-presenting') {
        console.log("se cerro la ra")
    }
});

window.switchModel = (element, name) => {
    const modelo = modelos[name];

    modelViewer.src = modelo.src;
    modelViewer.alt = modelo.alt;
    modelViewer.poster = modelo.poster;

    const slides = document.querySelectorAll(".slide");
    slides.forEach((el) => el.classList.remove("selected"));
    element.classList.add("selected");
};

function switchScreen(screen) {
    let showViewer = screen == 'model-viewer' ? 'block' : 'none';
    modelViewer.style.display = showViewer;

    if (!modelViewer.canActivateAR) {
        console.warn("este dispositivo no aguanta realidad aumentada");
    }
}

modelViewer.addEventListener('load', () => {
    const animaciones = modelViewer.availableAnimations;
    if (animaciones.length === 0) return;

    modelViewer.animationName = animaciones[0];
    modelViewer.play({ repetitions: 1 });
});
