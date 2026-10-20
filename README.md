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

_Nota: la disponibilidad de cada modo de RA depende de la compatibilidad del dispositivo, el navegador y el formato del modelo 3D._

## Configuración de Realidad Aumentada 🛠️
_La experiencia utiliza atributos de configuración del visor 3D web para controlar la visualización de los modelos, las interacciones y el comportamiento de la RA._

| Atributo | Descripción |
| :------- | :---: |
| ar | Habilita la opción de visualizar el modelo en Realidad Aumentada. Si no está presente, el modelo se muestra únicamente en el visor 3D web. |
| ar-modes | Define las tecnologías de RA disponibles y su orden de prioridad: scene-viewer, webxr y quick-look. | 
| ar-placement="floor" | Establece el suelo como superficie de colocación del modelo en los modos compatibles. |
| ar-scale="fixed" | Mantiene fija la escala del modelo en los modos de RA compatibles, evitando que el usuario modifique su tamaño mediante gestos. |   
| ar-status="not-presenting" | Permite consultar el estado de la sesión de RA mediante el evento o mecanismo correspondiente de la biblioteca utilizada. |
| interaction-prompt="auto" | Muestra automáticamente una indicación visual para orientar al usuario sobre cómo interactuar con el modelo. |   
| shadow-intensity="1" | Controla la intensidad de las sombras proyectadas por el modelo. |
| skybox-height="2m" | Define la altura del entorno de iluminación y fondo utilizado por el visor. |   
        
## Controles de visualización 3D 👀

| Atributo | Descripción |
| :------- | :---: |
| camera-controls | Habilita la interacción con la cámara para explorar el modelo 3D desde distintos ángulos. |
| disable-zoom | Desactiva el acercamiento y alejamiento del modelo en el visor web. | 
| disable-pan | Desactiva el desplazamiento lateral o vertical del modelo en el visor web. |
| min-camera-orbit | Establece el límite mínimo de movimiento de la cámara. |   
| max-camera-orbit | Establece el límite máximo de movimiento de la cámara. |
| bounds="tight" | Ajusta los límites del modelo a su geometría para definir un volumen de interacción más preciso. |   

_**Consideraciones técnicas:** algunos atributos pertenecen a la biblioteca de visualización 3D utilizada y no a la API nativa de ARCore, WebXR o AR Quick Look. Su comportamiento puede variar según la implementación y el modo de visualización. Se recomienda verificar su compatibilidad con la versión de la biblioteca empleada._
