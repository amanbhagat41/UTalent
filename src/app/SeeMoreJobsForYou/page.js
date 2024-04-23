"use client";
import { useState, useEffect  } from "react";import { TestingDemo } from '@/components/job-posting/jobPostCard';
import { ViewCandidates } from "@/components/job-posting/viewCandidatesCard";
import { NavigationMenuStudentLoggedIn } from "@/components/navbar/navloggedinStudent";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo-no-bg.png";
import { Label } from "@/components/ui/label"
import { getAuth, onAuthStateChanged} from "firebase/auth";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import { collection, getDocs, limit, orderBy ,query,doc, getDoc, where} from "firebase/firestore";
import { db } from "../../firebase";
import { NavigationMenuDemoFooter } from "@/components/navbar/navfooter";


export default function Page({params}) {
  const itemsPerPage = 5;
  const [freshJobs, setFreshJobs] = useState([]);
  const [popularJobs, setPopularJobs] = useState([])

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(itemsPerPage);
  const [pageIndex, setPageIndex] = useState(1);
  const [totalJobs, setTotalJobs] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [role, setRole] = useState(null);
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
  }, [auth]);
  useEffect(()=> {
    const fetchJobs = async () => {
      const q = query(collection(db, "jobPostings"), orderBy("postedDate", "desc"), limit(10))
      const jobDoc = await getDocs(q);
      const jobsData = []
      jobDoc.forEach((doc) => {
        jobsData.push(doc.data())
      })
      setFreshJobs(jobsData)
      setTotalJobs(jobsData.length)
    }
    fetchJobs()
  },[]);
  useEffect (()=> {
    setTotalPages(Math.ceil(totalJobs / itemsPerPage))
  })
//   useEffect(()=> {
//     const fetchUserIdOfBidder = async () => {
//       if (userUid) {
//         const q = query(collection(db, "bids"));
//         const jobDoc = await getDocs(q);
//         const jobsData = []
//         const jobsId = []
//         jobDoc.forEach((doc) => {
//           const docData = doc.data()
//           jobsId.push(docData.userId)
//           jobsData.push(doc.data())
          
//         })
//         setJobId(jobsId)
//         setJobPost(jobsData)
//       }
//     }
//     fetchUserIdOfBidder()
//   },[userUid]);
// useEffect(()=> {
//         const fetchUserInfo = async () => {
//           if (userUid && job.length > 0) {
//             const q = query(collection(db, "users"));
//             const jobDoc = await getDocs(q);
//             const jobsData = []
//             jobDoc.forEach((doc) => {
//               const docData = doc.data()
//               jobsData.push(docData)
//             })
//             setCandidate(jobsData)
//           }
//         }
//         fetchUserInfo()
//       },[userUid, job]);


  useEffect(() => {
    console.log(freshJobs);
  }, [freshJobs]);
  return (
    <>
    <div className="dark:bg-error-black">

    
      <div className="flex flex-col justify-between min-h-screen dark:bg-black">
        <nav className="bg-error-100 dark:bg-error-black h-20 sticky top-0 z-40 dark:bg-black">
          <div className="flex items-center justify-between h-full">
            <div>
            {role === null ? (
                                    <Link href="/" legacyBehavior passHref>
                                    <Image src={logo} width="150" height="150" alt="logo" className='cursor-pointer'></Image>
                                   </Link>
                                ) : role === "Student" ? (
                                  <Link href="/loggedinStudent" legacyBehavior passHref>
                                  <Image src={logo} width="150" height="150" alt="logo" className='cursor-pointer'></Image>
                                 </Link>
                                ) : (
                                  <Link href="/loggedInEmployer" legacyBehavior passHref>
                                  <Image src={logo} width="150" height="150" alt="logo" className='cursor-pointer'></Image>
                                 </Link>
                                )}
              
            </div>
            <div className="flex justify-end flex-grow">
              <NavigationMenuStudentLoggedIn />
            </div>
            <div className="w-10 h-10"></div>
          </div>
        </nav>

        
        <div className="container mx-auto px-4 py-8 mt-10 dark:bg-error-black">
          <Label htmlFor="filter" className="text-4xl underline">Jobs For You:</Label>
          <div id="filter" className="flex flex-wrap -mx-4 mt-10">
            {/*!-- Filter Column --*/}
            <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0 rounded-lg ">
              <div className="bg-white p-4 shadow-lg rounded-lg dark:bg-error-darkGray">
                <h2 className="font-bold text-lg mb-4">Filters</h2>
                {/*!-- Filters content here --*/}
              </div>
            </div>

            <div className="w-full md:w-3/4 px-4">
            
            <Pagination className="mb-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className={startIndex === 0 ? "pointer-events-none opacity-50" : undefined
                    }
                    onClick={() => {
                      setStartIndex(startIndex - itemsPerPage);
                      setEndIndex(endIndex - itemsPerPage);
                      setPageIndex(pageIndex - 1)
                      
                    }}
                  />
                </PaginationItem>
                <PaginationContent>
                  <PaginationItem>
                    {pageIndex} of {totalPages}
                  </PaginationItem>
                </PaginationContent>
                <PaginationItem>
                  <PaginationNext
                    className={pageIndex === totalPages ? "pointer-events-none opacity-50" : undefined
                    }
                    onClick={() => {
                      setStartIndex(startIndex + itemsPerPage);
                      setEndIndex(endIndex + itemsPerPage);
                      setPageIndex(pageIndex + 1)
                      
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
              {/*!-- Cards Container --*/}
              <div className="grid grid-cols-1 gap-y-9">
                <TestingDemo jobPosting={freshJobs} startIndex={startIndex} endIndex={endIndex}/>
              </div>
            </div>
          </div>
        </div>




        <footer className="h-20 w-full dark:bg-error-black bg-error-reallyDarkBlue">
          <div className="flex items-center justify-between h-full">
            <h4 className="text-3xl text-error-200 ml-8 font-extrabold">UTalent</h4>
            <div className="flex justify-end flex-grow mr-10">
              <NavigationMenuDemoFooter />
            </div>
          </div>
        </footer>
      </div>
      </div>
    </>
  );
}
