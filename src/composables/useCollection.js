import {db} from "../firebase/config"
import { ref } from "vue";
import { collection, addDoc } from "firebase/firestore";


let useCollection=(_collection)=>{
    let error = ref(null);
    let addMessageDoc=async(_doc)=>{
        try {
           let col = collection(db,_collection);
           await addDoc(col,_doc);
        } catch (err) {
            error.value = "could not send the message";
            console.log(err.message);
        }
    };
    return {error,addMessageDoc};
};
export default useCollection;