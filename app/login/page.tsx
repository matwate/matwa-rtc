import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import LogInForm from "./LoginForm"

const AuthPage = () => {
  return (
    <div className="dark flex justify-center bg-background w-screen h-screen">
      <Card className="p-4 mx-8 my-8  border-muted">

      <CardHeader>
          <CardTitle>
            Log In
          </CardTitle>
          <CardDescription>Only github login atm</CardDescription>
      </CardHeader>
        <CardContent>
          
        
          <LogInForm/>
          
        </CardContent>

      </Card>
    </div>
  )
}

export default AuthPage
