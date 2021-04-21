const item = document.querySelectorAll(".carousel__item");
let next = 0
// next function 
const nextItem = () => {
    next++
if(next>=item.length){
    next = 0
}
let change = `-${next}00%`
console.log(change)
let i;
for (i = 0; i < item.length; i++) {
    item[i].style.transform = `translateX(${change})`
}
}
// prev function 
const prevItem = () => {
    next--
if(next<=0){
    next =  0
}
change = `-${next}00%`
console.log(change)
let i;
for (i = 0; i < item.length; i++) {
    item[i].style.transform = `translateX(${change})`
}   
}
