import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import {
    SignedIn,
    SignedOut,
    SignIn,
    SignInButton,
    UserButton,
    UserProfile,
} from "@clerk/nextjs";

const Navbar = () => {
    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            {" "}
            <MaxWidthWrapper>
                <div className="flex mx-3 h-14 items-center justify-between border-b border-zinc-200">
                    <Link href="/" className="flex z-40 font-semibold">
                        compy.
                    </Link>
                    {/* TODO: add mobile navbar */}

                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            <Link
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: "sm",
                                })}
                                href="/pricing"
                            >
                                Pricing
                            </Link>
                            <SignedIn>
                                <UserButton></UserButton>
                            </SignedIn>
                            <SignedOut>
                                <SignInButton>
                                    <button
                                        className={buttonVariants({
                                            size: "sm",
                                        })}
                                    >
                                        Get started <ArrowRight className="ml-1.5 h-5 w-5" />
                                    </button>
                                </SignInButton>
                            </SignedOut>

                            {/*               
              <RegisterLink
                className={buttonVariants({
                  size: "sm",
                })}
              >
                Get Started <ArrowRight className="ml-1.5 h-5 w-5" />
              </RegisterLink> */}
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
};

export default Navbar;
