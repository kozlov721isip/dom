//1 
// "use strict";
// let input=document.querySelector('#input')
// let p=document.querySelector('#p')
// input.addEventListener('blur',function func(){
//     p.textContent+=input.value
// })


//2 
// "use strict";
// let elems = document.querySelectorAll('.elem');
// let elem1 = document.querySelector('.elem1');
// let button = document.querySelector('#button');
// button.addEventListener("click", function(){
// 	let sum = 0;
// 	for(let i=0; i<=elems.length-1; i++){
// 		sum += Number(elems[i].value)
// 	}
// 	elem1.textContent += sum;
// })


// 3 
// "use strict";
// let elem = document.querySelector('.elem');
// let p = document.querySelector('.elem1');
// elem.addEventListener('blur', function(){
//     let arr = elem.value.split("")
//     let sum = 0;
//     for(let i = 0; i<=arr.length-1; i++){
//         sum += +arr[i]
//     }
//     p.textContent = sum
// })


// 4 
// "use strict";
// let elem = document.querySelector('.elem');
// let p = document.querySelector('.elem1');
// elem.addEventListener('blur', function(){
//     let arr = elem.value.split(",")
//     let sum = 0;
//     for(let i = 0; i<=arr.length-1; i++){
//         sum += +arr[i]
//     }
//     p.textContent = sum/arr.length
// })


// 5 
// "use strict";
// let elem1 = document.querySelector('.elem1');
// let elems = document.querySelectorAll('.elem');
// elem1.addEventListener('blur', function(){
//     let arr=elem1.value.split(' ')
//     for(let i=0, elem = 0; i<= arr.length-1, elem<=elems.length-1; i++, elem++){
//             elems[elem].value = arr[i]
//         }
// })


//6 
// "use strict";
// let elem = document.querySelector('.elem');
// elem.addEventListener('blur', function(){
//     let arr = elem.value.split(' ')
//     let arr1 = []
//     for(let i =0; i<arr.length; i++){
//         arr1.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1))
//     }
//     elem.value = arr1.join(" ")
// })


// 7 
// "use strict";
// let elem = document.querySelector('.elem');
// let elem1 = document.querySelector('.elem1');
// elem.addEventListener('blur', function(){
//     elem1.textContent = elem.value.split(" ").length
// })

// 8 
// "use strict";
// let elem = document.querySelector('.elem');
// elem.addEventListener('blur', function(){
//     elem.value = elem.value.split(".").reverse().join("-")
// })


// 9 
// "use strict";
// let elem = document.querySelector('.elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
//     if(elem.value.split("").reverse().join("") == elem.value.split("").join("")){
//         elem.value= "палиндром"
//     }
//     else{
//         elem.value = "не палиндром"
//     }
//     })


// 10 
// "use strict";
// let elem = document.querySelector('.elem');
// elem.addEventListener('blur', function(){
//     let arr = elem.value.split("")
//     arr.find(function(elem){
//         res = elem == "3"
//         return res
//     })
//     console.log(res)
// })


// 11 
// "use strict";
// let elems = document.querySelectorAll('.elem');
// let button = document.querySelector('#button');
// button.addEventListener("click", function(){
// 	for(let i=0; i<=elems.length-1; i++){
// 		elems[i].textContent = elems[i].textContent + (i+1)
// 	}
// })

// 12 
// "use strict";
// let a = document.querySelectorAll('.a');
// let button = document.querySelector('#button')
// button.addEventListener("click", func)
// function func(){
//     for(let elem of a){
// 		elem.textContent  += `(${elem.href})`;
// 	}
// }

// 13 
// "use strict";
// let a = document.querySelectorAll('.a');
// let button = document.querySelector('#button')
// button.addEventListener("click", func)
// function func(){
//     for(let elem of a){
// 		if(elem.href.split("").slice(0, 7).join("") == "http://"){
//             elem.innerHTML +=  "&rarr;" ;
//         }
// 	}
// }

// 14 
// "use strict";
// let elems = document.querySelectorAll('.elem');
// for(let elem of elems){
//     elem.addEventListener("click", function(){
//         elem.textContent**=2
//     })
// }


// 15 
// "use strict";
// let elem = document.querySelector('.elem');
// elem.addEventListener("blur", function(){
//     let arr = elem.value.split(".").reverse()
//     let [year, month, dayy] = arr 
//     let date = new Date(year, month-1, dayy)
//     let day  = date.getDay();
//     let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//     elem.value =  days[day]
// })


// 16 
// "use strict";
// let elem = document.querySelector('.elem');
// let button1 = document.querySelector('#button1')
// let button2 = document.querySelector('#button2')
// button1.addEventListener("click", function(){
//     if(elem.value > 0){
//         elem.value++
//     }
// })
// button2.addEventListener("click", function(){
//     if(elem.value > 0){
//         elem.value--
//     }
// })


// 17 
// "use strict";
// let elems = document.querySelectorAll('.elem');
// let elem1 = document.querySelector('.elem1');
// for(let elem of elems){
//     elem.addEventListener("click", func)
// }
// let count = 0;
// function func(){
//     count++
//     elem1.value = count  
// }

// 18 
// "use strict";
// let divs = document.querySelectorAll('.div');
// let button = document.querySelector('#button');
// button.addEventListener("click", function(){
//     for(let div of divs){
//         if(div.textContent.length > 10 )
//         div.textContent =  div.textContent.slice(0, 10) + "..."
//     }
// })


// 19 
// "use strict";
// let elem = document.querySelector('.elem');
// let button = document.querySelector('#button');
// button.addEventListener("click", function(){
//    let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
//    let res = "";
//    for(let i = 0; i<8; i++){
//     res += symbols.charAt(Math.floor(Math.random() * symbols.length))
//    }
//    elem.value = res

// })

// 20 
// "use strict";
// let elem = document.querySelector('.elem');
// let button = document.querySelector('#button');
// button.addEventListener("click", function(){
//    let res = "";
//    for(let i = 0; i < elem.value.length; i++){
//     res += elem.value.charAt(Math.floor(Math.random() * elem.value.length))
//    }
//    elem.value = res

// })


// 21 
// "use strict";
// let elem = document.querySelector('.elem');
// let button = document.querySelector('#button');
// let elem1 = document.querySelector('.elem1');
// button.addEventListener("click", function(){
//    elem1.textContent = (elem.value -32)*5/9
// })



// 22 
// "use strict";
// let elem = document.querySelector('.elem');
// let button = document.querySelector('#button');
// let elem1 = document.querySelector('.elem1');
// button.addEventListener("click", function(){
//     let res = 1;
//    for(let i = 1; i<=elem.value; i++){
//     res *=i
//    }
//    elem1.textContent = res;
// })


// 23 
// "use strict";
// let a = document.querySelector('.a');
// let b = document.querySelector('.b');
// let c = document.querySelector('.c');
// let button = document.querySelector('#button');
// let elem1 = document.querySelector('.elem1');
// button.addEventListener("click", function(){
//     let d = b.value**2 - 4*a.value*c.value
//     if(d>0){
//         let x1 = (-(b.value) + Math.sqrt(d))/2*a.value
//         let x2 = (-(b.value) - Math.sqrt(d))/2*a.value
//         elem1.textContent = `Корни: ${x1}, ${x2}`
//     }
//     else if(d == 0){
//         let x1 = -(b.value)/(2*a.value)
//         elem1.textContent = `Корень: ${x1}`
//     }
//     else{
//         elem1.textContent = `Нет корней`
//     }
// })