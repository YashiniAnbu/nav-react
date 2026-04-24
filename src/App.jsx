
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Welcomemsg from './components/Welcomemsg'
import Error from './components/Error'             
import Template from './components/Template'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () =>{
  
  const router= createBrowserRouter([
  {
        path: "/",
        element: <Template />,
        children: [

      {
        path: "/",
        element: <Home />
      },
        {
          path: "/about",
          element: <About />
        },

        {
          path: "services",
          element: <Services />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/services",
          element: <Services />
        },

        {
           path:"/welcome/:name",
           element: <Welcomemsg />
        },
        {
          path:"/*",
          element: <Error />
        }
    ]
  }
  ])
   
  return (
    <RouterProvider router={router} />

  )
}

export default App