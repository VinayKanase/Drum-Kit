 const btncon=document.querySelector(".btn-container");
 btncon.addEventListener("click",call);
document.addEventListener("keydown",play);
function call(event){ 
   const target=event.target;
   if(target.classList.contains("btn")){
     let key=target.getAttribute("data-key");
     const audio = document.querySelector(`audio[data-key="${key}"]`);
      audio.currentTime = 0;//rewind time to 0
      audio.play();
      target.classList.add("playing");
      target.addEventListener("transitionend",()=>{
      target.classList.remove("playing");
  });
  // const key = document.querySelector(`.btn[data-key="${}"]`);
     
   }
function play(Event){
  const audio= document.querySelector(`audio[data-key="${Event.keyCode}"]`);
  const key = document.querySelector(`.btn[data-key="${Event.keyCode}"]`);
 if(!audio)return;//Stop
 audio.currentTime = 0;//rewind tiem to 0
  audio.play();
  key.classList.add("playing");
  key.addEventListener("transitionend",()=>{
   key.classList.remove("playing");
  });
  // setTimeout(() => {
  //  key.classList.remove("playing");
  // }, 100);
}
function removeTrans(e){
  if(e.propertyName !== 'transform') return; //skip the key if it doesn't have transform property
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".btn");
keys.forEach(key=>key.addEventListener("transitionend",removeTrans));

}
