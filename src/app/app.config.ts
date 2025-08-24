import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCzKbnUyumukQvpPYCCxeHa5WjeVCtL808",
  authDomain: "karlinoscipo.firebaseapp.com",
  projectId: "karlinoscipo",
  storageBucket: "karlinoscipo.firebasestorage.app",
  messagingSenderId: "1004822237914",
  appId: "1:1004822237914:web:a252150a8bffbae6bd0be3",
  measurementId: "G-MPQ0N0GLZV"
};


export const appConfig: ApplicationConfig = {
  /* Inicializa Firestore */
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp(firebaseConfig)),
     provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())]
};