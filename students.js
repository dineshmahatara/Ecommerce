/**
 * <tr>
                <td>1</td>
                <td>Std One</td>
                <td>stdone@test.com</td>
                <td>Kathmandu</td>
                <td>+977 9801234567</td>
                <td>MERN Stack</td>
            </tr>
 * 
 * 
 */

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

let html_txt = "";
// let i = 0;
// while(i < stds.length) {    // last index = size-1
//     // html_txt += "<tr><td>"+(i+1)+"</td><td>"+stds[i].name+"</td><td>"+stds[i].email+"</td><td>"+stds[i].address+"</td><td>"+stds[i].phone+"</td><td>"+stds[i].class+"</td></tr>";
//     html_txt += "<tr>";
//     html_txt += "<td>"+(i+1)+"</td>";
//     html_txt += "<td>"+stds[i].name+"</td>";
//     html_txt += "<td>"+stds[i].email+"</td>";
//     html_txt += "<td>"+stds[i].address+"</td>";
//     html_txt += "<td>"+stds[i].phone+"</td>";
//     html_txt += "<td>"+stds[i].class+"</td>";
//     html_txt += "<td>"+stds[i].marks+"</td>";
//     // calculate percent
//     stds[i].percent = stds[i].marks/5;
    
//     html_txt += "<td>"+stds[i].percent+"% </td>";
//     if(stds[i].percent >= 80) {
//         stds[i].division = "Distinction";
//     } else if(stds[i].percent >= 60) {
//         stds[i].division = 'First';
//     } else if(stds[i].percent >= 45) {
//         stds[i].division = 'Second';
//     } else if(stds[i].percent >= 32) {
//         stds[i].division = 'Third';
//     } else {
//         stds[i].division = "Failed"
//     }
//     // calculate division
//     html_txt += "<td>"+stds[i].division+"</td>";
//     html_txt += "</tr>";
//     i++
// }

// (), /,*,  +,-

// for(let i = 0; i < stds.length; i++) {
    let i = 1;
for(let std of stds){
    html_txt += "<tr>";
    html_txt += "<td>"+(i++)+"</td>";
    html_txt += "<td>"+std.name+"</td>";
    html_txt += "<td>"+std.email+"</td>";
    html_txt += "<td>"+std.address+"</td>";
    html_txt += "<td>"+std.phone+"</td>";
    html_txt += "<td>"+std.class+"</td>";
    html_txt += "<td>"+std.marks+"</td>";
    // calculate percent
    std.percent = std.marks/5;

    html_txt += "<td>"+std.percent+"% </td>";
    if(std.percent >= 80) {
        std.division = "Distinction";
    } else if(std.percent >= 60) {
        std.division = 'First';
    } else if(std.percent >= 45) {
        std.division = 'Second';
    } else if(std.percent >= 32) {
        std.division = 'Third';
    } else {
        std.division = "Failed"
    }
    // calculate division
    html_txt += "<td>"+std.division+"</td>";
    html_txt += "</tr>";
}

// html_txt += "<tr><td>2</td><td>"+stds[1].name+"</td><td>"+stds[1].email+"</td><td>"+stds[1].address+"</td><td>"+stds[1].phone+"</td><td>"+stds[1].class+"</td></tr>";
// html_txt += "<tr><td>3</td><td>"+stds[2].name+"</td><td>"+stds[2].email+"</td><td>"+stds[2].address+"</td><td>"+stds[2].phone+"</td><td>"+stds[2].class+"</td></tr>";
// html_txt += "<tr><td>4</td><td>"+stds[3].name+"</td><td>"+stds[3].email+"</td><td>"+stds[3].address+"</td><td>"+stds[3].phone+"</td><td>"+stds[3].class+"</td></tr>";

document.getElementById('stds').innerHTML = html_txt;





// WAP to create a product variable having atleast 5 products as an object
// Each product should contain: name, category, brand, price and discount in percentage
// using For loop print the value in a table (Using html) to display in the following format:
// 
// S.N  Product Name    Category    Brand   Price(In NPR)   Discount(%)     After Discount
