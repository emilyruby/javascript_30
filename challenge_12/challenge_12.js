const pressed = [];
const secret_code = "emily";

window.addEventListener('keyup', (e) => {
  pressed.splice(-secret_code.length -1, pressed.length - secret_code.length);
  if (pressed.join('').includes(secret_code)) {
    console.log('luv u');
  }
});
