// function myCypher(sentence){
//     let plainText = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','!']
//     let decipherText = ['n','e','c','l','p','g','q','s','o','z','u','w','r','b','!','d','f','m','x','k','h','a','t','y','j','i','v']
//     let array = sentence.split('')
//     let returnArr = []
//     let array[i] = decipherText[i]
//     for (i=0; i<array.length; i++){
//         returnArr.push(decipherText[i])
//     }
//     let finalString = returnArr.join()
//     return finalString
// }

// console.log(myCypher('o w!ap cmjdk!qmndsjv'))


function myCypher(sentence){
    let plainText = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', ' ']
    let decipherText = ['n','e','c','l','p','g','q','s','o','z','u','w','r','b','!','d','f','m','x','k','h','a','t','y','j','i','v', ' ']
    let result = ''
    sentence = sentence.toLowerCase()
    for (i=0;i<sentence.length;i++){
        let index = decipherText.indexOf(sentence[i])
        result += plainText[index]
    }
    return result
}

console.log(myCypher('o w!ap cmjdk!qmndsjv'))

