const broadcastChannel = new BroadcastChannel('channel-name');

document.getElementById('publishBroadcastChannel').addEventListener('click', () => {
  messageResult.innerText = 'Message has been published via BroadcastChannel';
  broadcastChannel.postMessage(`Message from window ${windowId} published via BroadcastChannel`);
});

broadcastChannel.onmessage = (event) => {
  messageResult.innerText = event.data;
};