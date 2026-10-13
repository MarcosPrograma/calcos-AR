Proyecto Calcos en Realidad Aumentada

        ar: Habilitar la capacidad de Realidad Aumentada. Si no está presente, el modelo solo se verá en 3D dentro de la web.
        ar-modes: Definir qué tecnología de RA usar y en qué orden de prioridad. scene-viewer -> Nativa de Google en Android. webxr -> RA en Web. quick-look -> Nativa de Apple
        ar-placement="floor": Anclar en superficies horizontales
        ar-scale="fixed": Evitar que el usuario cambie el tamaño del modelo pellizcando la pantalla.  
        ar-status="not-presenting": Reflejar estado actual de la sesión de RA.
        interaction-prompt="auto": Indicador de una mano moviéndose para el usuario: Puede interactuar con el modelo si no lo hace después de unos segundos.
        shadow-intensity="1": Controla la oscuridad de la sombra proyectada.
        camera-controls: Habilitar la interacción en la vista 3D de la web.  
        disable-zoom: Desactivar la capacidad de acercarse o alejarse del modelo en la vista web.  
        disable-pan: Evitar que el usuario desplace el modelo lateralmente o hacia arriba/abajo.
        skybox-height="2m": Definir la altura de la iluminación ambiental y el fondo.  
        min-camera-orbit y max-camera-orbit: Bloquea la cámara para que solo rote horizontalmente.
        bounds="tight": Ajusta el volumen de colisión al tamaño exacto del modelo. 
