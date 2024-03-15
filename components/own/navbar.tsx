import { Button } from "@/components/ui/button"

export default function NavBar(): JSX.Element{
    return(
        <div className="w-full">
           <div className="p-4 flex justify-between">
            <h1 className="text-foreground grotesk">MatwaRTC</h1>
            <Button variant="secondary" className="text-primary">Log in</Button>
           </div>
        </div>
    )
}