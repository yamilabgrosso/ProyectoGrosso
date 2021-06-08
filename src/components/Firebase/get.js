import "firebase/firestore"
import { getFirestore } from "../Index"
import { Error500 } from "../Error 500/Error500"

export const getCollection = (collectionName) => {
  let data
  const db = getFirestore()
  const itemCollection = db.collection(collectionName)
  itemCollection
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.map((doc) => doc.data());
    })
    .catch((error) => <Error500/>)

  return data
}