'use server'

import NavBar from "@/components/own/navbar"; // Import the 'navbar' component
import "./fonts.css" 
export default async function Home() {
  return (
    <div className="bg-background w-screen h-screen">
      <NavBar/>
      
    </div>
  );
}
