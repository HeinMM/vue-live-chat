import { auth } from "../firebase/config";
import { ref } from "vue";
import { createUserWithEmailAndPassword, updateProfile,  } from '@firebase/auth';


    let error = ref("");
    let createAccount=async(userName,userEmail,userPassword)=>{
        try {
            const res =  await createUserWithEmailAndPassword(auth,userEmail,userPassword);
           if (!res) {
               throw new Error("could not create new user");
           }
           await updateProfile(res.user,{displayName:userName});
           return res;
        } catch (err) {
           error.value = err.message;
           
        }
    };
    let useSignup=()=>{
        return {error,createAccount};
    };

export default useSignup;