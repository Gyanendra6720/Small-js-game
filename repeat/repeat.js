
const dabbe = document.querySelectorAll('.click-boxes');
console.log(dabbe);
console.log(dabbe[1].value);

const timesclick = {
     'red'     : 0,
     'blue'    : 0,
     'green'   : 0
};

dabbe.forEach(sqre => {
     sqre.onclick = () => {
          timesclick[sqre.value]++;
          sqre.innerText = timesclick[sqre.value];
     }
})

const clear = document.getElementById('clear-button');

clear.onclick = () => {
     dabbe.forEach(dabba =>{
          dabba.innerText = 0;
     })
}











