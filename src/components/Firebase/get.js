
import { getFirestore } from "../Index"

export const getCollection = (collectionName) => {
  let data
  const db = getFirestore()
  const itemCollection = db.collection(collectionName)
  itemCollection
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.map((doc) => doc.data());
    })
    .catch((error) => console.log("Firestore error:", error))

  return data
}