import PreviewFile from "@/app/components/PreviewFile";
import Link from "next/link";
import Image from "next/image";
import FeatureCard from "@/app/components/FeatureCard";

export default function page (){
  const myposts =[
    { id: 1, title: "Web Design", desc: "Building beautiful sites." },
    { id: 2, title: "Development", desc: "Writing clean code." },
    { id: 3, title: "SEO", desc: "Optimizing for search." },
  ];
  return(
<main> 
      <section className="Hero section">
        <h1 className="text-5xl font-bold">Jim's Developer Journey</h1>
    <p className="text-gray-500 text-3xl mb-8"> I am a He/him living in Nairobi Kenya and in this blog is w   here i express myself</p>
    </section>

  <div className="flex gap-16 mb-10 justify-center">
    <Link href="/writing"> Start reading </Link>
  </div>
      <section className="featured-post">
        <h1>Featured Post</h1>
        <Image src="/featured.jpg" alt="featured post" width={24} height={24} />
          <p>feed post</p>
      </section>

      <section className="Category Grid">
      <h1>Categories</h1>
        {myposts.map((item)=>{
          <FeatureCard
          key={item.id}
          title={item.title}
          desc={item.desc}
         /> 
        })}
      </section>

      <section className="Author">
      <h1>About the author</h1>
      </section>

      <section className="Newsletter">
      <h1>Newsletter Signup</h1>
      </section>

</main>);
}

