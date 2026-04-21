const PreviewFile = ({date,title,description}) =>{
return(
<div className="">
<span className="text-base">{date}</span>
<h1 className="text-xl font-bold">{title}</h1>
<p className="text-gray-500">{description}</p>
</div>)}
export default PreviewFile
