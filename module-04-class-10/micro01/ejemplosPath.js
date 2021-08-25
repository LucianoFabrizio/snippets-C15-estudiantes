const path = require('path');

console.log();
// console.log(path.resolve('foo/bar', './baz'));
// console.log();
// console.log(path.resolve('/foo/bar', '/tmp/file/'));
// console.log();
// console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
// console.log();
// console.log(path.resolve("public"));
// console.log();
console.log(path.resolve("views"));
// console.log();
// console.log(path.resolve());
// console.log();
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '/hool'))
// console.log();
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))
console.log();
console.log(path.join(__dirname, "/views"));
console.log();