import { createBrowserRouter} from 'react-router-dom'
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import Produtos from '../pages/Produtos/Produtos'

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Home/>,
    },

    {
        path:'/home',
        element: <Home/>,
    },

    {
        path:'/signin',
        element: <Login/>,
    },

    {
        path:'/produtos',
        element: <Produtos/>,
    },
])