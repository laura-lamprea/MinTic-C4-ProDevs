import React from 'react'
import LogoProdevs from '../media/Logo_ProDevs.png'
import './Registro.css'

const RegistroPage = () => {
    return (
    <div className='wrapper'>
        <div className="container">
        <img src={LogoProdevs} width="100%"/>
        </div>
        <div class="title">
            Formulario de Registro
        </div>
        <div class="form">
            <div class="input_field">
                <label>Nombre</label>
                <input type="text" class="input"/>
            </div>
            <div class="input_field">
                <label>Apellido</label>
                <input type="text" class="input"/>
            </div>
            <div class="input_field">
                <label>Contraseña</label>
                <input type="password" class="input"/>
            </div>
            <div class="input_field">
                <label>Confirme contraseña</label>
                <input type="password" class="input"/>
            </div>
            <div class="input_field">
                <label>Correo Electrónico</label>
                <input type="text" class="input"/>
            </div>
            <div class="input_field">
                <label>Tipo de usuario</label>
                <div class="custom_select">
                    <select>
                        <option value=""></option>
                        <option value="Administrador">Administrador</option>
                        <option value="Lider">Lider</option>
                        <option value="Estudiante">Estudiante</option>
                    </select>
                </div>
            </div>
            <div class="input_field">
                <input type="submit" value="Registro" class="btn"/>
            </div>
            </div>
        </div>    
      
    )
}

export default RegistroPage
