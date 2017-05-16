const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let last_checked;

function handleCheck(e) {
  let inbetween = false;
  if(e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if(checkbox === this || checkbox === last_checked) {
        inbetween = !inbetween;
      }
      if(inbetween) {
        checkbox.checked = true;
      }
    });
  }
  last_checked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
