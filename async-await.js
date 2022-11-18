// const prom = () => {
//     return new Promise((res,rej)=>{
//         res([{
//             name: "Test"
//         }])
//     });
// }

const prom = async () => {
    // return [{name: "Test"}];
    // to return reject
    throw "Msg";
}
// let users = [];
// prom().then((res) => {
//     // users data from db
//     users = res;
// }).catch()
// //
// users.map((item) => {
//     // item
// })
//const another = async () => {
async function another() {
    try{
        let users = await prom();
        // codes
        // 1000 
    } catch(exception){
        // 
    }
}
// users