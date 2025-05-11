// import Image from "next/image";
import Dummy from "@/Components/Home/Dummy";
// import Navbar from "@/Components/Shared/Navbar";
import HomeBanner from "@/Components/Home/HomeBanner";
import ScrollBox from "@/Components/Home/ScrollBox";
import DepartmentHeads from '@/Components/Home/DepartmentHeads'
import Introduction from "../Components/Home/Introduction";
// import Services from "@/Components/Home/Serveces"
import InfoSummery from "@/Components/Home/InfoSummery"
import Notice from "@/Components/Home/Notice"


export default function Home() {
  return (
    <div className="">
      <div className="relative w-full text-center">
        <div className="absolute bg-[rgba(0,0,0,0.3)] w-full top-0  z-10"></div>
        <div className="w-full">
          <HomeBanner />
        </div>
      </div>
      <ScrollBox />
      <DepartmentHeads/>
      <Introduction/>
      <InfoSummery/>
      <Notice/>
      <Dummy/>
    </div>
  );
}
