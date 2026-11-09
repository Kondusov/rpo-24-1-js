// let str = 'Yellow word';
// let arrS = str.split('');
// console.log(arrS);
// console.log(arrS.join(''));

let form = document.getElementById("myForm");

function splitText(textik,a,b){
    console.log(textik);
    let arrL = textik.split('');
    
    
    for(let i = 0;i < arrL.length;i++){
        if(a == arrL[i]){
            arrL[i] = b;
        }
    }
    
    
    return arrL.join('');
}

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let text = document.getElementById('txt').value;
    let out = document.getElementById('output');
    let char1 = document.getElementById('char1').value;
    let char2 = document.getElementById('char2').value;
    out.textContent = splitText(text,char1,char2);

  
});