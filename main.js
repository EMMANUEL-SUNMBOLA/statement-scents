let nav = document.getElementsByTagName("nav")[0];
let navContent = document.getElementsByClassName("nav-content")[0]
let hamdiv = document.getElementsByClassName("hamdiv")[0]
let hambut = document.getElementById("hambut")


if(hamdiv.style.display !== "none"){

    hamdiv.addEventListener("click", ()=>{
        // alert("why you touch me")
        if(hambut.classList.contains("fa-bars")){
            hambut.classList.replace("fa-bars", "fa-xmark");
            navContent.style.display = "flex";
            nav.style.position = "fixed";
        }else{
            hambut.classList.replace("fa-xmark", "fa-bars");
            navContent.style.display = "none";
            navContent.style.transition = "all .3s ease-in-out";
            nav.style.position = "absolute";
        }
    })

}
