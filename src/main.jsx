import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Componet/Root/Root.jsx'
import Home from './Componet/Home/Home.jsx'
import About from './Componet/About/About.jsx'
import CatagoryNews from './Componet/Page/CatagoryNews.jsx'
import Login from './Componet/Login/Login.jsx'
import Register from './Componet/Register/Register.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "/catagory/:id",
        loader: async () => {
          const res = await fetch('/news.json');
          const data = await res.json();
          return data;
        },
        Component: CatagoryNews
      },

    ]

  },
  { path: "/login", Component: Login },
  { path: "/register", Component: Register }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
