const inputs = document.querySelectorAll('.controls input');

function handle_update() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handle_update));
inputs.forEach(input => input.addEventListener('mousemove', handle_update));
