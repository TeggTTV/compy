import Navbar from "@/components/Navbar";
import {
    cn,
    // constructMetadata
} from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy1eo2A-CbxIkgn7JjbGs27HHRpVOyAEM",
  authDomain: "compy-ai.firebaseapp.com",
  databaseURL: "https://compy-ai-default-rtdb.firebaseio.com",
  projectId: "compy-ai",
  storageBucket: "compy-ai.appspot.com",
  messagingSenderId: "305332799884",
  appId: "1:305332799884:web:13668632900ef02242eea9",
  measurementId: "G-W73MTDLBR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

function getItem(path: string): void {
    const dbRef = ref(db, path);
    get(dbRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

function setItem(path: string, data: any): void {
    set(ref(db, path), data);
}



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en" className="light">
                <body
                    className={cn(
                        "min-h-screen font-sans antialiased grainy",
                        inter.className
                    )}
                >
                    {/* <Toaster /> */}
                    {/* <header>
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </header> */}
                    <Navbar />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
