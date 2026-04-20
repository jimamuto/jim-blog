import PreviewFile from "@/app/components/PreviewFile";
export default function page (){
  
  const files = [
    {id: 1, date: "April 20", title: "Minimax", description: "How to use minimax in coding" },
    { id: 2, date: "April 21", title: "Developer Journey", description: "How i have improved in developing" },
    { id: 3, date: "April 22", title: "Homelab", description: "Take a peep on my homelabbing journey" },
  ];

return(
<div> <h1>Jim's Developer Journey</h1>
<p> I am a He/him living in Nairobi Kenya and in this blog is where i express myself</p>
{files.map((file)=>(
  <PreviewFile 
  key={file.id}
  date={file.date}
  description={file.description}
  />
  ))}
  </div>
);
}

