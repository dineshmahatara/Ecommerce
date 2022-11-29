// loop - repetation - iteration 
// table design 
    // user information 
        // row 
// for, while
let i = 1;          // i = 1

while(i<=100){       // 11 <= 10
    // loop body

    if(i % 2 !== 0){
        console.log(i)  // 10
    }
    
    // i = i +2;            // 11
    i++            // 11
    
}

let products = [
    {
        name: "Product 1",
        price: 1000,
        discount: 10,
        after_dis: null
    },{
        name: "Product 2",
        price: 2000,
        discount: 10,
        after_dis: null
    },
    {
        name: "Product 3",
        price: 1500,
        discount: 5,
        after_dis: null
    },
    {
        name: "Product 4",
        price: 2300,
        discount: 7,
        after_dis: null
    },
    {
        name: "Product 5",
        price: 1000,
        discount: 0,
        after_dis: null
    }
]


// calculate 
///
let j = 0;
let size = products.length;

while(j < size) {
    // 
    products[j].after_dis = products[j].price - products[j].price * products[j].discount / 100;
    j++;
}

console.log(products);  


let students= [
    {
        name: "Student One",
        marks_obt: 230,
        total: 500,
        percentage: 0,
        division: ""
    },
    {
        name: "Student Two",
        marks_obt: 300,
        total: 500,
        percentage: 0,
        division: ""
    },
    {
        name: "Student Two",
        marks_obt: 300,
        total: 500,
        percentage: 0,
        division: ""
    }
]

const getDivision = (percentage) => {
    if(percentage >= 80) {
        return "Distinction "
    } else if(percentage >= 60) {
        return "First Division "
    } else if(percentage >= 45) {
        return "Second Division "
    } else if(percentage >= 32) {
        return "Third Division "
    } else {
        return "Failed"
    }
}

i = 1;
let html_collect = "";

for(let std of students){
// while(i < students.length) {
    percentage = (std.marks_obt/std.total*100);

    std.division = getDivision(percentage)
    
    std.percentage = std.percentage.toFixed(4);
    html_collect += "<tr>"
    html_collect += "<td>"+(i++)+"</td>";
    html_collect += "<td>"+(std.name)+"</td>";
    html_collect += "<td>"+(std.marks_obt)+"</td>";
    html_collect += "<td>"+(std.total)+"</td>";
    html_collect += "<td>"+(std.percentage)+"</td>";
    html_collect += "<td>"+(std.division)+"</td>";
    html_collect += "</tr>"
    
}
document.getElementById('students').innerHTML = html_collect;