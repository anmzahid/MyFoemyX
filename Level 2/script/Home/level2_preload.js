document.addEventListener('DOMContentLoaded', function () {
    
 
    const click = new Audio('../sound/Click.mp3');





    const textB = "In level 2, the player enters a haunting arena, their heart pounding with anticipation. The ghost materializes, its malevolent gaze fixated on the player. They engage in a fierce one-on-one battle, dodging ethereal attacks and delivering calculated strikes.";

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
        let speed = 49.5;
    
        function type() {
            if (index < textB.length) {
                typingText.innerHTML += textB.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }
    
        type();
    }
    
    const button1 = document.getElementById('playButton');
    button1.addEventListener("click", function() {
    
        click.volume=1;
        click.play();
        
        setTimeout(function() {
            while (document.body.firstChild) {
                document.body.removeChild(document.body.firstChild);
            }
    
            const backgroundImage = document.createElement("img");
            backgroundImage.src = "../Images/Home/horror.jpeg";
            backgroundImage.style.position = "fixed";
            backgroundImage.style.top = "0";
            backgroundImage.style.left = "0";
            backgroundImage.style.width = "100%";
            backgroundImage.style.height = "100%";
            backgroundImage.style.objectFit = "cover";
    
            document.body.appendChild(backgroundImage);
            const backgroundMusic = new Audio('../sound/Level2 voice.mp3');
            backgroundMusic.play();
            typeWriter();
        },);
        setTimeout(function () {
            window.location.href = 'Level2.html';
        },18000);
    });
    
   

    
    
});