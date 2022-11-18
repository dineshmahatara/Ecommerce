const doSomething = () => {
    console.log("I am inside doSomething");

    // clouser
    const doNothing = () => {
        console.log("I am inside doNothing");
    }

    //doSomething()
    return doNothing
}


let abc = doSomething()
abc()       // I am inside doNothing




// delay 
// self delay
    // callback 
    // promise
    // async-await

// header   2sec
// left     3sec
// content  10sec
// right    2sec
// footer   1sec
        // 7 sec
        //5sec
        // 3sec
        // ...doSomething.