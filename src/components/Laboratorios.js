import React from 'react'
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
                <a href="Interrupcion" className='button'>
                    <span>Ir al Ejemplo</span>
                    <div className='icono'>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </a>
            </section>

        </>
    )
}
