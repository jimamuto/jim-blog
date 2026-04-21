import PreviewFile from "@/app/components/PreviewFile";
import Link from "next/link";
export default function page (){
  
  const files = [
    {id: 1, date: "April 20", title: "Minimax", description: "How to use minimax in coding" },
    { id: 2, date: "April 21", title: "Developer Journey", description: "How i have improved in developing" },
    { id: 3, date: "April 22", title: "Homelab", description: "Take a peep on my homelabbing journey" },
  ];

return(
<div className="flex flex-col"> 
  <h1 className="text-5xl font-bold">Jim's Developer Journey</h1>
  <p className="text-gray-500 text-3xl mb-8"> I am a He/him living in Nairobi Kenya and in this blog is w   here i express myself</p>
  <span className="flex gap-16 mb-10">
  <Link href="/about"> About Me</Link>
  <Link href="/Portfolio"> Portfolio</Link>
  <Link href="/Writing"> Writing </Link>
  </span>
  {files.map((file)=>(
    <PreviewFile 
    key={file.id}
    title={file.title}
    date={file.date}
    description={file.description}
    />
    ))
  }
  </div>
);
}

