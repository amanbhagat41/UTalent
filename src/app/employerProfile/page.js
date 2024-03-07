"use client";
import React, { useState, useEffect } from "react";
import Head from 'next/head';
import logo from "../../../public/images/logo-no-bg.png";
import {LoggedInUserProfileNav} from "@/components/loggedInUserProfileNav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { db, auth } from "../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {  collection, addDoc, doc, serverTimestamp, getDoc, updateDoc  } from "firebase/firestore";
import { onAuthStateChanged, getAuth, signOut, updateEmail } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast"
import { Timer } from "lucide-react";


export default function Page() {
    const { toast } = useToast()
    const MAX_WORDS = 100;
    const [image, setImage] = useState(null);
    const [profileImageUrl, setProfileImageUrl] = useState('https://github.com/shadcn.png'); // Default or placeholder image
    const router = useRouter();

    const auth = getAuth();
    const user = auth.currentUser;
    const [wordsRemaining, setWordsRemaining] = useState(100);
    const [userDetails, setUserDetails] = useState({
        uid: '', // Include uid for update operations
        email: "",
        bio: "",
        companyName: "",
        location: "",
        website: "",

    });
    const [formDetails, setFormDetails] = useState({
        email: "",
        bio: "",
        companyName: "",
        location: "",
        website: "",
    });
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                const userRef = doc(db, "users", uid);
                getDoc(userRef).then((docSnap) => {
                    if (docSnap.exists()) {
                        const userData = docSnap.data();
                        setUserDetails(userData); // Set fetched data into userDetails
                        setFormDetails(userData); // Also prefill formDetails with the same data
                    } else {
                        console.log("No such document!");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
            }
        });
        return () => unsubscribe();
    }, []);
    const fetchUserProfileImageUrl = async (userId) => {
        const userRef = doc(db, "users", userId);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
            const userData = docSnap.data();
            if (userData.profileImageUrl) {
                console.log(userData.profileImageUrl)
                setProfileImageUrl(userData.profileImageUrl);
            } else {
                // No profile image URL in database, use placeholder
                console.log("No profile image found in database.");
            }
        } else {
            console.log("No user document found.");
        }
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchUserProfileImageUrl(user.uid);
            } else {
                setProfileImageUrl('https://github.com/shadcn.png'); // Reset to default on logout
            }
        });
        return () => unsubscribe();
    }, []);
    
    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            const validTypes = ['image/jpeg', 'image/png'];
    
            // Check if the file type is valid
            if (!validTypes.includes(file.type)) {
                toast({
                    variant: "destructive",
                    title: "Only PNG and JPG images are allowed.",
                })
                return;
            }
    
            // Use FileReader to read the file
            const reader = new FileReader();
            reader.onloadend = (e) => {
                const img = new Image();
                img.onload = () => {
                    // Check if the image size is 512x512
                    if (img.width === 512 && img.height === 512) {
                        setImage(file);
                    } else {
                        toast({
                            variant: "destructive",
                            title: "Image must be 512px by 512px.",
                        })
                    }
                };
                img.onerror = () => {
                    toast({
                        variant: "destructive",
                        title: "There was an error loading the image.",
                    })
                };
                img.src = reader.result;
            };
            reader.onerror = () => {
                toast({
                    variant: "destructive",
                    title: "There was an error reading the file.",
                })
            };
            reader.readAsDataURL(file);
        }
    };
    
    const handleUpload = async () => {
        if (!image) return;
        const storage = getStorage();
        const storageRef = ref(storage, `profileImages/${user.uid}`); // Create a reference to 'profileImages/USER_ID'
        
        try {
            // Upload the file and metadata
            const snapshot = await uploadBytes(storageRef, image);
            
            // Get the URL of the uploaded file
            const url = await getDownloadURL(snapshot.ref);

            // Save the URL to Firestore under the user's document
            const userRef = doc(db, "users", user.uid);
            await updateDoc(userRef, {
            profileImageUrl: url,
            });
            setProfileImageUrl(url);
            toast({
                variant: "success",
                title: "Profile Picture Updated",
            })
            console.log('Uploaded a file!');
        } catch (error) {
            console.error("Error uploading image: ", error);
            toast({
                variant: "destructive",
                title: "Error uploading image",
            })
        }
    };
    const goBackToUserProfile = () => {
        
        
    }
    const handlePageChange = ()=> {
        const docRef = collection(db, "users");
        const userDocRef = doc(docRef, user.uid);
        getDoc(userDocRef).then((doc) => {
            const userData = doc.data();
            const role = userData.role;
            if (role === "Student") {
                router.push("/loggedinStudent");
            } else if (role === "Employer") {
                router.push("/loggedInEmployer");
            }
        })
        
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDetails({ ...formDetails, [name]: value });
    };
    

    const handleAboutMeChange = (e) => {
        const text = e.target.value;
        const words = text.trim().split(/\s+/).filter(Boolean);
        const numberOfWords = words.length;
    
        if (numberOfWords <= MAX_WORDS) {
            setFormDetails({ ...formDetails, bio: text });
            setWordsRemaining(MAX_WORDS - numberOfWords);
        } else {
            const trimmedText = words.slice(0, MAX_WORDS).join(' ');
            setFormDetails({ ...formDetails, bio: trimmedText });
            setWordsRemaining(0);
            console.log(`Maximum word count of ${MAX_WORDS} has been reached.`);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateDoc(doc(db, "users", userDetails.uid), formDetails); // Submit new values from formDetails
            setUserDetails(formDetails); // Update userDetails to reflect changes
            toast({
                variant: "success",
                title: "Profile Updated Successfully.",
            })
            console.log("Profile Updated Successfully.");
            // Optional: Redirect or perform additional actions here
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Profile Update Failed",
            })
            console.error("Error updating profile:", error);
        }
    };
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            router.push("/");
            toast({
                variant: "success",
                title: "Signed Out Successfully",
            })
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }
  return (
    <>
    <div className="dark:bg-error-black h-auto">
        <Head>
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
        </Head>
        <nav className="bg-error-100 h-[6vh] sticky top-0 z-40 dark:bg-error-black">
        
        <div className="flex items-center justify-between h-full">
          <div>
            <img src={logo} onClick={handlePageChange} width="150" height="150" alt="logo" style={{ cursor: 'pointer' }} />
          </div>
          <div className="flex justify-end flex-grow">
            <LoggedInUserProfileNav />
          </div>
          <div className="w-10 h-10"></div>
        </div>
        <div className="w-full h-screen dark:bg-error-black">
        <div className="grid grid-cols-2 h-full pt-12">
            <div className="w-full h-full flex items-start justify-center">
                <div className="flex items-center">
                    <div className="w-[35vw] h-[35vw]">
                    <Avatar className="w-[10vw] h-[10vw] m-auto mt-16">
                        <AvatarImage src={profileImageUrl} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="grid grid-flow-row auto-rows-max justify-items-center mt-9 ">
                        <h1 id="fullName" className="font-semibold text-[1.5vw]">
                            {userDetails.companyName}
                        </h1>
                        <h2 id="title" className="font-light mt-1 text-[1vw]">{userDetails.title}</h2>
                        <h3 id="location" className="font-normal mt-2 text-[1.2vw]">{userDetails.location}</h3>
                        <span id="bio" className="mt-4 text-center w-[20vw] h-[10vw] text-[.7vw] leading-relaxed">{userDetails.bio}</span>
                    </div>

                    </div>
                </div>
            </div>
            <div className="w-full h-full">
                <div className="flex items-center justify-start">
                        <div className="w-[35vw] h-[35vw]">
                        <Tabs defaultValue="basicInfo" className="w-[35vw] mt-12 dark:bg-error-black">
                            <TabsList className="grid w-full h-auto min-h-[1vw] grid-cols-2 dark:bg-error-black dark:border dark:border-error-white dark:active:bg-error-white">
                                <TabsTrigger className=" dark:bg-error-black dark:text-error-white text-[1vw] dark:focus:bg-error-white dark:focus:text-error-black dark:active:bg-error-white" value="basicInfo">Basic Info</TabsTrigger>
                                <TabsTrigger className=" dark:bg-error-black dark:text-error-white text-[1vw] dark:focus:bg-error-white dark:focus:text-error-black dark:active:bg-error-white" value="accountSettings">Account Settings</TabsTrigger>
                            </TabsList >
                                <TabsContent value="basicInfo">
                                <div className="grid grid-flow-row gap-[1vw]">
                                        <div className="grid grid-flow-col">
                                            <div>
                                                <Label className="uppercase text-[.5vw]" htmlFor="firstName">Company</Label>
                                                <h1 className = "text-[1.2vw]" id="firstName">{userDetails.companyName}</h1>
                                            </div>
                                        </div>
                                        <div>
                                            <Label className="uppercase text-[.5vw]" htmlFor="firstName">Website</Label>
                                            <h1 className = "text-[1.2vw]" id="firstName">{userDetails.website}</h1>
                                        </div>
                                        <div>
                                            <Label className="uppercase text-[.5vw]" htmlFor="email">Email</Label>
                                            <h1 className = "text-[1.2vw]" id="email">{userDetails.email}</h1>
                                        </div>
                                        <div>
                                            <Label className="uppercase text-[.5vw]" htmlFor="aboutMe">ABOUT US</Label>
                                            <p className = "text-[1vw]" id="aboutMe">{userDetails.bio}</p>
                                        </div>
                                        <div className="flex items-center justify-center w-full">
                                            <button type="button" onClick={handleLogout} className=" h-12 w-[50%] rounded-[12px] bg-error-red text-error-white">Sign Out</button>
                                        </div>
                                </div>
                                
                                </TabsContent>
                                <TabsContent className="dark:bg-error-black" value="accountSettings">
                                    <form onSubmit={handleSubmit} className="grid grid-flow-row gap-4 dark:bg-error-black">
                                        <div className="grid grid-cols-2 gap-5">   
                                            <div>   
                                                <Label htmlFor="editCompany">Company</Label>
                                                <Input name="companyName" className="border-2 border-error-black dark:bg-error-darkGray" value={formDetails.companyName} onChange={handleChange} />
                                            </div>
                                            <div>
                                                <Label htmlFor="editEmail">Email</Label>
                                                <Input name="email" className="border-2 border-error-black dark:bg-error-darkGray" type="email" value={formDetails.email} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 gap-5">
                                            <div>
                                                <Label htmlFor="editWebsite">Website</Label>
                                                <Input name="website" className="border-2 border-error-black dark:bg-error-darkGray" value={formDetails.website} onChange={handleChange} />
                                            </div>
                                        </div>
                                        
                                        <Label htmlFor="editLocation">Location</Label>
                                        <Input name="location" className="border-2 border-error-black dark:bg-error-darkGray" value={formDetails.location} onChange={handleChange} />

                                        <Label htmlFor="editAboutMe">
                                            About Me: ({wordsRemaining} words remaining)
                                        </Label>
                                        <textarea className="h-56 border-2 border-error-black dark:bg-error-darkGray pl-3" name="bio" value={formDetails.bio} onChange={handleAboutMeChange} />

                                        <Button type="submit" onClick={(goBackToUserProfile)}>Save Changes</Button>
                                    </form>
                                    <div className="grid grid-cols-1">
                                        <div className="mt-12">
                                            <input type="file" onChange={handleImageChange} />
                                            <button type="button" onClick={handleUpload} className="border-2 border-error-black h-12 w-[50%]rounded-[12px] dark:bg-error-white dark:text-error-black">Upload Image</button>
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      </nav>
      </div>
    </>
  );
}
