import { collection } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const newsletterCollection = collection(db, "newsletter_subscribers");
