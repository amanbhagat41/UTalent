import React from "react";
import { NavigationMenuDemo } from "@/components/navJobPostingEmployer";
import { NavigationMenuDemoFooter } from "@/components/navfooter";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo-no-bg.png";


export default function jobPostingEmployer() {
  return (
    <>
    <div className="flex flex-col h-[1662px]z dark:bg-error-black">{/*Header*/}
      <nav className="bg-error-100 h-20 sticky top-0 z-40 dark:bg-error-black">
        <div className="flex items-center justify-between h-full">
          <div>
            <Image src={logo} width="150" height="150" alt="logo"></Image>
          </div>
          <div className="flex justify-end flex-grow ">
            <NavigationMenuDemo />
          </div>
          <div className="w-10 h-10"></div>
        </div>
      </nav>

      <div className=" justify-left ml-64 mr-64"> {/*Body*/}
        <div>{/*Listing*/}
          <h1 className="flex font-bold text-5xl mt-5">Job Title</h1>
        </div>
        <div>
          <h3 className="flex text-[#4A4A4A] text-sm mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Sit amet tellus cras adipiscing enim eu turpis<br></br><br></br> egestas pretium. Scelerisque purus semper eget duis. Nunc congue nisi vitae suscipit tellus. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Scelerisque purus semper eget duis at tellus at urna condimentum. Ac odio tempor orci dapibus ultrices in iaculis. Ut consequat semper viverra nam libero justo laoreet sit amet. In egestas erat imperdiet sed euismod nisi. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Adipiscing tristique risus nec feugiat in fermentum posuere. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Vel pretium lectus quam id leo in vitae turpis. Id velit ut tortor pretium viverra suspendisse potenti nullam. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Arcu dictum varius duis at consectetur lorem donec. Sed vulputate odio ut enim blandit volutpat maecenas. Pretium lectus quam id leo in vitae turpis.Dictum varius duis at consectetur lorem donec massa sapien. Magnis dis parturient montes nascetur ridiculus mus mauris. Malesuada fames ac turpis egestas maecenas. At quis risus sed vulputate odio.<br></br><br></br> Quis risus sed vulputate odio. Nulla aliquet porttitor lacus luctus accumsan. Sociis natoque penatibus et magnis dis parturient. Mattis molestie a iaculis at erat pellentesque adipiscing. Lobortis mattis aliquam faucibus purus in massa tempor nec. Volutpat commodo sed egestas egestas fringilla. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Placerat vestibulum lectus mauris ultrices eros in cursus. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Sit amet est placerat in egestas erat imperdiet sed euismod. Orci dapibus ultrices in iaculis nunc sed. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Facilisi cras fermentum odio eu feugiat. Sagittis nisl rhoncus mattis rhoncus. </h3>
        </div>

        <div className="flex"> {/*Skills*/}
          <h3 className="flex font-bold text-[#013C5E] text-base mt-5 mr-2">Skills-</h3>
          <Button className='bg-[#013C5E] float-end rounded-3xl hover:bg-[#013C5E] cursor-default text-base h-12 font-bold mt-2 mr-2'>Skill</Button>
          <Button className='bg-[#013C5E] float-end rounded-3xl hover:bg-[#013C5E] cursor-default text-base h-12 font-bold mt-2 mr-2'>Skill</Button>
          <Button className='bg-[#013C5E] float-end rounded-3xl hover:bg-[#013C5E] cursor-default text-base h-12 font-bold mt-2 mr-2'>Skill</Button>
          <Button className='bg-[#013C5E] float-end rounded-3xl hover:bg-[#013C5E] cursor-default text-base h-12 font-bold mt-2 mr-2'>Skill</Button>
          <Button className='bg-[#013C5E] float-end rounded-3xl hover:bg-[#013C5E] cursor-default text-base h-12 font-bold mt-2 mr-2'>Skill</Button>
          <Button className='bg-[#013C5E] float-end rounded-3xl hover:bg-[#013C5E] cursor-default text-base h-12 font-bold mt-2 mr-2'>Skill</Button>
        </div>

        <div className="flex justify-center pt-5">
          <Link href="/student-employersignup" legacyBehavior passHref>
          <Button className='bg-error-300 rounded-3xl hover:bg-error-100 text-lg h-12 mt-8'>View Candidates</Button>
          </Link>
        </div>
      </div>


      <div>
        <footer className="bg-error-100 h-20 w-full stickey left-0 bottom-0 mt-24 dark:bg-error-black">{/*Footer*/}
        <div className="flex items-center justify-between h-full">
          <h4 className="text-2xl text-error-200 ml-8">UTalent</h4>
          {/* <h4 className="flex justify-end flex-grow"></h4> */}
          <div className="flex justify-end flex-grow mr-10  ">
          <NavigationMenuDemoFooter ></NavigationMenuDemoFooter>
          </div>
          </div>
        </footer>
      </div>
      </div>
      </>
  );
}