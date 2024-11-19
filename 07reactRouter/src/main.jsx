import Reaact, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import'./index.css'
import { RouterProvider, CreateBrowserRouter } from 'react-router-domd'
import Layout from './components/Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'

// const router = CreateBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About/>
//       }
//     ]
//   }
// ])

const router = CreateBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='/' element={<Home />}/> 
    <Route path='about' element={<About />}/> 
    <Route path='contact' element={<Contact />}/>  
    <Route path='user/userid' element={<User />}/>  
   <Route
   loader={githubinfoloader}
   path='github'
   element={<Github />}
   />
   </Route>
  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>,
)
