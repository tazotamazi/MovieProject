// /utils/auth.js
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth } from "./firebase";

export const loginUser = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in");
    } catch (error) {
        console.error(error);
    }
};

export const registerUser = async (email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User registered");
    } catch (error) {
        console.error(error);
    }
};

export const logoutUser = async () => {
    try {
        await signOut(auth);
        console.log("User logged out");
    } catch (error) {
        console.error(error);
    }
};
