import Link from "next/link";
import PreviewFile from "@/app/components/PreviewFile";
 export default function writing  () {
    const files = [
    {id: 1, date: "April 20", title: "Minimax", description: "How to use minimax in coding" },
    { id: 2, date: "April 21", title: "Developer Journey", description: "How i have improved in developing" },
    { id: 3, date: "April 22", title: "Homelab", description: "Take a peep on my homelabbing journey" },
    ];

    return (
      <div> 
      <Link href="/">HOME</Link>
      <h1 className="text-bold text-4xl mb-8">Welcome to my best writings as of late</h1>
      <p className="text-3xl mb-8"> preview of featured pages</p>
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
  )
}


