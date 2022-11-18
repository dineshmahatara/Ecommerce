const func1 = () => {
    return Promise.resolve("I am resolve of 1");
}

const func2 = () => {
    return Promise.reject("I am reject of 2");
}

const func3 = () => {
    return Promise.resolve("I am resolve of 3");
}

// import data
// let result = 
let all_promise = [func1(), func2(), func3()];   // 
//Promise.all(all_promise)
Promise.allSettled(all_promise)
.then((resolve) => {
    console.log(resolve);
})
.catch((rej) => {
    console.log(rej);
})
