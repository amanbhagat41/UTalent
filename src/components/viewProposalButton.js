import React from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button";
function viewProposalButton({bid, index}) {
  return (
   
    <Button
        className={`m-auto w-full bg-error-red hover:bg-error-darkRed`}
    >
        View Proposal
    </Button>
  )
}
export {viewProposalButton};
