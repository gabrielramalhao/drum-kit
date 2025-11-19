window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`div[data-key="${e.code}"]`);
  key.classList.add("key-pressed");
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  setTimeout(() => {
    key.classList.remove("key-pressed");
  }, 1000);
});
