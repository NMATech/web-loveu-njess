document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".typing-text");
  const text = "I ❤️ Jessica Maulida Halim";
  const speed = 100; // Kecepatan ketik dalam milidetik per karakter

  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      textElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});
