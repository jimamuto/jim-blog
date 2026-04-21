import PreviewFile from "@/app/components/PreviewFile";
import Link from "next/link";
import Image from "next/image";

export default function page (){
  return(
<main> 
  <h1 className="text-5xl font-bold">Jim's Developer Journey</h1>
  <p className="text-gray-500 text-3xl mb-8"> I am a He/him living in Nairobi Kenya and in this blog is w   here i express myself</p>
  <div className="flex gap-16 mb-10 justify-center">
    <Link href="/writing"> Start reading </Link>
  </div>
      <section>
      <h1>Featured Post</h1>
      <Image src="/featured.jpg" alt="featured post" width={24} height={24} />
        <p>feed post</p>
      </section>

      <section>
      <h1>Categories</h1></section>

      <section>
      <h1>About the author</h1></section>

      <section>
      <h1>Newsletter Signup</h1></section>

  </main>
);
}

