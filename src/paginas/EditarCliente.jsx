import Formulario from '../components/Formulario'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditarCliente = () => {

  const { id } = useParams();
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
      setCargando(!cargando);

      const obtenerCLienteApi = async () => {
          try {
              const url = `http://localhost:4000/clientes/${id}`;
              const respuesta = await fetch(url);
              const resultado = await respuesta.json();
              console.log(resultado);
              setCliente(resultado);
          } catch (error) {
              console.log(error);
          }

          setTimeout(() => {
              setCargando(false);
          }, 1000);
      };

      obtenerCLienteApi();
  }, []);

  //console.log(cargando);


  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
      <p className='mt-3'>Utiliza ese formulario para editar clientes</p>
      {cliente?.nombre ? (
        <Formulario cargando={cargando} cliente={cliente} />
      ) : 
      <p>No se encontraron clientes</p>
      }
    </>
  )
}

export default EditarCliente
