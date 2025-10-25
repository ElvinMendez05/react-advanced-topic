import { Link } from "react-router"

export const AboutPage = () => {
  return (
    <div className="flex flex-col item-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-black"> WebSite About me </h1>
      <hr />

      <div className="flex flex-col gap-2">
        <Link to="/profile" className="hover:text-blue-500 underline text-2xl">
         Profile
        </Link>
        <Link to="/login" className="hover:text-blue-500 underline text-2xl">
          Sign up
        </Link>
      </div>
    </div>
  )
}
