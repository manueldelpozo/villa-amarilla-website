import admin from 'firebase-admin';
import serviceAccount from '../serviceAccountKey.json' assert { type: "json" }; // Adjust path for your project structure

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // Optional: databaseURL if you're using Realtime Database
    // databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com"
});

export const dbAdmin = admin.firestore(); // Use a distinct name to avoid confusion with FE 'db'
export const authAdmin = admin.auth();
// ... export other admin services