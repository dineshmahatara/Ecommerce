const doSomething = (cb) => {
    console.log("I am inside doSomething");
    cb();
}

const doNothing = () => {
    console.log("I am inside doNothing");
}

doSomething(doNothing);

doSomething(()=>{
    console.log("I am after doSomething");
})

// .insertOne({}, () => {
//     console.log("Data stored")
// })  // async

let stds = [
    {
        id: 1,
        name: "Std one",
        email: "stdone@test.com",
        address: "Kathmandu",
        phone: "+977 9876543210",
        class: "MERN stack",
        marks: 230,
        percent: 0,
        division: null
    },
    {
        id: 2,
        name: "Std Two",
        email: "stdtwo@test.com",
        address: "Lalitpur",
        phone: "+977 9876543210",
        class: "MERN stack",
        marks: 340,
        percent: 0,
        division: null
    },
    {
        id: 3,
        name: "Std Three",
        email: "stdthree@test.com",
        address: "Bhaktapur",
        phone: "+977 9876543210",
        class: "MERN stack",
        marks: 400,
        percent: 0,
        division: null
    },
    {
        id: 4,
        name: "Std Four",
        email: "stdfour@test.com",
        address: "Lalitpur",
        phone: "+977 9876543210",
        class: "PHP",
        marks: 350,
        percent: 0,
        division: null
    }
    ,
    {
        id: 5,
        name: "Std Five",
        email: "stdFive@test.com",
        address: "Banepa",
        phone: "+977 9876543210",
        class: "PHP",
        marks: 358,
        percent: 0,
        division: null
    }
];

stds.map((detail)=>{
    // detail 
});

// let php_stds = [];  //


// loop 
for(let val of stds) {

}

// stds.map((val) => {
//     if(val.class === "PHP") {
//         php_stds.push(val);
//     }
// })
let php_stds = stds.filter((val) => (val.class === 'PHP'))
// stds array 
// populate php_stds => all students having class = php
// end loop
console.log(php_stds);