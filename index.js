const decrease = document.getElementById(`decrease`);
const reset = document.getElementById(`reset`);
const increase = document.getElementById(`increase`);
const cntlabel = document.getElementById(`labelc`)
let count = 0;

increase.onclick = function(){
    count++
    console.log(count)
    cntlabel.textContent = count;
}

decrease.onclick = function(){
    count--
    console.log(count)
    cntlabel.textContent = count;
}

reset.onclick = function(){
    count = 0
    console.log(count)
    cntlabel.textContent = count;
}