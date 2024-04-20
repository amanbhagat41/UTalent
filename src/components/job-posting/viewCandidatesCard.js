import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { collection, getDocs, query, doc, getDoc, where } from "firebase/firestore";
import { db } from "../../firebase";

export function ViewCandidates({ candidates, index, startIndex, endIndex, jobId }) {
  const [userData, setUserData] = useState([]);
  const [bids, getbidData] = useState([]);
  console.log(jobId)
  useEffect(() => {
    const fetchUserInfo = async (uid) => {
      const userDoc = await getDoc(doc(db, "users", uid));
      setUserData((prevUserData) => [...prevUserData, userDoc.data()]);
    };

    candidates.forEach((candidate) => {
      console.log(candidate.uid);
      fetchUserInfo(candidate.uid);
    });
  }, [candidates]);

  useEffect(() => {
    const fetchBids = async (userId, jobId) => {
      const bidsQuery = query(collection(db, "bids"), where("userId", "==", userId), where("jobId", "==", jobId));
      const bidsSnapshot = await getDocs(bidsQuery);
      const bidsData = bidsSnapshot.docs.map((doc) => doc.data());
      getbidData((prevBids) => [...prevBids, ...bidsData]);
    };

    candidates.forEach((candidate) => {
      fetchBids(candidate.uid, jobId);
    });
  }, [candidates, jobId]);

  return (
    <>
      {candidates.map((candidate, index) => {
        // Filter bids to only include bids for the current candidate
        const candidateBids = bids.filter(bid => bid.userId === candidate.uid && bid.jobId === jobId);

        return (
          <div key={index}>
            <Card
              className="w-full h-[300px] dark:text-error-white dark:bg-error-darkGray dark:border-1 dark:border-error-white bg-error-white hover:bg-error-hoveredGray transition duration-150 ease-in-out"
            >
              <div style={{ display: "flex", width: "100%" }}>
                <div style={{ flexBasis: "80%" }}>
                  <CardHeader>
                    <Link
                      href={`/viewProfile/${candidate.uid}`}
                      legacyBehavior
                      passHref
                    >
                      <CardTitle className="cursor-pointer">{candidate.firstName} {candidate.lastName}</CardTitle>
                    </Link>
                    <CardDescription>
                      {candidate.email}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-3"></p>
                    <h2 className=" font-bold text-lg">
                      Candidate Proposal:
                    </h2>
                    <h2>
                      <a className='line-clamp-5'>
                        {candidateBids.map((bid, index) => (
                          <div key={index}>
                            {bid.proposal}
                          </div>
                        ))}
                      </a>
                    </h2>
                  </CardContent>
                  <CardFooter className="grid grid-rows-2"></CardFooter>
                </div>
                <div style={{ flexBasis: "20%" }}>
                  <div className="grid grid-rows-4 h-[80%] items-center justify-center">
                    <div className="text-end text-2xl">
                    {candidateBids.map((bid, index) => (
                         <div key={index}>
                      <span className="ml-1 text-xl">
                        Bid Amount:
                       
                        {bid.bidAmount}
                        
                      </span>
                      </div>
                      ))}
                    </div>
                    <div className="text-end text-xl text-error-red">
                      {candidate.jobDaysToDeliver}
                      {candidateBids.map((bid, index) => (
                        <div key={index}>
                      <span className="ml-1 text-lg">
                        Days to Deliver:
                        {bid.daysToDeliver}
                      </span>
                      </div>
                       ))}
                    </div>

                    <div className="mt-4">
                      <Button
                        onClick={() => window.location = `mailto:${candidate.email}`}
                        className={`m-auto w-full bg-error-red hover:bg-error-darkRed`}
                      >
                        Message
                      </Button>
                      <div>
                      {candidateBids.map((bid, index) => (
                         <div key={index}>
                      <Link
                       href={`/bidProposal/${bid.bidId}`}
                        legacyBehavior
                        passHref
                      >
                        <Button
                          className={`m-auto w-full bg-error-red hover:bg-error-darkRed`}
                        >
                          View Proposal
                        </Button>
                      </Link>
                      </div>
                       ))}
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );
      })}
    </>
  );
}
