type Props = {
  fullName:string;
  description:string;
  image:string;
}

export default function Cards({fullName, description, image}: Props) {
  return (
    <div className="bg-blue-200 border-2 p-4 m-2 flex justify-between items-center ">
      <div className="flex flex-col">
        <p className="font-bold text-xl">{fullName}</p>
        <p className="text-sm">{description}</p>
      </div>
      <img 
        src={image}  
        className="w-25 h-25"
      />
    </div>
  )
};