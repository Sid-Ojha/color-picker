const box=document.querySelectorAll(".boxes")
const body= document.querySelector("body")
box.forEach(function(item){
    item.addEventListener('click',function(e){
        if(e.target.id== 'red')
        body.style.backgroundColor= 'red'
        else if(e.target.id== 'yellow')
        body.style.backgroundColor= 'yellow'
        else if(e.target.id== 'green')
        body.style.backgroundColor= 'green'
        else if(e.target.id== 'blue')
        body.style.backgroundColor= 'blue'
        else if(e.target.id== 'orange')
        body.style.backgroundColor= 'orange'
    })
})


// line 3 explain
//  JavaScript
// array.forEach(function(item) {
//      do something with item
// });