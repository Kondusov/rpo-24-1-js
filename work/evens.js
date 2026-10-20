let result = document.getElementById('result');
let btn = document.querySelector('[type="submit"]');
result.style.cssText = 'background: #b8febc; min-width: 50%; min-height: 100px';
window.addEventListener('mousemove', (event)=>{
    // result.textContent = 'По оси Х: '+event.clientX +' / По оси Y: '+event.clientY;
    btn.value= `По оси Х: ${event.clientX}  / По оси Y: ${event.clientY}`;
});
result.addEventListener('mouseenter', (event)=>{
    result.textContent = 'Курсор пришел на элемент';
});
result.addEventListener('mouseleave', (event)=>{
    result.textContent = 'Курсор покинул элемент';
});
///////////////////
window.addEventListener('keydown', (event)=>{
    console.log(event.key);
    console.log(event.code);
    document.body.innerHTML += '<p> Нажата: '+event.code+'</p>';
});
result.addEventListener('click', (event)=>{
    result.textContent = 'Клик левой кнопкой мыши';
});
result.addEventListener('contextmenu', (event)=>{
    result.textContent = 'Клик правой кнопкой мыши';
});