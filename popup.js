document.addEventListener('DOMContentLoaded', function () {
  const blurToggle = document.getElementById('blurToggle');

  chrome.storage.sync.get('blurEnabled', function (data) {
    blurToggle.checked = data.blurEnabled;
  });

  blurToggle.addEventListener('change', function () {
    chrome.storage.sync.set({ blurEnabled: blurToggle.checked });
  });
});
