import createH1 from './pageLoad'

let mainDiv = document.getElementById('content');
console.log(mainDiv)
console.log(createH1())
mainDiv.appendChild(createH1())
//mainDiv.innerHTML = createH1();


console.log('webpack is working fine');