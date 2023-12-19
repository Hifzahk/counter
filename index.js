let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")
console.log(countEl)
let count = 0
let newCount
function increment()
{
 count+=1;
 countEl.textContent=count
}
function save()
{
  newCount=count +"-"
  saveEl.textContent+=newCount
  countEl.textContent=0
  count=0
}
