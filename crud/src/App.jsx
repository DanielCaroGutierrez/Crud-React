import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CrearServicio from "./components/layouts/CrearServicio.jsx";
import ListarServicios from "./components/layouts/ListarServicios.jsx";
import EditarServicio from './components/layouts/EditarServicio.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home</h1>
  },
  {
    path: '/crear',
    element: <CrearServicio />
  },
  {
    path: '/listar',
    element: <ListarServicios />
  },
  {
    path: '/editar/:id',
    element: <EditarServicio/>
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
