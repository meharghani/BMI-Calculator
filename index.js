const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height == '' || height<0 || isNaN(height)){
        result.innerHTML = `Please give correct height ${height}`
    }
    else if(weight == '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give correct weight ${weight}`
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        if(bmi< 18.6){
            result.style.color = "yellow"
        }else if(bmi > 18.6 && bmi< 24.9){
            result.style.color = "green"
        }else{
            result.style.color = "red"
        }
        result.innerHTML = bmi
    }
})