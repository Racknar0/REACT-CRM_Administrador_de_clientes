import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VerCliente = () => {
    const { id } = useParams();
    const [cliente, setCliente] = useState({});

    useEffect(() => {
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
        };

        obtenerCLienteApi();
    }, []);

    return (
        <div>
            <h1 className="font-black text-4xl text-blue-900 mt-10">
                Ver Cliente {cliente.nombre}
            </h1>
            <p className="mt-3">Información del cliente</p>
            <p className="text-2xl text-gray-600 mt-4">
                <span className=" uppercase font-bold text-gray-800">
                    Cliente:{' '}
                </span>
                {cliente.nombre}
            </p>
            <p className="text-2xl text-gray-600 mt-4">
                <span className=" uppercase font-bold text-gray-800">
                    Email:{' '}
                </span>
                {cliente.email}
            </p>
            {cliente.telefono && (
                <p className="text-2xl text-gray-600 mt-4">
                    <span className=" uppercase font-bold text-gray-800">
                        Teléfono:{' '}
                    </span>
                    {cliente.telefono}
                </p>
            )}

            {cliente.empresa && (
                <p className="text-2xl text-gray-600 mt-4">
                    <span className=" uppercase font-bold text-gray-800">
                        Empresa:{' '}
                    </span>
                    {cliente.empresa}
                </p>
            )}

            {cliente.notas && (
                <p className="text-2xl text-gray-600 mt-4">
                    <span className=" uppercase font-bold text-gray-800">
                        Notas:{' '}
                    </span>
                    {cliente.notas}
                </p>
            )}
        </div>
    );
};

export default VerCliente;
