function makeDialog() {
  const dialogElement = document.createElement('dialog');
  // polyfill
  if(typeof dialogElement.showModal === "undefined") {
    dialogPolyfill.registerDialog(dialogElement);
  }
  // dismiss modal when clicking on backdrop
  dialogElement.addEventListener("click", (e) => {
    var rect = e.target.getBoundingClientRect();
    var minX = rect.left + e.target.clientLeft;
    var minY = rect.top + e.target.clientTop;
    if ((e.clientX < minX || e.clientX >= minX + e.target.clientWidth) ||
        (e.clientY < minY || e.clientY >= minY + e.target.clientHeight)) {
      e.target && e.target.close && e.target.close();
    }
  });
  // add .modal method that accepts html
  dialogElement.openModal = function(html) {
    this.innerHTML = html;
    this.showModal();
  }
  document.body.appendChild(dialogElement);
  return dialogElement;
}
