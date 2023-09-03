/*
 * WhatsApp Blur Extension
 * Created by Sorabh Srivastava
 * This code is provided under the MIT License and can be freely used by others.
 */
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.blurEnabled) {
    // Enable blur effect logic here
    addBlurEffect();
  } else {
    // Disable blur effect logic here
    removeBlurEffect();
  }
});

// Define your addBlurEffect and removeBlurEffect functions as needed
function addBlurEffect() {
  // Your blur effect code here
  const parentElements = document.querySelectorAll('._8nE1Y, ._13jwn, ._1AOLJ, ._1jHIY');

  parentElements.forEach((parentElement) => {
    const nestedDivsToBlur = parentElement.querySelectorAll('div'); // Select all nested divs

    nestedDivsToBlur.forEach((divElement) => {
      divElement.style.filter = 'blur(5px)'; // Adjust blur strength as needed

      divElement.addEventListener('mouseenter', function () {
        divElement.style.filter = 'none'; // Remove blur on hover
      });

      divElement.addEventListener('mouseleave', function () {
        divElement.style.filter = 'blur(5px)'; // Reapply blur on mouse leave
      });
    });
  });
}

function removeBlurEffect() {
  // Remove blur effect code here
  const elementsToRemoveBlur = document.querySelectorAll('._8nE1Y, ._13jwn, ._1AOLJ, ._1jHIY');

  elementsToRemoveBlur.forEach((element) => {
    const nestedDivsToBlur = element.querySelectorAll('div'); // Select all nested divs

    nestedDivsToBlur.forEach((divElement) => {
      divElement.style.filter = 'none'; // Remove blur effect
    });
  });
}
