
(function() {
  "use strict";
  
  const num = 24;
  const container = document.querySelector("section.box");
  const pic = 'bf1.gif';
  
  // Create document fragment for batch DOM insertion
  const fragment = document.createDocumentFragment();
  
  for(let i = 1; i <= num; i++) {
    const hueRotation = (360/12) * i;
    const rotationZ = (i-1) * 30;
    const translateZ = -Math.abs((i-1) * 600);
    
    // Create figure element
    const figure = document.createElement("figure");
    figure.id = "f" + i;
    figure.className = "fig";
    
    // Create image element
    const img = document.createElement("img");
    img.src = pic;
    img.id = "m" + i;
    img.className = "im";
    
    // Apply styles efficiently
    img.style.cssText = `
      -webkit-filter: hue-rotate(${hueRotation}deg);
      transform: rotateZ(${rotationZ}deg) translateZ(${translateZ}px);
    `;
    
    figure.appendChild(img);
    fragment.appendChild(figure);
  }
  
  // Single DOM insertion
  container.appendChild(fragment);
})();
