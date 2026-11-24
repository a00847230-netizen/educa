# Educa · guía para publicarla

Educa es una página web. Cualquier persona la abre desde el navegador del celular o la computadora con un link, sin descargar nada.

## Qué hay en esta carpeta

- **index.html** es la app completa.
- **config.js** guarda la configuración de Firebase.
- **api/ai.js** es la función del servidor que conecta el Tutor IA con la API de Anthropic. La clave de la API se queda en el servidor y nunca llega al navegador.
- **firestore.rules** son las reglas de seguridad de la base de datos.

## Modo demo, para probar ya

Mientras config.js esté vacío, Educa funciona en modo de prueba. Las cuentas se guardan en el navegador y todo funciona menos el Tutor IA y la corrección con IA. El código de coordinador en modo demo es EDUCA2026.

Para la presentación, si algo falla con internet, el modo demo es tu respaldo. Crea antes algunas cuentas de alumno en el mismo navegador y haz unas lecciones, así el panel de coordinador muestra datos.

## Publicarla completa (unos 30 minutos)

### Firebase, para cuentas y base de datos (gratis)

1. Entra a console.firebase.google.com y crea un proyecto llamado educa. Puedes desactivar Google Analytics.
2. En Compilación > Authentication, toca Comenzar y activa Correo electrónico/contraseña.
3. En Compilación > Firestore Database, crea la base de datos en modo producción.
4. En la pestaña Reglas de Firestore, borra lo que hay, pega el contenido de firestore.rules, cambia el código EDUCA-COORD-2026 por uno propio y publica.
5. En Configuración del proyecto (el engrane) > Tus apps, agrega una app web. Copia los valores de firebaseConfig y pégalos en config.js.

### Anthropic, para el Tutor IA (se paga por uso)

1. Entra a console.anthropic.com, crea una cuenta y agrega crédito. Con 5 dólares alcanza para cientos de conversaciones de prueba.
2. En API Keys crea una clave y guárdala.
3. En Limits pon un límite de gasto mensual para no llevarte sorpresas.

### Vercel, para publicar la página (gratis)

1. Crea una cuenta en vercel.com.
2. Sube la carpeta. La forma más fácil es subirla a un repositorio de GitHub e importarlo en vercel.com/new. También puedes abrir una terminal en la carpeta y escribir npx vercel.
3. En el proyecto de Vercel, entra a Settings > Environment Variables y agrega dos variables.
   - ANTHROPIC_API_KEY con tu clave de Anthropic.
   - FIREBASE_API_KEY con el apiKey de config.js.
4. Vuelve a desplegar (Deployments > Redeploy) para que tome las variables.
5. Copia el dominio que te da Vercel (por ejemplo educa.vercel.app). En Firebase, ve a Authentication > Configuración > Dominios autorizados y agrégalo.

¡Listo! Comparte el link.

## Voz natural con IA (opcional)

Educa elige la voz en inglés más natural del dispositivo, y cada alumno puede cambiarla en Mi cuenta. Para una voz todavía más natural, generada con IA, hacen falta tres cosas.

1. Una clave de la API de OpenAI (platform.openai.com), que se paga por uso.
2. La variable OPENAI_API_KEY en Vercel, junto a las otras dos.
3. Cambiar neuralVoice a true en config.js.

Funciona solo con Firebase configurado, porque cada audio se pide con la sesión del alumno.

## Cuentas de coordinador

En la pantalla de inicio toca Crear cuenta, elige Coordinador y escribe el código que pusiste en las reglas. El panel muestra a todos los alumnos con sus estadísticas, permite buscar y filtrar, ver el detalle de cada alumno y descargar un CSV para Excel.

## Costos

- Firebase es gratis en el plan Spark hasta 50,000 lecturas diarias.
- Vercel es gratis en el plan Hobby, pensado para proyectos personales y escolares.
- Anthropic cobra por uso. Una conversación con el tutor cuesta unos centavos de dólar. Cada alumno tiene un límite diario de 150 solicitudes a la IA, que puedes cambiar con la variable DAILY_LIMIT.

## Siguiente paso, las tiendas de apps

Esta misma página se puede convertir en app de Android y iPhone con Capacitor, sin rehacerla. Para publicar en Google Play se necesita una cuenta de desarrollador (25 dólares, pago único). Para App Store se necesita la cuenta de Apple Developer (99 dólares al año) y una Mac.
