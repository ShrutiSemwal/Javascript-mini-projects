const onKeyPress = (e) => {
  const key = document.getElementById("key");
  const keyCode = document.getElementById("keyCode");
  const code = document.getElementById("code");

  e.key === " " ? (key.textContent = "SPACE") : (key.textContent = e.key);
  keyCode.textContent = e.keyCode;
  code.textContent = e.code;
};

window.addEventListener("keydown", onKeyPress);
