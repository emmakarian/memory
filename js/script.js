let section = document.querySelector('section')

let div = document.createElement('div')
section.append(div)
div.classList.add('mainDiv')

let arr = []
let show = []

function forBackgrouns(){

    const images = ["url(./images/1.jpg)", "url(./images/2.jpg)", "url(./images/3.jpg)", "url(./images/4.jpg)", "url(./images/5.jpg)", "url(./images/6.jpg)"]

    const randPics = [...images, ...images].sort(() => Math.random() - 0.5)
    
    randPics.forEach((img, i) => {
        div.innerHTML += `
            <div class='mini' style='background-image: ${img}' onclick='checkImg(this, ${i})'></div>
        ` 
    })
    
}

function checkImg(item, i) {
    let items = document.querySelectorAll('.mini')

    if(arr.length < 2){
        item.classList.add('show')
        arr.push(i)
    } else {
        return
    }
    console.log(arr);
    if(arr.length === 2){
        var first = [items[arr[0]], arr[0]]
        var second = [items[arr[1]], arr[1]]

        if(first[0].style.backgroundImage === second[0].style.backgroundImage){
            
            first[0].classList.add('opened')
            second[0].classList.add('opened')
        } else {
            setTimeout(() => {
                first[0].classList.remove('show')
                second[0].classList.remove('show')
            }, 1000)
        }
        arr = []
    }
}
forBackgrouns()

// function checkImg(item, i){
//     let items = document.querySelectorAll('.mini')
    
//     if(arr.length < 2) {
//         item.classList.add('show')
//         arr.push(i)
//     }else{
//         return
//     }
    
//     if(arr.length === 2){
//         var first = items[arr[0]]
//         var second = items[arr[1]]
//     }
    
//     setTimeout(() => {
//         if(first.style.backgroundImage != second.style.backgroundImage){
//             first.classList.remove('show')
//             second.classList.remove('show')
//             first.classList.add('opened')
//             second.classList.add('opened')
//         }
//         arr = []
//     }, 1000)
// }
