
console.log('Program Start'); //1

setTimeout(() => {
    console.log('First timeout'); // 5
}, 3000);
setTimeout(() => {
    console.log('Second timeout'); //3 
}, 0);
setTimeout(() => {
    console.log('Third timeout'); //4
}, 0);

console.log('Program End'); //2 