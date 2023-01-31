let btn = document.querySelector('.send');
const parent = document.querySelector('.result');

btn.addEventListener('click', () => {
    const value1 = document.querySelector('#first').value;
    const value2 = document.querySelector('#second').value;
    if(value1 > 300 || value1 < 100 || isNaN(value1) || value2 > 300 || value2 < 100 || isNaN(value2)){
        alert('Введенное число лежит вне диапазона')
    }
    else{
       const  url = "https://picsum.photos/"+value1+"/"+value2;
       //console.log(url);
        fetch(url)
            .then((response) =>{
                const result = response;
                //console.log(response);
                return result;
            })
            .then((data)=>{
                //console.log(data.url);
                src = data.url;
                parent.insertAdjacentHTML('beforeend',`<img src = '${src}'></img>`)
            })
     }
})