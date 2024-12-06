import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCDZOC4rdlCsswDQ3HGw918hJsILDrGFm8",
  authDomain: "senai-auth-ae3a4.firebaseapp.com",
  projectId: "senai-auth-ae3a4",
  storageBucket: "senai-auth-ae3a4.firebasestorage.app",
  messagingSenderId: "807271285290",
  appId: "1:807271285290:web:cb543c13935ccf6115b953"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    // Não usa importProvidersFrom, mas agora passa diretamente os provedores
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ],
};
