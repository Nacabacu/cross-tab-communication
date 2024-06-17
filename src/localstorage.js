const CHANNEL_NAME = 'localstorage-channel-name';

document.getElementById('publishLocalStorage').addEventListener('click', () => {
  messageResult.innerText = 'Message has been published via LocalStorage';
  localStorage.setItem(CHANNEL_NAME, `Message from window ${windowId} published via LocalStorage`);
});

window.addEventListener('storage', (event) => {
  if (event.key === CHANNEL_NAME) {
    messageResult.innerText = event.newValue;
  }
});