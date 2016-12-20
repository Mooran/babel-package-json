
// const buf1 = Buffer.from('钟');

// console.log(buf1.toString());

// On Windows Only ...
const spawn = require('child_process').spawn;
const bat = spawn('cmd.exe', ['/c', 'my.bat']);

bat.stdout.on('data', (data) => {
  console.log(data.toString());
});

bat.stderr.on('data', (data) => {
  console.log(data);
});

bat.on('exit', (code) => {
  console.log(`Child exited with code ${code}`);
});

// OR...
// const exec = require('child_process').exec;
// exec('my.bat', (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(stdout);
// });

// Script with spaces in the filename:
// const bat = spawn('"my script.cmd"', ['a', 'b'], { shell:true });
// or:
// exec('"my script.cmd" a b', (err, stdout, stderr) => {
//   // ...
// });