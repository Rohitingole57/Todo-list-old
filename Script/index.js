document.querySelector('form').addEventListener('submit',myFunction);

// var todoArr;

// if(localStorage.getItem("todoData")== null) {
//     todoArr = [];
// } else {
//     todoArr = JSON.parse(localStorage.getItem("todoData"));
// }

var todoArr = JSON.parse(localStorage.getItem("todoData")) || [];

//  console.log(todoArr)

function myFunction() {
    event.preventDefault()
    console.log("inside function");
    var name = document.querySelector("#name").value;
    var qty = document.querySelector("#qty").value;
    var priority = document.querySelector("#priority").value;
    // console.log(name, qty, priority);
    
    var todoObj = {
        itemName: name,
        itemQty: qty,
        itemPriority: priority
    };
    
    todoArr.push(todoObj);
    // console.log(todoArr);
    localStorage.setItem("todoData",JSON.stringify(todoArr))
}
//Bugs
//1.whenever page is refreshing array is empty. solution get some localstorage initially
//2.when keey is not present -pushing into null will throw error