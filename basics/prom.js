const func1 = () => {
    return new Promise((res, rej) => {
        let a = true;   // bool
        if(a) {
            res("I am in Function 1")
        } else {
            rej("I am reject of function 1");
        }
    })
    //return Promise.resolve();
    // return Promise.reject();
}

const func2 = () => {
    return new Promise((res, rej) => {
        let b = false;
        if(b) {
            res("I am in Function 2")
        } else {
            rej("I am reject of function 2")
        }
    })
}

const func3 = () => {
    return new Promise((res, rej) => {
        let c = true;
        if(c) {
            res("I am in Function 3")
        } else {
            rej("I am reject of function 3")
        }
    })
}

// func1()
// .then((res1) => {
//     // 
//     console.log(res1);

//     func2()
//     .then((res2) => {
//         // 
//         console.log(res2);
//         func3()
//             .then((res3) => {
//                 // 
//                 console.log(res3);
//             });
//     }).catch((rej2)=> {
//         console.log(rej2)
//     })
// })
// .catch((rej) => {
//     console.log(rej);
// })

// I am reject of function 1
func1()
    .then((res) => {
        console.log(res)
        return func2()
    })
    .then((res2) => {
        console.log(res2);
        return func3();
    })
    .then((res3) => {
        console.log(res3);
    })
    .catch((rej) => {
        console.log(rej);
    })