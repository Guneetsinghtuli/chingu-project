
function run(element){
    let hidden=element.childNodes[2];
    hidden.classList.toggle('display');
    
}
window.scroll=()=>{
    console.log("Scrolling")
}
window.addEventListener('scroll',()=>{
    let navbar=document.getElementsByTagName('nav')[0];
    if(window.pageYOffset > 10){
        
        navbar.classList.add('background-transparent')

    }else{
        navbar.classList.remove('background-transparent')
    }
})