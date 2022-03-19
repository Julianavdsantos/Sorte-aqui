function copied() {
  let content = document.getElementById('result').value;

  content.ariaSelected();
  document.execCommand('copy');

  alert("Copied!");
}
