import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, update } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyALrzTNeDlSRwkftv18UaF0qQndDOkqMxo",
    authDomain: "lab-4-a25b6.firebaseapp.com",
    projectId: "lab-4-a25b6",
    storageBucket: "lab-4-a25b6.appspot.com",
    messagingSenderId: "190500599490",
    appId: "1:190500599490:web:61167371ce4823cac86d5b"
  };

const spApp = initializeApp(firebaseConfig);
const spDatabase = getDatabase(spApp);
const sDb = getDatabase();
const spDbRef = ref(sDb, '/shahryar');

export function spShowData(setBook) {
  onValue(spDbRef, (snapshot) => {
    const spUpdatedBook = [];
    snapshot.forEach((childSnapshot) => {
      const spChildKey = childSnapshot.key;
      const spChildData = childSnapshot.val();
      spUpdatedBook.push({
        id: spChildKey,
        name: spChildData.name,
        author: spChildData.author,
        coverPage: spChildData.coverPage,
        rating: spChildData.rating,
        summary: spChildData.summary,
        borrowed: spChildData.borrowed
      });
    });
    console.log("Fetched Data:", spUpdatedBook); 
    setBook(spUpdatedBook);
  });
}

