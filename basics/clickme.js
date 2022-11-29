let counter = 0;
const clickMe = () => {
    if(counter === 0) {
        let name = prompt("Enter Your name: ");
        // first click
        setTimeout(()=>{
            alert("You clicked for: "+counter)
            counter = 0
            document.getElementById('counter').innerHTML = counter;

        },2000)
    }
    counter++;
    document.getElementById('counter').innerHTML = counter;
}