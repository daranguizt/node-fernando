
//a function to be executed
setTimeout(() => {
    console.log('this is the cb');
}, 1000);

const getUserByID = (id, cb) => {
    const user = {
        id, //in ES6 it uses the name as attribute
        name: 'Diego'
    }

    setTimeout(() => {
        cb(user);
    }, 1500);
}

getUserByID(10, ({id, name}) => {
    console.log(id, name);
});