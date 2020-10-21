import React from 'react';
import NavBar from './NavBar';

function CapsulasC () {
  return (
    <>
    <NavBar />
    <div class="rox">
    <div class="container">
        <div class="box">
            <div class="icon"><h3>Finanzas y Administracion</h3>
              <i class="ic fas fa-piggy-bank"></i>
            </div>
            <div class="content">
                <h3>Finanzas y Administracion</h3>
                <p>Prueba</p>
            </div>
        </div>
        <div class="box">
                <div class="icon"><h3>Contabilidad</h3><i class=" ic fas fa-hand-holding-usd"></i></div>
                <div class="content">
                    <h3>Contabilidad</h3>
                    <p>Prueba 2</p>
                </div>
        </div>
        <div class="box">
                    <div class="icon"><h3>Legal</h3><i class="ic fas fa-landmark"></i></div>
                    <div class="content">
                        <h3>Legal</h3>
                        <p>Prueba 3</p>
                    </div>
        </div>
        <div class="box">
            <div class="icon"><h3>Marketing y Publicidad</h3><i class="ic fas fa-bullhorn"></i></div>
            <div class="content">
                <h3>Marketing y Publicidad</h3>
                <p>Prueba 4</p>
            </div>
        </div>
        <div class="box">
            <div class="icon"><h3>Recursos Humanos</h3><i class="ic fas fa-handshake"></i></div>
            <div class="content">
                <h3>Recursos Humanos</h3>
                <p>Prueba 5</p>
            </div>
        </div>
    </div>
    </div>
</>
  )
}

export default CapsulasC
