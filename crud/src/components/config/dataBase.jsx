import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import {getStorage, ref, uploadBytes, getDownloadURL } from '@firebase/storage'
import {v4} from 'uuid'

const firebaseConfig = {
  apiKey: "AIzaSyAxldQJmT-0juyzp00p-NOucCuqHJzq4Go",
  authDomain: "crud-df96a.firebaseapp.com",
  projectId: "crud-df96a",
  storageBucket: "crud-df96a.appspot.com",
  messagingSenderId: "766533376673",
  appId: "1:766533376673:web:0e7b39e06778bc25022ee0"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)
export const storage = getStorage(app)


export const subirImagen = async(imagen) => {
  const uploadImg = ref(storage ,v4())
  await uploadBytes(uploadImg, imagen)
  const urlImg = await getDownloadURL(uploadImg)
  return urlImg 
}