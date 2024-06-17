const sharedWorker = new SharedWorker('./src/worker.js');

document.getElementById('publishSharedWorker').addEventListener('click', () => {
  messageResult.innerText = 'Message has been published via SharedWorker';
  sharedWorker.port.postMessage(`Message from window ${windowId} published via SharedWorker`);
});

sharedWorker.port.onmessage = (event) => {
  messageResult.innerText = event.data;
};