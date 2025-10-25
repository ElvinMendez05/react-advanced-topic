import { UserContext } from "@/09- useContext/context/UserContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner"

export const LoginPage = () => {
  
  const {login} = useContext(UserContext);
  const [userId, setUserId] = useState('');

  const navigation = useNavigate();
   
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault(); 

     const result = login(+userId);

  if (!result) {
    toast.error('Usuario no encontrado')
    return
  }

   navigation('/profile')
  }

  return (
    <div className="lex flex-col items-center justify-center min-h-screeen">
      <h1 className="text-4xl fond-bold">Sign up</h1> 
      <hr />

      <form className="flex flex-col gap-2 my-10"
        onSubmit={handleSubmit}
      >
          <Input type="number" placeholder="User ID" 
          value={userId} 
          onChange={(event) => setUserId(event.target.value)}/>
          
          <Button type="submit">Login</Button>
      </form>
          
          <Link to="/about">
             <Button variant="ghost">Come back to the main</Button>
          </Link>

    </div>
  )
}
