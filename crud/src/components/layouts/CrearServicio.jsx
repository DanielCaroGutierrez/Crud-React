import {collection, addDoc} from 'firebase/firestore'
import {dataBase, subirImagen} from "../config/dataBase.jsx";
import {useState} from "react";
import { useNavigate } from 'react-router-dom';

const CrearServicio = () => {
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [valor, setValor] = useState('')
    const [img , setImg] = useState(null)
    const returnListado = useNavigate()
    const agrearServicio = async () => {
        const urlImg = await subirImagen(img)
        const servicioCollection = collection(dataBase, 'servicios')
        const servicio = {
            nombre, descripcion, valor, urlImg
        }
        await addDoc(servicioCollection, servicio)
        returnListado('/listar')
    }
  return(
      <section >
        <form >
            <input onChange={(e)=>setNombre(e.target.value)} placeholder={'Nombre servicio'} type={'text'}/>
            <input onChange={(e)=>setDescripcion(e.target.value)} placeholder={'Descripcion servicio'} type={'text'}/>
            <input onChange={(e)=>setValor(e.target.value)} placeholder={'Valor servicio'} type={'text'}/>
            <input onClick={agrearServicio} type={'button'} value={'Agrear servicio'}/>
            <input onChange={(e)=>setImg(e.target.files[0])} type='file'/>
        </form>
      </section>
  )
}

export default  CrearServicio