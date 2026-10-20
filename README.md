# Calcos en Realidad Aumentada 🏛️
_Experiencia de Realidad Aumentada (RA) desarrollada para el Área de Museo, Exposiciones y Conservación del Patrimonio de la Facultad de Artes de la Universidad Nacional de La Plata (FDA-UNLP). Permite visualizar modelos 3D de calcos escultóricos mediante tecnologías de RA, utilizando Google Scene Viewer (ARCore), WebXR y Apple AR Quick Look._

## Experiencia ⭐
La experiencia reúne seis modelos 3D de calcos en yeso y terracota pertenecientes a la colección del Área de Museo. Las piezas fueron seleccionadas por su condición incompleta, ya sea debido a accidentes históricos que provocaron su fragmentación o porque se conserva únicamente un busto perteneciente a una escultura o grupo escultórico.

Al ingresar, el usuario puede recorrer un carrusel de piezas, seleccionar una escultura y explorar su modelo 3D mediante un visor interactivo, que permite rotarlo y examinar sus características.

En los dispositivos compatibles, se habilita la opción de visualizar el modelo en Realidad Aumentada y a escala real, integrándolo en el entorno físico del usuario. La tecnología utilizada depende de las capacidades y la compatibilidad del dispositivo y del navegador. Si no se detecta una opción compatible, el usuario puede continuar explorando el modelo en el visor 3D web.

## Requisitos ⚙️
* **Google Scene Viewer (ARCore):** requiere un dispositivo Android compatible con ARCore, una versión compatible de Android y los Servicios de Google Play para RA instalados y actualizados.
* **WebXR:** permite acceder a experiencias de RA directamente desde el navegador. En Android, la compatibilidad depende del navegador, su versión y el dispositivo. En iOS, el soporte de WebXR para RA no está disponible de forma general en Safari, por lo que se recomienda utilizar una alternativa compatible, como AR Quick Look.
* **Apple AR Quick Look:** tecnología exclusiva de los dispositivos Apple compatibles. Permite visualizar modelos 3D en RA desde Safari y otros contextos compatibles en iOS y iPadOS. Requiere una versión compatible del sistema operativo y no funciona en Android.

## Configuración de Realidad Aumentada 🛠️
_La experiencia utiliza atributos de configuración del visor 3D web para controlar la visualización de los modelos, las interacciones y el comportamiento de la RA._

| Atributo | Descripción |
| :------- | :---: |
| ar   | Habilita la opción de visualizar el modelo en Realidad Aumentada. Si no está presente, el modelo se muestra únicamente en el visor 3D web. |
| ar-modes | Define las tecnologías de RA disponibles y su orden de prioridad: scene-viewer, webxr y quick-look. |   
        
        ar: Permite habilitar la opción de Realidad Aumentada (RA). Si no está presente, el modelo solo se verá en 3D dentro de la web.
        ar-modes: Definir qué tecnología de RA usar y en qué orden de prioridad. scene-viewer es Nativa de Google en Android. webxr es RA en Web. quick-look es Nativa de Apple.
        ar-placement="floor": Anclar en superficies horizontales.
        ar-scale="fixed": Evitar que el usuario cambie el tamaño del modelo pellizcando la pantalla.  
        ar-status="not-presenting": Reflejar estado actual de la sesión de RA.
        interaction-prompt="auto": Indicador de una mano moviéndose para el usuario. Puede interactuar con el modelo si no lo hace después de unos segundos.
        shadow-intensity="1": Controla la oscuridad de la sombra proyectada.
        camera-controls: Habilitar la interacción en la vista 3D de la web.  
        disable-zoom: Desactivar la capacidad de acercarse o alejarse del modelo en la vista web.  
        disable-pan: Evitar que el usuario desplace el modelo lateralmente o hacia arriba/abajo.
        skybox-height="2m": Definir la altura de la iluminación ambiental y el fondo.  
        min-camera-orbit y max-camera-orbit: Bloquea la cámara para que solo rote horizontalmente.
        bounds="tight": Ajusta el volumen de colisión al tamaño exacto del modelo. 
