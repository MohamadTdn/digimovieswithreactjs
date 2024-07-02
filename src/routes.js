import Home from './Components/Home/Home'
import Movies from './Components/Movies/Movies'
import Series from './Components/Series/Series'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import MainPost from './Components/MainPost/MainPost'

let routes = [
    {path: '/', element: <Home/>},
    {path: '/movies', element: <Movies/>},
    {path: '/series', element: <Series/>},
    {path: '/about' , element: <About/>},
    {path: '/contact' , element: <Contact/>},
    {path: '/post/:id', element: <MainPost/>}
]

export default routes