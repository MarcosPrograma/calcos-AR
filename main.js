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

let calcosData = {};
let idActual = 'efebo';

async function cargarCalcosData() {
    try {
        const response = await fetch('data/calcos.json');
        calcosData = await response.json();
        actualizarInfoPanel(idActual);
    } catch (error) {
        console.error("Error al cargar la información:", error);
    }
}

function actualizarInfoPanel(id) {
    const calco = calcosData[id];
    if (!calco) return;

    const tituloEl = document.getElementById("panel-titulo");
    const metaEl = document.getElementById("panel-meta");
    const contenidoContenedor = document.getElementById("panel-contenido");

    if (tituloEl) tituloEl.textContent = calco.titulo;

    if (metaEl) {
        metaEl.innerHTML = `
            ${calco.tecnica}<br>
            ${calco.dimensiones}<br>
            ${calco.ubicacion}<br>
            ${calco.autor}
        `;
    }

    if (contenidoContenedor && Array.isArray(calco.descripcion)) {
        contenidoContenedor.innerHTML = calco.descripcion
            .map(parrafo => `<p>${parrafo}</p>`)
            .join('');
    }
}


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

window.switchModel = (buttonElement, modelId) => {
    idActual = modelId;

    const modelo = modelos[modelId];
    if (modelo && modelViewer) {
        modelViewer.src = modelo.src;
        modelViewer.alt = modelo.alt;
        modelViewer.poster = modelo.poster || '';
    }

    actualizarInfoPanel(modelId);

    document.querySelectorAll('.slide').forEach(slide => slide.classList.remove('selected'));
    if (buttonElement) {
        buttonElement.classList.add('selected');
    }
};

if (modelViewer) {
    modelViewer.addEventListener('ar-status', (event) => {
        const estado = event.detail.status;
        if (estado === 'session-started') {
            console.log("Sesión AR iniciada");
        } else if (estado === 'object-placed') {
            console.log("El modelo ha sido anclado en escala 1:1");
        } else if (estado === 'not-presenting') {
            console.log("Se cerró la sesión AR");
        }
    });

    modelViewer.addEventListener('load', () => {
        const animaciones = modelViewer.availableAnimations;
        if (animaciones && animaciones.length > 0) {
            modelViewer.animationName = animaciones[0];
            modelViewer.play({ repetitions: 1 });
        }
    });
}

function switchScreen(screen) {
    let showViewer = screen === 'model-viewer' ? 'block' : 'none';
    if (modelViewer) modelViewer.style.display = showViewer;

    if (modelViewer && !modelViewer.canActivateAR) {
        console.warn("Este dispositivo o navegador no soporta sesiones de Realidad Aumentada.");
    }
}

modelViewer.addEventListener('load', () => {
    const animaciones = modelViewer.availableAnimations;
    if (animaciones.length === 0) return;

    modelViewer.animationName = animaciones[0];
    modelViewer.play({ repetitions: 1 });
});

document.addEventListener("DOMContentLoaded", () => {
    cargarCalcosData();

    const infoPanel = document.getElementById("info-panel");
    const infoOverlay = document.getElementById("info-overlay");
    const infoBtn = document.getElementById("info-button");
    const closeBtn = document.getElementById("close-panel");

    function openPanel() {
        actualizarInfoPanel(idActual);
        if (infoPanel) infoPanel.classList.add("visible");
        if (infoOverlay) infoOverlay.classList.add("visible");
    }

    function closePanel() {
        if (infoPanel) infoPanel.classList.remove("visible");
        if (infoOverlay) infoOverlay.classList.remove("visible");
    }

    if (infoBtn) infoBtn.addEventListener("click", openPanel);
    if (closeBtn) closeBtn.addEventListener("click", closePanel);
    if (infoOverlay) infoOverlay.addEventListener("click", closePanel);
});