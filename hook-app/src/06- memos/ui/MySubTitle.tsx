import { memo } from "react";

interface Props {
    subtitule: string;
    callMyAPI: ()=> void;
}

export const MySubTitle = memo (({subtitule, callMyAPI}: Props) => {
  
    console.log('MySubTitle re-render')

    return (
    <>
        <h6 className="text-2xl font-bold">{subtitule}</h6>
    
        <button className="bg-blue-500 text-white px-4 py-1 rounded-md cursor-pointer"
        onClick={callMyAPI}>Calling funtion</button>
    </>
  )
})
