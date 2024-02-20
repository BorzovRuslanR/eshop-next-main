import MultipleItems from "@/features/carousel/MultipleItems";
import Catalog from "@/features/product/Catalog";
import { Suspense } from "react";


export default function Home() {

  const imageUrls = [
    "/1.jpeg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.png",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
  ];

  return (
    <>
      <MultipleItems imageUrls={imageUrls}/>
      <Suspense fallback='Loading...'>
        <Catalog/>
      </Suspense>
    </>
  );
}
