let counter = 0;
let users = [];
const clickme = () => {
    // console.log(counter);
    if(counter === 0) {
        let name = prompt("Enter your name: ");
        // user
        // password
        setTimeout(() => {
            users.push({
                name: name,
                count: counter
            });
            counter = 0;
            document.getElementById('counter').innerHTML = counter;
            showTable()
        }, 5000);
    }
    counter++;
    document.getElementById('counter').innerHTML = counter;
}
const showTable = () => {
    let html_table = "";
    users.map((item) => {
        html_table += "<tr>"
        html_table += "<td>"+item.name+"</td>"
        html_table += "<td>"+item.count+"</td>"
        html_table += "<td>********</td>"
        html_table += "</tr>"
    })
    document.getElementById('users').innerHTML = html_table
}