import Navbar from "@/components/Navbar";
import {
    cn,
    // constructMetadata
} from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

// import "react-loading-skeleton/dist/skeleton.css";
// import "simplebar-react/dist/simplebar.min.css";

// import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = constructMetadata();

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        //     <ClerkProvider>
        //   <html lang="en">
        //     <body>
        //       <main>
        //         {children}
        //       </main>
        //     </body>
        //   </html>
        // </ClerkProvider>
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
