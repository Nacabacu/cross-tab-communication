let ports = [];

onconnect = function(e) {
  const currentPort = e.ports[0];

  ports.push(currentPort);

  currentPort.onmessage = function(event) {
    const message = event.data;

    ports.forEach(port => {
      if (currentPort !== port) {
        port.postMessage(message);
      }
    });
  };
};