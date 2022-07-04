import {useEffect, useState} from 'react'

const Inicio = () => {

    const [clientes, setClientes] = useState([])

    useEffect(() => {

        const obtenerClientesAPI = async () => {

            try {
                
                const url = 'http://localhost:4000/clientes'
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()

                setClientes(resultado);


            } catch (error) {
                console.log(error)
            }
        }

        obtenerClientesAPI();
    } , [])

  return (
    <div>
      <h1>Inicio</h1>
    </div>
  )
}

export default Inicio
