"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ModeToggle } from "../toggle";
import { cn } from "@/lib/utils";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { db } from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Loader2 } from "lucide-react";
const components = [
    {
        title: "Alert Dialog",
        href: "google.com",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
];

function NavigationMenuStudentLoggedIn() {
    const [role, setRole] = useState(null);
    const [userUid, setUserUid] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const fetchUserRole = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                const userRef = doc(db, "users", uid);
                getDoc(userRef)
                    .then((docSnap) => {
                        if (docSnap.exists()) {
                            const userData = docSnap.data();
                            setRole(userData.role); // Set fetched data into userDetails
                        } else {
                            console.log("No such document!");
                        }
                    })
                    .catch((error) => {
                        console.log("Error getting document:", error);
                    });
            }
        });
        return () => fetchUserRole();
    }, []);
    useEffect(() => {
        const fetchUserUid = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                const userRef = doc(db, "users", uid);
                getDoc(userRef)
                    .then((docSnap) => {
                        if (docSnap.exists()) {
                            const userData = docSnap.data();
                            setUserUid(userData.uid); // Set fetched data into userDetails
                        } else {
                            console.log("No such document!");
                        }
                    })
                    .catch((error) => {
                        console.log("Error getting document:", error);
                    });
            }
        });
        return () => fetchUserUid();
    }, []);
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <ModeToggle></ModeToggle>
                </NavigationMenuItem>
                {role === null ? (
                    <div></div>
                ) : role === "Student" ? (
                    <NavigationMenuItem>
                        <Link href="/bidViewingStudent" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                BIDS
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ) : (
                    <NavigationMenuItem>
                        <Link
                            href="/jobViewingEmployer"
                            legacyBehavior
                            passHref
                        >
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                View Jobs
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                )}

                <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            ABOUT
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                {role === null ? (
                    <div></div>
                ) : role === "Student" ? (
                    <NavigationMenuItem>
                        <Link href="/userProfile" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                PROFILE
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ) : (
                    <NavigationMenuItem>
                        <Link href="/employerProfile" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                PROFILE
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                )}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                            className
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">
                            {title}
                        </div>
                        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            {children}
                        </p>
                    </a>
                </NavigationMenuLink>
            </li>
        );
    }
);
ListItem.displayName = "ListItem";
export { NavigationMenuStudentLoggedIn };
