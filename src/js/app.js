const collapseButtons = Array.from(document.getElementsByClassName('collapse-button'));

function showText() {
  const thisTextbox = document.getElementById(`${this.dataset.id}`);
  if (thisTextbox.classList.contains('hidden')) {
    thisTextbox.classList.remove('hidden');
  } else {
    thisTextbox.classList.add('hidden');
  }
}

for (let i = 0; i < collapseButtons.length; i += 1) {
  collapseButtons[i].onclick = showText;
}
