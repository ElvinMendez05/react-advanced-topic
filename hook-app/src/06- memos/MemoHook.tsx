import { useCallback, useState } from "react"
import { MySubTitle } from "./ui/MySubTitle"
import { MyTitle } from "./ui/MyTitle"

export const MemoHook = () => {
  
    const [title, setTitile] = useState('Hello')
    const [subTitle, setSubTitle] = useState('World')
    
    const handleMyAPICall = useCallback(()=> {
        console.log('Call to my API -', subTitle)
    }, [subTitle])
    return (
    <div className="bg-grandient flex flex-col gap-4">
     <h1 className="text-2xl font-thin text-black">MemoApp</h1>         

      <MyTitle title={title}/>
      <MySubTitle subtitule={subTitle} callMyAPI={handleMyAPICall}/>

     <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" 
     onClick={() => setTitile('Whats up, ' + new Date().getTime())}>
       Change title
     </button>
     
     <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
    //  onClick={() => setSubTitle('Hey everyone, ' + + new Date().getTime())}
       onClick={()=> setSubTitle('Hey everyone')}
     > 
       Change setSubTitle
     </button>

    </div>
  )
}
