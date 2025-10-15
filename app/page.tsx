import { currentUser } from "@clerk/nextjs/server"
import Guest from "@/components/Guest";

export default async function Homepage() {
  const user = await currentUser();
  
  if(!user){
    return <Guest/>;
  }

  return(
    <div className="bg-red-700">Home page </div>
  )
}


