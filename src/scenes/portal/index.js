import React from 'react'
import Template from './../../components/template'

import PokemonWallpaper from './../../assets/images/pokemon-wallpaper.jpg'

import './style.css'

export default function Portal() {

    const main = (
        <div className='portada-container'>
            <img className='img-portada' src={PokemonWallpaper} alt='' />
            <h1 className='portada__title'>Portal</h1>

            <blockquote className='portada__frase'>
                <p>
                    Tenemos mucho en común, la misma tierra, el mismo aire, el mismo cielo, quizá si empezáramos a mirar lo que tenemos en común en vez de lo que nos hace diferentes, bueno, quién sabe...
                </p>
                <p>-Meowth</p>
            </blockquote>
            <strong className='portada__title-strong'>ATRAPARLOS YA!!</strong>
        </div>
    )
    return (
        <Template
            main={main}
        />
    )
}