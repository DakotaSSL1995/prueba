import React from 'react'
import NavBar from './NavBar';

function Faq(){
  return (
    <>
    <NavBar />
    <button class="accordion">SECCIÓN 1</button>
      <div class="panel">
      <p>Prueba</p>
        </div>
    <button class="accordion">SECCIÓN 2</button>
      <div class="panel">
      <p>Prueba 2</p>
      </div>

    <button class="accordion">SECCIÓN 3</button>
      <div class="panel">
      <p>Prueba 3</p>
      </div>
</>
  )
}

export default Faq;
