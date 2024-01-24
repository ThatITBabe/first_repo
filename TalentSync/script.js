var btns = document.querySelectorAll('.btn')
var toggle = document.querySelectorAll(".toggle")
var p = document.querySelectorAll(".p")

btns.forEach((btn, i) =>{
  var changeicons = true;
    btn.addEventListener("click", function(){
        console.log(btn.src)
        if(changeicons === true){
            changeicons = false
            btn.src = "img/minus-circle.svg";
            toggle[i].style.background = "#EAECF0";
            p[i].style.display = "inline";
        }
        else{
            changeicons = true;
            btn.src = "img/plus-circle.svg";
            toggle[i].style.background = "none";
            p[i].style.display = "none";
        }
    })
})

  
var bar = document.getElementById("bar");
var navbar = document.querySelector(".navbar");
var header = document.querySelector(".header-2");
var head = document.querySelector(".mobile");

bar.onclick = () => {
    
    if(bar.className == "fa fa-bars" &&
      navbar.style.display == "none"){
          bar.className = "fa fa-times";
          navbar.style.display = "initial";
      }
      else{
        bar.className = "fa fa-bars";
        navbar.style.display = "none";
      }

}

window.addEventListener("scroll",  () => {
    if(bar.className == "fa fa-times" &&
       navbar.style.display == "initial"){
        bar.className = "fa fa-bars";
        navbar.style.display = "none";}
        else{
            bar.className == "fa fa-times";
            navbar.style.display == "initial";
        }
    }) 
    window.onscroll = () =>{
        if(window.scrollY > 150){
        header.className = "nav flex header-2 active";
        head.className = "mobile flex active";
    }
    else{
        header.className = "nav header-2 flex";
        head.className = "mobile flex";
    }
    }    
    
    
    var now, year;
now = new Date();
year = now.getFullYear();

document.querySelector(".year").textContent = `${year}`;




// var Mobile = document.getElementById = ("Mobile")
// function showMenu() {
//     Mobile.style.right = "0";
// }
// function hideMenu() {
//     Mobile.style.right = "-200px";
// }