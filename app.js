      //selects grid children
      const cells = document.querySelector('.grid').children;

      //create grid
      const grid = document.querySelector('.grid');
      for (let i = 1; i <= 256; i++) {
          let div = document.createElement('div');
          div.classList.add('cell');
          div.addEventListener('mouseover', function(event) {
              event.target.style.backgroundColor = 'black';
          });
          grid.appendChild(div);                     
     };
     //delete grid
      function deleteGrid() {
          grid.innerHTML = null;
      }

      //slider
      let size = 16;
      const slider = document.querySelector('input[type = \'range\']');
      const sliderText = document.querySelectorAll('#sliderSize');
      
      slider.addEventListener('mousemove', updateSliderText);
      slider.addEventListener('change', updateSlider);

      function populateGrid(size) {
          for (let i = 0; i < size * size; i++) {
              let div = document.createElement('div');
              div.classList.add('cell');
              div.addEventListener('mouseover', function() {
                  event.target.style.backgroundColor = 'black';
              })
              grid.appendChild(div);
              grid.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`);
          }
      }

      function updateSliderText() {
          sliderText[0].textContent = slider.value;
          sliderText[1].textContent = slider.value;
      }

      function updateSlider() {
          sliderText[0].textContent = slider.value;
          sliderText[1].textContent = slider.value;
          deleteGrid();
          let size = slider.value;
          populateGrid(slider.value);
      }



      //rainbow button
      const rainbowButton = document.querySelector('#rainbow');

      function random(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1) + min); 
      }
  
      rainbowButton.addEventListener('click', function() {
          rainbowButton.classList.remove('blinkAnimation');
          void rainbowButton.offsetWidth;
          rainbowButton.classList.add('blinkAnimation');
          Array.from(cells).forEach(item => item.addEventListener('mouseover', function(event) {
              event.target.style.backgroundColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
          }))
      })

      //eraser button
      const eraserButton = document.querySelector('#eraser');

      eraserButton.addEventListener('click', function() {
          eraserButton.classList.remove('blinkAnimation');
          void eraserButton.offsetWidth;
          eraserButton.classList.add('blinkAnimation');
          Array.from(cells).forEach(item => item.addEventListener('mouseover', function(event) {
              event.target.style.backgroundColor = 'white';
          }))
      })

      //black button
      const blackButton = document.querySelector('#black')

          
      blackButton.addEventListener('click', function() {
          blackButton.classList.remove('blinkAnimation');
          void blackButton.offsetWidth;
          blackButton.classList.add('blinkAnimation');
          Array.from(cells).forEach(item => item.addEventListener('mouseover', function(event) {
              event.target.style.backgroundColor = 'black';
          }))
       })

      //color selector
      const colorSelector = document.querySelector('#colorSelector');

     colorSelector.addEventListener('input', function() {
         Array.from(cells).forEach(item => item.addEventListener('mouseover', function(event) {
             event.target.style.backgroundColor = colorSelector.value;
         }))
     })
         