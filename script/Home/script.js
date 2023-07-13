
let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');



document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('audio');
  
  const playButton = document.getElementById('playButton');
  playButton.addEventListener('click', function() {
    audio.muted = false; // Unmute the audio
    audio.play().then(function() {
      
      const targetSection = document.getElementById('targetSection');
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }).catch(function(error) {
      console.log(error);
    });
  });
});





window.addEventListener('scroll',()=>{


   let value=window.scrollY;
   text.style.marginTop=value*2.5 +'px';
   treeLeft.style.top= value* -1.5+ 'px';
   treeRight.style.left= value* 1.5+ 'px';
   gateLeft.style.left= value*0.5+ 'px';
   gateRight.style.left= value* -0.5+ 'px';



})

// let text = document.getElementById('text');
// let treeLeft = document.getElementById('tree-left');
// let treeRight = document.getElementById('tree-right');
// let gateLeft = document.getElementById('gate-left');
// let gateRight = document.getElementById('gate-right');



// window.addEventListener('scroll', () => {
//   let value = window.scrollY;
//   text.style.marginTop = value * 2.5 + 'px';
//   treeLeft.style.top = value * -1.5 + 'px';
//   treeRight.style.left = value * 1.5 + 'px';
//   gateLeft.style.left = value * 0.5 + 'px';
//   gateRight.style.left = value * -0.5 + 'px';
// });

// document.addEventListener('DOMContentLoaded', function() {
//   const startButton = document.getElementById('button');
//   const audio = document.getElementById('audio');
  
//   function playSound() {
   
//     audio.muted = true;
//     audio.play().then(() => {
//       audio.muted = false; // Unmute after playback has started
//     }).catch((error) => {
//       console.log(error);
//     });
    
//   }

//   startButton.addEventListener('click', function() {
//     playSound();
//   });

//   // Trigger initial audio playback and click
//   // startButton.click();
//   // playSound();

//    // Create and dispatch a custom click event
//    const clickEvent = new Event('click');
//    startButton.dispatchEvent(clickEvent);

// });

