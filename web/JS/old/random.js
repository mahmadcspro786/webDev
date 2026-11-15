console.log("js is working!!!");
// let box=document.getElementsByClassName(".cont")
 let box = document.querySelector(".cont").children;
  function color(){
     let v1= Math.ceil(0+Math.random()*255);
     let v2= Math.ceil(0+Math.random()*255);
     let v3= Math.ceil(0+Math.random()*255);
 return `rgb(${v1},${v2},${v3})`;
  }
Array.from(box).forEach(e=>{
    e.style.backgroundColor=color();
    e.style.color=color()
})
