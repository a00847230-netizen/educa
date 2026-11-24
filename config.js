// Configuración de Educa.
// Mientras "firebase" esté vacío, la app funciona en modo demo:
// las cuentas se guardan solo en el navegador y el Tutor IA no se activa.
// Pega aquí la configuración web de tu proyecto de Firebase
// (Consola de Firebase > Configuración del proyecto > Tus apps > Web).
window.EDUCA_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },
  // Ruta de la función del Tutor IA. Déjala así si publicas en Vercel.
  aiEndpoint: "/api/ai",
  // Voz natural con IA para el audio en inglés. Requiere Firebase y
  // la variable OPENAI_API_KEY en Vercel. Con false usa la mejor voz del dispositivo.
  neuralVoice: false,
  // Código para crear cuentas de coordinador solo en modo demo.
  // Con Firebase, el código real va en firestore.rules.
  demoCoordinatorCode: "EDUCA2026"
};
