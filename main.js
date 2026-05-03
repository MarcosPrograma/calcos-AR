const modelViewer = document.querySelector('#visor-ar');

modelViewer.addEventListener('ar-status', (event)=>{
    const status = event.detail.status;

    if (status === 'session-started'){
        console.log("ra iniciado");
    }
    else if (status === 'object-placed'){
        console.log("el modelo ha sido anclado");
    }
    else if (status === 'not-presenting'){
        console.log("se cerro la ra")
    }
});

function switchScreen(screen) {
    let showViewer  = screen == 'model-viewer' ? 'block' : 'none';
    modelViewer.style.display = showViewer;
    
    if(!modelViewer.canActivateAR) {
        console.warn("este dispositivo no aguanta realidad aumentada");
    }  
}