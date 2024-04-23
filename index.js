
const texts = [
    "Halooowww!!",
    "Selamat datang di Website Saya,",
    "Sebuah kehormatan bisa menyambut anda disini 😊"
]; // Teks yang akan dianimasikan

let textIndex = 0;
let charIndex = 0;
let delay = 50;
let isTyping = true;

function typeWriter() {
    const currentText = texts[textIndex];
    if (charIndex < currentText.length && isTyping) {
        if (charIndex === 0) {
            document.querySelector('.animated-text').innerHTML += (textIndex !== 0 ? '<br>' : '') + currentText.charAt(charIndex);
        } else {
            document.querySelector('.animated-text').innerHTML += currentText.charAt(charIndex);
        }
        charIndex++;
        setTimeout(typeWriter, delay);
    } else {
        if (textIndex < texts.length - 1) {
            textIndex++;
            charIndex = 0;
            setTimeout(typeWriter, delay);
        } else {
            isTyping = false;
        }
    }
}

window.addEventListener('DOMContentLoaded', typeWriter);
