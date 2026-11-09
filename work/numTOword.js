const words  = ['ноль','один','два','три','четире','пять','шесть','семь','восемь','девять'];
document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault();
    const n = parseInt(document.getElementById('text').value);
    document.getElementById('result').textContent = words[n];
});