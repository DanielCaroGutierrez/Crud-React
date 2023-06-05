import {collection, updateDoc, doc, getDoc} from 'firebase/firestore'
import {dataBase} from "../config/dataBase.jsx";
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const EditarServicio = () => {  
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [valor, setValor] = useState('')
    const returnListado = useNavigate()
    const {id} = useParams()
    const editarServicio = async () => { 
        const servicioCollection = doc(dataBase, 'servicios', id)
        const servicio = {
            nombre, descripcion, valor
        }  
        await updateDoc(servicioCollection, servicio)
        returnListado('/listar')   
    }

    const servicioActualizado = async (id) =>{
        const servicio = await getDoc(doc(dataBase, 'servicios', id))
        setNombre(servicio.data().nombre)
        setDescripcion(servicio.data().descripcion)
        setValor(servicio.data().valor)

    }

    useEffect(() => {

        servicioActualizado(id)
    }, [])

  return(
      <section >
        <form >
            <input onChange={(e)=>setNombre(e.target.value)} placeholder={'Nombre servicio'} type={'text'}/>
            <input onChange={(e)=>setDescripcion(e.target.value)} placeholder={'Descripcion servicio'} type={'text'}/>
            <input onChange={(e)=>setValor(e.target.value)} placeholder={'Valor servicio'} type={'text'}/>
            <input onClick={editarServicio} type={'button'} value={'Editar servicio'}/>
        </form>
      </section>
  )
}

export default  EditarServicio