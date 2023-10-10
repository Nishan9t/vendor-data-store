import EditData from "@/components/EditData";


export default function Edit({params}) {

  const {id}=params;
  console.log(id);
  return (
   <EditData/>
  )
}
