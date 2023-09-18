// This function prevents the default right-click context menu
function disableRightClick(event) {
  event.preventDefault();
}

// Attach the event listener to the document
document.addEventListener("contextmenu", disableRightClick);
