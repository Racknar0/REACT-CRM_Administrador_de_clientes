import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Alerta from './Alerta';

const Formulario = () => {

    const nuevoCLienteSchema = Yup.object().shape({
        nombre: Yup.string()
                    .min(3, 'El nombre debe tener al menos 3 caracteres')
                    .max(20, 'El nombre debe tener menos de 20 caracteres')
                    .required('El nombre es requerido'),
        
        empresa: Yup.string()
                    .required('La empresa es requerida'),

        email: Yup.string()
                    .required('El email es requerido')
                    .email('El email no es válido'),
        
        telefono: Yup.number().typeError('El teléfono debe ser un número')
                        .integer('El teléfono debe ser un número entero')
                        .positive('El teléfono debe ser un número positivo')

    })

    const handleSubmit = async (values) => {
        try {
            const url = 'http://localhost:4000/clientes';

            const respuesta = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            console.log(respuesta);
            const resultado = await respuesta.json();
            console.log(resultado);


        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
            <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
                Agregar cliente
            </h1>

            <Formik
                initialValues={{
                    nombre: '',
                    empresa: '',
                    email: '',
                    telefono: '',
                    notas: '',
                }}
                onSubmit={(values) => {
                    handleSubmit(values);
                }}
                validationSchema={nuevoCLienteSchema}
            >

                {({errors, touched}) => {

                //console.log(touched);
                
                return  (
                

                <Form className="mt-10">
                    <div className="mb-4">
                        <label className="text-gray-800" htmlFor="nombre">
                            Nombre:
                        </label>
                        <Field
                            id="nombre"
                            type="text"
                            className="mt-2 w-full p-3 bg-gray-50"
                            placeholder="Nombre del cliente"
                            name="nombre"
                        />

                        {errors.nombre && touched.nombre ? (
                            <Alerta>{errors.nombre}</Alerta>
                        ) : 
                        null }

                    </div>
                    <div className="mb-4">
                        <label className="text-gray-800" htmlFor="empresa">
                            Empresa:
                        </label>
                        <Field
                            id="empresa"
                            type="text"
                            className="mt-2 w-full p-3 bg-gray-50"
                            placeholder="Empresa del cliente"
                            name="empresa"
                        />
                        
                        {errors.empresa && touched.empresa ? (
                            <Alerta>{errors.empresa}</Alerta>
                        ) : 
                        null }
                    </div>
                    <div className="mb-4">
                        <label className="text-gray-800" htmlFor="email">
                            Email:
                        </label>
                        <Field
                            id="email"
                            type="email"
                            className="mt-2 w-full p-3 bg-gray-50"
                            placeholder="Email del cliente"
                            name="email"
                        />

                        {errors.email && touched.email ? (
                            <Alerta>{errors.email}</Alerta>
                        ) : 
                        null }

                    </div>
                    <div className="mb-4">
                        <label className="text-gray-800" htmlFor="telefono">
                            Teléfono:
                        </label>
                        <Field
                            id="telefono"
                            type="tel"
                            className="mt-2 w-full p-3 bg-gray-50"
                            placeholder="Teléfono del cliente"
                            name="telefono"
                        />
                        {errors.telefono && touched.telefono ? (
                            <Alerta>{errors.telefono}</Alerta>
                        ) : 
                        null } 

                    </div>
                    <div className="mb-4">
                        <label className="text-gray-800" htmlFor="notas">
                            Notas:
                        </label>
                        <Field
                            as="textarea"
                            id="notas"
                            type="text"
                            className="mt-2 w-full p-3 bg-gray-50 h-40"
                            placeholder="Notas del cliente"
                            name="notas"
                        />
                    </div>

                    <input
                        type="submit"
                        value={'Agregar cliente'}
                        className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold rounded-md text-lg"
                    />
                </Form>
                )}}
            </Formik>
        </div>
    );
};

export default Formulario;
