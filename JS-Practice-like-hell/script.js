// when the button is clicked change the paragraph content
var btn = document.querySelector("button");
var p = document.querySelector("p");

btn.addEventListener("click", ()=>{
    p.textContent = "HI Nandish Jai siya ram"
})





//swap the images
var img1 = document.querySelector("#one");
var img2 = document.querySelector("#two");

document.querySelector("#btn2")
.addEventListener("click", ()=>{
    var temp = img1.src;
    img1.src = img2.src;
    img2.src = temp;
})


//form handling

var inps = document.querySelectorAll("input[type = 'text']");
var form = document.querySelector("form");
var error = document.querySelector("#error");

form.addEventListener("submit", function(ev){
    ev.preventDefault();

    for(var i = 0;i<inps.length;i++){
        if(inps[i].value.trim() === ''){
            error.textContent = "Error hei bhai"
            error.style.color = 'red'
            break;
        }
    }
    if(inps[0].value.trim() != ''  && inps[1].value.trim() != ''){
        error.textContent = '';
    }

   
})




//add and remove buttons


var add = document.querySelector("#add")
var remove = document.querySelector("#remove")
var add_new = document.querySelector("#add-new")
var list = document.querySelector("ul")

var li;

var arr = [];


add.addEventListener("click", ()=>{
    if(add_new.value.trim()===''){}
    // else{  value = add_new.value;
    //   list.innerHTML += `<li> ${value} </li>`
    // }

    else{
        li = document.createElement('li')

      

        li.textContent =  add_new.value;

        list.appendChild(li);

        add_new.value = '';

        arr.push(li)

    }
})


remove.addEventListener("click", ()=>{
   list.removeChild(arr[arr.length - 1])
   arr.length -=1;
})



