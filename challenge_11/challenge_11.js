const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progress_bar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skip_buttons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function toggle_play() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function update_button() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(his.dataset.skip);
}

function handle_range_update() {
  video[this.name] = this.value;
}

function handle_progress() {
  const percent = (video.currentTime / video.duration) * 100;
  progress_bar.style.flexBasis = `${percent}%`;
}

function scrub() {
  const scrub_time = (e.offsetX / progress.offsetWidth) / video.duration;
  video.currentTime = scrub_time;
}

video.addEventListener('click', toggle_play);
video.addEventListener('play', update_button);
video.addEventListener('pause', update_button);
video.addEventListener('timeupdate', handle_progress);
toggle.addEventListener('click', toggle_play);
skip_buttons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handle_range_update));
ranges.forEach(range => range.addEventListener('mousemove', handle_range_update));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
