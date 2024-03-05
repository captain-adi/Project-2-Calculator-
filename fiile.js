console.log("HII");
console.log(Array.from("helo").pop());
let inp = document.getElementById("inp");
let string = "";
let x = document.querySelectorAll(".btn");
x.forEach(element => {
   element.addEventListener("click", function (e) {

      if (element.innerHTML == "=") {
         string = eval(string);
         inp.value = string;
      }
      else if(element.innerHTML == "CE") {
        string = string.substring(0,string.length -1 ) ;
      inp.value = string;
       }
      else {
         string += element.innerHTML;
         inp.value = string;
      }
    
      if (element.innerHTML == "C") {
         string = "";
         inp.value = string;
      }
    


   })
});
