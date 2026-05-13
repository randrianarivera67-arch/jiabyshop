// ══ FIREBASE CONFIG ══════════════════════════════════
const firebaseConfig = {
  apiKey: "AIzaSyBIgfZKdpkYaJ2Vd0olgxTqFDiWuA4jmyQ",
  authDomain: "jiabyshop.firebaseapp.com",
  projectId: "jiabyshop",
  storageBucket: "jiabyshop.firebasestorage.app",
  messagingSenderId: "263859368911",
  appId: "1:263859368911:web:50d576c4a9fa5e0a2998ba"
};

// ══ FIRESTORE RULES (copy any Firebase console) ══════
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /boutiques/{id} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && 
        (request.auth.uid == resource.data.ownerId ||
         request.auth.token.email == 'randrianarivera67@gmail.com');
    }
    match /produits/{id} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null &&
        (request.auth.uid == resource.data.ownerId ||
         request.auth.token.email == 'randrianarivera67@gmail.com');
    }
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
    match /admin/{id} {
      allow read, write: if request.auth != null &&
        request.auth.token.email == 'randrianarivera67@gmail.com';
    }
  }
}
*/
