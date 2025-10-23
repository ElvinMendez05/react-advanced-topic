import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster} from 'sonner'
// import { HookApp } from './HookApp'
// import { TrafficLight } from './01- useState/TrafficLight'
// import { TrafficLightWithEffect } from './02- useEffect/TrafficLightWithEffect'
// import { TrafficLightWithHook } from './02- useEffect/TrafficLightWithHook'
// import { PokemonPage } from './03- examples/PokemonPage'
// import { FocusScreen } from './04- useRef/FocusScreen'
// import { TasksApp } from './05- useReducer/TaskApp'
///import { ScrumbleWordsState } from './05- useReducer/reducer/ScrumbleWords-state'
//import { ScrumbleWords } from './05- useReducer/reducer/ScrumbleWords'
// import { MemoHook } from './06- memos/MemoHook'
// import { MemoCounter } from './06- memos/MemoCounter'
// import { InstagromApp } from './07- useOptimistic/InstagromApp'

import './index.css'
import { ClientInformation } from './08- use-suspense/ClientInformation'
import { getUserAction } from './08- use-suspense/api/get-user.action'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
     {/* <HookApp /> */}
     {/* <TrafficLight /> */}
     {/* <TrafficLightWithEffect /> */}
     {/* <TrafficLightWithHook /> */}
     {/* <PokemonPage /> */}
     {/* <FocusScreen /> */}
     {/* <TasksApp /> */}
     {/* <ScrumbleWords /> */}
     {/* <ScrumbleWordsState /> */}
     {/* <MemoHook /> */}
     {/* <MemoCounter> */}
     {/* <InstagromApp /> */}
     <Suspense fallback={
       <div className="bg-gradient flex flex-col">
        <h1 className="text-2xl">Cargando...</h1>
       </div>
     }>
     <ClientInformation getUser={getUserAction(100)} />
    </Suspense>
  </StrictMode>,
)
