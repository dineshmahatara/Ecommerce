for(let i =1; i <= 7; i++){
    // iteration
    let html = "";
    for(let j = 1; j <= i; j++){
        // console.log(j);
        html += "*   ";
    }
    console.log(html)
}

let products = [
    {
        name: "iPHone 12",
        category: ["smartphones",'apple','iphone'],
        tags: ["apple",'mobile','smart-phones']
    }
];
for(let i = 0; i< products.length; i++){
    let content = products[i];
    // 
    for(let j = 0; j < content.category.length; j++){
        console.log(content.category[j]);
    }
}
/**
 *  *
 *  *   *
 *  *   *   *
 *  *   *   *   *
 *  *   *   *   *   *
 *  *   *   *   *   *   *
 *  *   *   *   *   *   *   *
 */
