import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
<script>
var acc = document.getElementsByClassName("accordion");
var i;


for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var panel = this.nextElementSibling;
  if (panel.style.maxHeight){
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
});
}
</script>

  );
}

export default App;
