// const som = document.querySelector("#som")
// const usd = document.querySelector("#usd")
//
// // som.addEventListener("input",(e) =>{
// //
// //
// // const request = new XMLHttpRequest()
// // request.open("GET","data.json")
// // request.setRequestHeader("Content-Type","application/json")
// // request.send()
// // request.addEventListener("load",()=> {
// //     const data = JSON.parse(request.response)
// //     usd.value = (som.value / data.usd).toFixed(2)
// //
// //    })
// //
// // })
// const convert = (elem,target,isTrue) =>{
//     elem.addEventListener("input",()=>{
//         const request = new XMLHttpRequest()
//         request.open("GET","data.json")
//         request.setRequestHeader("Content-Type","applicstion/json")
//         request.send()
//         request.addEventListener("load",()=>{
//             const data = JSON.parse(request.response)
//             if(isTrue){
//                 target.value = (elem.value/data.usd ).toFixed(2)
//             } else {
//                 target.value = (elem.value* data.usd).toFixed(2)
//             }
//             if(elem.value ===""){
//                 target.value =""
//             }
//
//         })
//     })
//
// }
// convert (som,usd,42)
// //     convert (usd,som,"")
// const som = document.querySelector('#som')
// const usd = document.querySelector('#usd')
// const eur = document.querySelector('#eur')
// const convert = (elem, target, target2, ) => {
//     elem.oninput = () => {
//         const request = new XMLHttpRequest()
//         request.open("GET", "data.json")
//         request.setRequestHeader("Content-type", "application/json")
//         request.send()
//         request.onload = () => {
//             const response = JSON.parse(request.response)
//             target.forEach(e =>{
//                 if (target2 === 'som') {
//                     e.value = (elem.value / response[e.id]).toFixed(2)
//                 } else if (e === som) {
//                     e.value = (elem.value * response[elem.id]).toFixed(2)
//                 } else {
//                     e.value = ((elem.value * response[elem.id]) / response[e.id]).toFixed(2)
//                 }
//             })
//             if (elem.value === '') {
//                 target.forEach(e => e.value = '')
//             }
//
//             elem.value === '' && (target.forEach(e => e.value = ''))
//         }
//     }
// }
// convert(som,[usd , eur])
// convert(usd ,[som,eur] )
// convert(eur,[som,usd])



// const som = document.querySelector('#som')
// const usd = document.querySelector('#usd')
// const eur = document.querySelector('#eur')
//
// const convert = (elem, targets, target2) => {
//     elem.oninput = () => {
//         const request = new XMLHttpRequest()
//         request.open("GET", "data.json")
//         request.setRequestHeader("Content-type", "application/json")
//         request.send()
//         request.onload = () => {
//             const response = JSON.parse(request.response)
//             targets.forEach(target => {
//                 if (target2 === 'som') {
//                     target.value = (elem.value / response[target.id]).toFixed(2)
//                 } else if (target === som) {
//                     target.value = (elem.value * response[elem.id]).toFixed(2)
//                 } else {
//                     target.value = ((elem.value * response[elem.id]) / response[target.id]).toFixed(2)
//                 }
//             })
//             if (elem.value === '') {
//                 targets.forEach(target => target.value = '')
//             }
//         }
//     }
// }
//
// convert(som, [usd, eur], 'som')
// convert(usd, [som, eur], 'usd')
// convert(eur, [som, usd], 'eur')
const som = document.querySelector('#som'),
    usd = document.querySelector('#usd'),
    euro = document.querySelector('#euro')
const convert = (elem, target, target2, ) => {
    elem.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "Application/json")
        request.send()

        request.onload = () => {
            const response = JSON.parse(request.response)
            target.forEach(function(e) {
                if (target2 === 'som') {
                    e.value = (elem.value / response[e.id]).toFixed(2)
                } else if (e === som) {
                    e.value = (elem.value * response[elem.id]).toFixed(2)
                } else {
                    e.value = ((elem.value * response[elem.id]) / response[e.id]).toFixed(2)
                }
            })
            elem.value === '' && (target.forEach(e => e.value = ''))
        }
        request.onerror = () => {
            console.error("Произошла ошибка!")
        }
    }
}
convert(som,[usd,euro])
convert(usd ,[som,euro])
convert(euro,[som,usd])