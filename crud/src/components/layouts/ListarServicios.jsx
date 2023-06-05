import {collection, getDocs, doc, deleteDoc} from 'firebase/firestore'
import {useState, useEffect} from 'react'
import {dataBase} from '../config/dataBase.jsx'
import { Link } from 'react-router-dom'

const ListarServicios = () => {
  const [servicios, setServicios] = useState([])

  const mostrarServicios = async() => {
   const serviciosCollection = collection(dataBase, 'servicios')
    const data = await getDocs(serviciosCollection)
    console.log(data.docs)
    setServicios(data.docs.map((doc)=>({...doc.data(), id: doc.id })))
  }

  const eliminarServicio = async (id) => {
    const servicioEliminado = doc(dataBase, 'servicios', id)

    await deleteDoc(servicioEliminado)
  }
  useEffect(()=> {
      mostrarServicios()
  }, [])
  console.log(servicios)
  return(
      <section >
          {
              servicios.map((servicio)=>(
                  <section >
                      <h1>{servicio.nombre}</h1>
                      <h1>{servicio.valor}</h1>
                      <h1>{servicio.descripcion}</h1>
                      <img src={servicio.urlImg}/>
                      <button onClick={(()=>eliminarServicio(servicio.id))}>Eliminar</button>
                      <Link to={'/editar/'+servicio.id}>Editar</Link>
                  </section>
              ))
          }
      </section>
  )
}

export  default  ListarServicios