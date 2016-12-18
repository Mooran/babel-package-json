import net from 'net'

net.createServer((sock) => {
  console.log(`CONNECTED: ${sock.remoteAddress}:${sock.remotePort}`)
  sock.on('data', function(data) {
        console.log(`DATA ${sock.remoteAddress} : ${data}`)
        sock.write(`You said "${data}"`)
    });
  sock.on('close', function(data) {
        console.log(`CLOSED ${sock.remoteAddress} : ${data}`)
    });
}).listen({
  host: 'localhost',
  port: 80,
  exclusive: true
});

