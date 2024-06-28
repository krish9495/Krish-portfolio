const dynamicText = document.querySelector(".dynamic-text");
const words = ["Web Developer","UI/UX Designer","Software Developer", "Video Editor", "Cinematographer"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    if (!isDeleting) {
        dynamicText.textContent = currentWord.substring(0, charIndex);
        charIndex++;
        if (charIndex === currentWord.length) {
            setTimeout(() => { isDeleting = true; }, 2000); // Pause before deleting
        }
    } else {
        dynamicText.textContent = currentWord.substring(0, charIndex);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }
    setTimeout(typeEffect, isDeleting ? 100 : 200);
}

typeEffect();

