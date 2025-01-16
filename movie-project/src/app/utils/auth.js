import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const token = await userCredential.user.getIdToken(); // Get the JWT
        return { token };
    } catch (error) {
        throw new Error(error.message);
    }
};
