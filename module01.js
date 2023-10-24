const dynamicText = document.querySelector("h1 span");
const words = ["Atror", "Ayoub", "Nabil"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
const cursor = document.getElementById('cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX)+"px;");
        });

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 2000);
        });

function showDetails(text) {
    document.getElementById('details').innerHTML = text;
}

function hideDetails() {
    document.getElementById('details').innerHTML = '';
}
window.onload = function() {
    var w1 = document.getElementById('w1');
    var w2 = document.getElementById('w2');
    var w3 = document.getElementById('w3');

    w1.addEventListener('mouseover', function() {
        w1.style.transform = 'scale(1.1)';
        w2.style.filter = 'blur(2px)';
        w3.style.filter = 'blur(2px)';
    });

    w1.addEventListener('mouseout', function() {
        w1.style.transform = '';
        w2.style.filter = '';
        w3.style.filter = '';
    });

    w2.addEventListener('mouseover', function() {
        w2.style.transform = 'scale(1.1)';
        w1.style.filter = 'blur(2px)';
        w3.style.filter = 'blur(2px)';
    });

    w2.addEventListener('mouseout', function() {
        w2.style.transform = '';
        w1.style.filter = '';
        w3.style.filter = '';
    });

    w3.addEventListener('mouseover', function() {
        w3.style.transform = 'scale(1.1)';
        w1.style.filter = 'blur(2px)';
        w2.style.filter = 'blur(2px)';
    });

    w3.addEventListener('mouseout', function() {
        w3.style.transform = '';
        w1.style.filter = '';
        w2.style.filter = '';
    });
};
typeEffect();
