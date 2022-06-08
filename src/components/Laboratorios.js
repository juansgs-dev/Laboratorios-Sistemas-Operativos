import React from 'react'
import { Link } from 'react-router-dom'
import Interrupcion from '../assets/Interrupcion.png'
import '../styles/Laboratorios.css'

export const Laboratorios = () => {
    return (
        <>
            <section className='Interrupcion'>
                <span>Interrupción</span>
                <div className='Img'>
                    <img src={Interrupcion} alt='imagen Interrupcion'></img>
                </div>
                <span>Ejemplo de una interrupción que se ocasiona al querer ingresar un número impar y un nombre.</span>
                <Link className='button' to="/Interrupcion">Ir al Ejemplo</Link>
            </section>

        </>
    )
}
