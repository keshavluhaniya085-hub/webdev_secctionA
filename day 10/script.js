// function handleClick(){
//      const head=document.querySelector("h1")
//     head.style.color="tomato"
//     head.textContent="new heading"
// }



function handleClick(){
    const spanEle=document.createElement("span").textContent="This is span element";

    const image=document.createElement("img");
    image.setAttribute("src","kr.png");
    image.setAttribute("alt","K.R Mangalam");
    document.getElementById("content").append(spanEle)
    const gallery=document.getElementById("content");
    gallery.appendChild(image);

}

document.getElementById("btn").addEventListener("click",()=>{
    const spanEle=document.createElement("span").textContent="This is span element";

    const image=document.createElement("img");
    image.setAttribute("src","kr.png");
    image.setAttribute("alt","K.R Mangalam");
    document.getElementById("content").append(spanEle)
    const gallery=document.getElementById("content");
    gallery.appendChild(image);

})