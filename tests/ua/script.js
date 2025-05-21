const input = document.querySelector('input');
const button = document.querySelector('button');
function focusinput() {
  input.focus();
  input.select();
}
button.onclick = focusinput;
