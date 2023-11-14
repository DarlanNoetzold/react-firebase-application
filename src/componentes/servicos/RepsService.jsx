import { auth, db } from '../../firebaseConfig';
import { doc, addDoc, collection, query, onSnapshot, updateDoc, deleteDoc, where } from "firebase/firestore";

export const getRepsFirebase = async (setListaObjetos) => {
    try {
        const q = query(collection(db, 'reps'))
        onSnapshot(q, (querySnapshot) => {
            setListaObjetos(querySnapshot.docs.map(doc => ({
                id: doc.id,
                titulo: doc.data().titulo,
                desc: doc.data().desc,
                tipo: doc.data().tipo,
                url: doc.data().url,
                usuario: doc.data().usuario,
                email: doc.data().email,
                uid: doc.data().uid
            })))
        })
    } catch (err) {
        throw err;
    }
}

export const getRepsUIDFirebase = async (uid, setListaObjetos) => {
    try {
        const colRef = collection(db, "reps");
        const q = query(colRef, where("uid", "==", uid))
        onSnapshot(q, (querySnapshot) => {
            setListaObjetos(querySnapshot.docs.map(doc => ({
                id: doc.id,
                titulo: doc.data().titulo,
                desc: doc.data().desc,
                tipo: doc.data().tipo,
                url: doc.data().url,
                usuario: doc.data().usuario,
                email: doc.data().email,
                uid: doc.data().uid
            })))
        })
    } catch (err) {
        throw err;
    }
}

export const deletePostFirebase = async objeto => {
    try {
        const postDocRef = doc(db, 'reps', objeto.id)
        await deleteDoc(postDocRef);
    } catch (err) {
        throw err;
    }
}

export const addPostFirebase = async objeto => {
    try {
        let ret = await addDoc(collection(db, 'reps'),
            {
                titulo: objeto.titulo,
                desc: objeto.desc,
                tipo: objeto.tipo,
                url: objeto.url,
                uid: objeto.uid,
                usuario: objeto.usuario,
                email: objeto.email
            }).then(function (docRef) {
                objeto = { ...objeto, id: docRef.id };
                return objeto;
            });
        return ret;
    } catch (err) {
        throw err;
    }
}

export const updatePostFirebase = async objeto => {
    try {
        const postDocRef = doc(db, 'reps', objeto.id)
        await updateDoc(postDocRef, {
            titulo: objeto.titulo,
            desc: objeto.desc,
            tipo: objeto.tipo,
            url: objeto.url,
            uid: objeto.uid,
            usuario: objeto.usuario,
            email: objeto.email
        })
    } catch (err) {
        throw err;
    }
}



