import Banner from "@/features/home/banner";
import TopCategory from "@/features/home/top-category";
// import BestSellers from "@/features/home/bestSellers";
import { containerClass } from "@/lib/variables";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <TopCategory />
      {/* <BestSellers /> */}
    </div>
  );
}
