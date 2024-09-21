window.onload = ()=>{
  
   //removing loading effect
   document.querySelector(".load-container").remove();
   
//GREEN SOCK ANIMATION 
//gsap timrline 
   gsap.registerPlugin(ScrollTrigger)
   
  let tl = gsap.timeline();
    
    tl.to(".header",{
       
       y: 0,
       duration: 1,
       ease: "bounce"
    }).to(".inner-back-text",{
       
       opacity: 1,
       duration: 1.5,
       
    }).to(".welcome",{
       
       scrollTrigger: {
         trigger: ".welcome-text",
         start: "top center",
         toggleActions: "play reverse play reverse"
       },
       background: "black",
       color: "white",
       height: "100%",
       textAlign : "right",
       duration: 1,
       opacity: 1
    })

}


//MENU BAR FUNCTIONALITY ON MOBILE PHONES 
let btnM = document.querySelector("#show-btn");
  
  btnM.addEventListener("click",()=>{
     
     let nav = document.querySelector(".nav");
        
        nav.classList.add("show");
        
        console.log("Menu panel active!");
        
     let btnC = document.querySelector("#hide-btn");
       
       btnC.onclick = ()=>{
         
         if(nav.classList.contains("show"))
            nav.classList.remove("show");
       }
  })
  
  //FULLSCREEN ON DOUBLE TAP IMAGE
    let images = document.querySelectorAll("img");
       
         images.ondblclick = ()=>{
          
          images.requestFullscreen();
       }