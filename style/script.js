
// eslint-disable-next-line no-undef


  // Use ScrollReveal to reveal elements with the class ".project"
  
function revealFunction(){
  // eslint-disable-next-line no-undef
  const sr = ScrollReveal({
    duration:1350,
    distance:"60px",
    easing:'ease-out'
  });
  // eslint-disable-next-line no-undef
  sr.reveal(".child-card", { origin:'bottom',reset:true});
  // eslint-disable-next-line no-undef
  sr.reveal('.left-container',{origin:'left'});
  // eslint-disable-next-line no-undef
  sr.reveal('.contact-left',{origin:"left",reset:true,scale:1.2});
  sr.reveal('.contact-right',{origin:"right",reset:true});

}
window.addEventListener('load',()=>{
  revealFunction();
})

// emailjs handle
document.getElementById("btn").addEventListener('click',(e)=>{
  e.preventDefault()
  console.log("clicked")
  
})