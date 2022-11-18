/**
 *  1    1    1    1    1
 

 *  1    1    1    1    1
 *  2                   2   
 *  3                   3   
 *  4                   4   
 *  5    5    5    5    5
 * 
 * 
 * 
 *  1
 *  1   2
 *  1   2   3
 *  1   2   3   4
 *  1   2   3   4   5
 * 
 * 
 * 
 *  1   2   3   4   5
 *  1   2   3   4
 *  1   2   3
 *  1   2
 *  1
 * 
 * 
 *  1
 *  2   3
 *  3   4   5
 *  6   7   8   9
 *  10   11   12   13
 *  14   15   16   17   18
 * 
 * 
 * P
 * P    R
 * P    R   O
 * P    R   O   G
 * P    R   O   G   R
 * P    R   O   G   R   A
 * P    R   O   G   R   A   M
 * P    R   O   G   R   A   M   M
 * P    R   O   G   R   A   M   M   I
 * P    R   O   G   R   A   M   M   I   N
 * P    R   O   G   R   A   M   M   I   N   G
 * 
 * 
 * 
 */

for(let j =1; j <= 5; j++){
    let html = "";    
    for(i=1; i <= 5; i++){
        html += j+"    ";
    }
    console.log(html);
}


let product = {
    // ...,
    reviews: [
        {
            rate: 5,
            rated_by: "Sandesh",
            verified: true,
            comment: "Ver good",
            image: ["image.png",'image2.png'],
            like_counter: 0,
            date: "2022-10-20"
        }
    ]
}

for(let obj of product.reviews) {
    // .....
    // image 
    for(let image of obj.image) {
        // image 
    }
}