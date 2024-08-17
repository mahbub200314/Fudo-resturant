let navbar = document.querySelector(".nav");
navbar.style.maxHeight = "0px";

function togglemenu(){
    if(navbar.style.maxHeight == "0px"){
        navbar.style.maxHeight = "600px";
    }
    else{
        navbar.style.maxHeight = "0px"
    }
}
