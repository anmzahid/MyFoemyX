document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.getElementById('playButton');
    const audio = document.getElementById('audio');
    const click = new Audio('sound/Click.mp3');

    playButton.addEventListener('click', function () {
        audio.muted = false;
        audio.play().then(function () {

            const targetSection = document.getElementById('targetSection');
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }).catch(function (error) {
            console.log(error);
        });

    });



    const textB = "As the chilling dream haunted my slumber, I woke in a panic, drenched in sweat. The mirror before me held a ghostly reflection, twisted and pallid, wearing a sinister smile. Instinctively, I sensed danger lurking within. With a racing heart, I mustered courage, realizing that to survive, I had to confront the spectral intruder within the depths of my own subconscious. The battle against my own ghostly doppelgänger began, a fight for survival, as both of our fates hung in the balance.";

    function typeWriter() {
        const typingText = document.createElement("div");
        typingText.setAttribute("id", "typingText");
        typingText.style.position = "absolute";
        typingText.style.top = "30%";
        typingText.style.left = "27%";
        typingText.style.transform = "translate(-20%, -20%)";
        typingText.style.fontFamily = "Horror Font, cursive"; 
        typingText.style.color = "#850808"; // Text color
        typingText.style.fontSize= "20px";
        typingText.style.textShadow = "0 0 10px rgba(255, 0, 0, 0.5)"; // Text shadow with a red blood effect
        document.body.appendChild(typingText);
        let index = 0;
        let speed = 50.8;
    
        function type() {
            if (index < textB.length) {
                typingText.innerHTML += textB.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }
    
        type();
    }
    
    const button1 = document.getElementById('btn1');
    button1.addEventListener("click", function() {
        audio.muted=true;
        click.volume=1;
        click.play();
        setTimeout(function () {
            
        }, 2100);
        setTimeout(function() {
            while (document.body.firstChild) {
                document.body.removeChild(document.body.firstChild);
            }
    
            const backgroundImage = document.createElement("img");
            backgroundImage.src = "Images/Home/horror.jpeg";
            backgroundImage.style.position = "fixed";
            backgroundImage.style.top = "0";
            backgroundImage.style.left = "0";
            backgroundImage.style.width = "100%";
            backgroundImage.style.height = "100%";
            backgroundImage.style.objectFit = "cover";
    
            document.body.appendChild(backgroundImage);
            const backgroundMusic = new Audio('sound/voice.mp3');
            backgroundMusic.play();
            typeWriter();
        },);
        setTimeout(function () {
            window.location.href = 'game.html';
        }, 28000);
    });
    
    const button2 = document.getElementById('btn2');
    button2.addEventListener('click', function () {
        audio.muted=true;
        click.volume=1;
        click.play();
        setTimeout(function () {
            
        }, 2100);
        
        setTimeout(function () {
            window.location.href = './Instructions.html';
        }, 1000);
        
    });
    
    const button3 = document.getElementById('btn3');
    button3.addEventListener('click', function () {
        audio.muted=true;
        click.volume=1;
        click.play();
        setTimeout(function () {
            
        }, 2100);
        
        setTimeout(function () {
            window.location.href = './Credits.html';
        }, 1000);
        
    });
    
});