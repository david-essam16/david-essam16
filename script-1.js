// var request = new XMLHttpRequest()
// request.open('GET', 'https://jsonplaceholder.typicode.com/users')
// request.send()
// request.addEventListener('readystatechange', function () {
//     if (request.readyState == 4) {
//         var response = JSON.parse(request.response)
//         for (var user of response) {



//             var h1 = document.createElement('h1')
//             h1.innerText = user.name
//             document.body.appendChild(h1)

//             var a = document.createElement('a')
//             a.innerText = user.email
//             a.href = 'mailto:' + user.email
//             a.style.color = 'red'
//             document.body.appendChild(a)




//         }

//     }
// })







// var request = new XMLHttpRequest()
// request.open('GET', 'https://dummyjson.com/products')
// request.send()

// request.addEventListener('readystatechange', function () {

//     if (request.readyState == 4) {

//         var response = JSON.parse(request.response)

//         for (var prd of response.products) {


//             var div = document.createElement('div')
//             div.style.width = '200px'
//             div.style.display = 'inline-block'
//             div.setAttribute('id', prd.id)

//             var img = document.createElement('img')
//             img.src = prd.thumbnail
//             div.appendChild(img)



//             var p = document.createElement('p')
//             p.innerText = prd.title
//             div.appendChild(p)


//             var p = document.createElement('p')
//             p.innerText = prd.price
//             div.appendChild(p)


//             document.body.appendChild(div)



//         }


//     }

// })








var arr = [100, 200, 300]
var obj = {
    name: 'ahmed',
    age: 30
}



localStorage.setItem('email', 'sayeh@yahoo.com')
localStorage.setItem('arr', JSON.stringify(arr))
localStorage.setItem('obj', JSON.stringify(obj))





console.log(JSON.parse(localStorage.getItem('obj')))





localStorage.removeItem('email')




sessionStorage.setItem('email', 'sayeh@yahoo.com')










