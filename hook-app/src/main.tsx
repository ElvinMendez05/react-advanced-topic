import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HookApp } from './HookApp'
// import { TrafficLight } from './01- useState/TrafficLight'
// import { TrafficLightWithEffect } from './02- useEffect/TrafficLightWithEffect'
// import { TrafficLightWithHook } from './02- useEffect/TrafficLightWithHook'
// import { PokemonPage } from './03- examples/PokemonPage'
// import { FocusScreen } from './04- useRef/FocusScreen'
// import { TasksApp } from './05- useReducer/TaskApp'
import './index.css'
import { ScrumbleWords } from './05- useReducer/reducer/ScrumbleWords'
///import { ScrumbleWordsState } from './05- useReducer/reducer/ScrumbleWords-state'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
     {/* <HookApp /> */}
     {/* <TrafficLight /> */}
     {/* <TrafficLightWithEffect /> */}
     {/* <TrafficLightWithHook /> */}
     {/* <PokemonPage /> */}
     {/* <FocusScreen /> */}
     {/* <TasksApp /> */}
     <ScrumbleWords />
     {/* <ScrumbleWordsState /> */}
  </StrictMode>,
)
