const btnElm = document.querySelector("#btn");

btnElm.addEventListener("click", () => {

  speechSynthesis.speak(new SpeechSynthesisUtterance(text.value));
});
