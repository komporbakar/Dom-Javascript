const date = new Date()
let hoursNow = date.getHours()
let waktu = ''

//Get Body
const body = document.querySelector('#body')
const opacity = document.querySelector('#opacity')
let backgroundColor = ''


document.querySelector('#home').addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = 'index.html'
})
document.querySelector('#berita').addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = 'index2.html'
})

// Theme Change
// Morning
document.querySelector('#morning').addEventListener('click', ()=>{
    hoursNow = 8
    themaWaktu()
})
// Afternoon
document.querySelector('#after').addEventListener('click', ()=>{
    hoursNow = 12
    themaWaktu()
})
//Night
document.querySelector('#night').addEventListener('click', ()=>{
    hoursNow = 20
    themaWaktu()
})





function themaWaktu(){
    if(hoursNow >= 5 && hoursNow < 11){
        waktu = 'Morning 🌄'
        body.style.backgroundImage = 'url("https://images.pexels.com/photos/5588689/pexels-photo-5588689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
        body.style.backgroundSize = 'cover'
    } else if(hoursNow >=11 && hoursNow <=17) {
        waktu = 'Afternoon 🛣️'
        body.style.backgroundImage = 'url("https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
        body.style.backgroundSize = 'cover'
    } else {
        waktu = 'Night 🏕️'
        body.style.backgroundImage = 'url("https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
        body.style.backgroundSize = 'cover'
    }
    document.querySelector('#sapaan').innerText = waktu
}
themaWaktu()


// Select Javascript Playground
const jsPlayground = document.querySelector('#playground')

document.addEventListener('DOMContentLoaded',()=>{
    const valueJsPlayground = jsPlayground.value
    for(let i=0; i <= jsPlayground.length; i++){
        const id = 'playground' + i
        const element = document.getElementById(id)
       
        if(element){
            element.style.display = "none"
        }
    }
    document.getElementById(valueJsPlayground).style.display = "block"
    jsPlayground.addEventListener('change',(e)=> {
        e.preventDefault()
        
        const valueJsPlayground = jsPlayground.value
        for(let i=0; i <= jsPlayground.length; i++){
            const id = 'playground' + i
            const element = document.getElementById(id)
           
            if(element){
                element.style.display = "none"
            }
        }
        
        document.getElementById(valueJsPlayground).style.display = "block"
    })
})


// TO DO LIST
const todolist = document.querySelector('#todolist')
const buttonTodolist = document.querySelector('#addTodo')
const listTodo = document.querySelector('#listTodo')
let valueTodolist = []
console.log('ini value asli', valueTodolist)


const liElm = document.querySelectorAll('#listTodo li')

    liElm.forEach((item)=>{
        item.addEventListener('click',()=>{
            item.remove()
        })
    })
    // 


    buttonTodolist.addEventListener('click', (e)=> {
        e.preventDefault()
        const value = todolist.value
        if(!value) {
            alert('Harap input todolist terlebih dahulu')
        } else{

        const splitValue = value.split(',')
        valueTodolist.push(splitValue)
        todolist.value = ''
        valueTodolist.map((item,i) => {
            
            for(let i =0; i < item.length;i++ ){
                
            const addItem  = document.createElement("li")
            addItem.classList = 'text-start'
            const addSpan = document.createElement('span')
            addSpan.classList = 'bg-red-800 px-2 ms-2 rounded-lg text-white text-xs cursor-pointer'
            addSpan.innerText = 'delete'
            addItem.textContent = item[i]
            listTodo.appendChild(addItem)
            addItem.appendChild(addSpan)
            }
        valueTodolist = []
        })
    }

    const liElm = document.querySelectorAll('#listTodo li')

    liElm.forEach((item)=>{
        item.addEventListener('click',()=>{
            item.remove()
        })
    })
    // console.log(splitValue)
})




// CALCULATOR

// Function Calculator
const calculator = (value1, value2, operator) => {
    let hasil = 0;
    result = eval(`${value1} ${operator} ${value2}`)
    hasil = result
    return formatDecimal(hasil)
}

// format Decimal
const formatDecimal = (number)=> {
    if(Number.isInteger(number)){
        return number
    } else {
        return number.toFixed(2)
    }
}

// OnClick Calculator
const calc = document.querySelector('#submitCalculator')

// Select Operator Aritmatika
const operatorBilangan = document.querySelector('#aritmatika')
const calcValue1 = document.querySelector('#angka1')
const calcValue2 = document.querySelector('#angka2')
const showHasil = document.querySelector('#showHasil')



calc.addEventListener('click',(e) =>{
    const value1 = parseFloat(calcValue1.value)
    const value2 = parseFloat(calcValue2.value)
    const operator = operatorBilangan.value 

    if(!value1  || !value2){
        alert('Harap Input Nilai Terlebih Dahulu')
        showHasil.innerText = '-'
    } else {   
        const hasil = calculator(value1, value2, operator)
        console.log(hasil)
    }
    showHasil.innerText = hasil
    
})



// Change Warna Background
const btnGenerate = document.querySelector('#btnGen')
const btnGenerateCard = document.querySelector('#btnGenCard')
const bgCard = document.querySelectorAll('#bgCard')
const btnReset = document.querySelector('#btnGenReset')
console.log(bgCard)

// Function change Background
const changeBackground = (value1, value2, value3) => {
    let bgColor = ''
    if(value1) {
        bgColor = `rgba(${value1}, ${value2}, ${value3}, ${1})`
    } 
    return bgColor
}

btnGenerate.addEventListener('click',() => {
    const value1 = Math.floor(Math.random() * 255)
    const value2 = Math.floor(Math.random() * 255)
    const value3 = Math.floor(Math.random() * 255)
    backgroundColor = changeBackground(value1,value2, value3)
    console.log(backgroundColor)
    body.style.backgroundImage = ''
    body.style.backgroundColor = backgroundColor
    opacity.style = 'opacity: 100%';
})

btnGenerateCard.addEventListener('click',() => {
    const value1 = Math.floor(Math.random() * 255)
    const value2 = Math.floor(Math.random() * 255)
    const value3 = Math.floor(Math.random() * 255)
    const bgrnCard = changeBackground(value1,value2, value3)
    console.log(bgrnCard)
    bgCard.forEach((item)=>{
        item.style.backgroundColor = bgrnCard
        opacity.style = 'opacity: 100%';
    })
})

btnReset.addEventListener('click', ()=>{
    themaWaktu()
    bgCard.forEach((item)=>{
        item.style.backgroundColor = ''
        opacity.style = 'opacity: 80%';
    })
})

// Jokes Generator
const getJokes = async() =>{
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
     try {
        const response = await fetch('https://icanhazdadjoke.com/', config).then((res) => res.json())
        const data =response.joke
        return data
     } catch (error) {
        return error
     }
}


const btnJoke = document.querySelector('#btnGenJoke')

const addJoke = async()=>{
    const textJoke = document.querySelector('#textJoke')
    const data =  await getJokes()
    textJoke.innerText = data
}
addJoke()

btnJoke.addEventListener('click', async() => {
    addJoke()
})


// Quiz Matematika

const quiz1 = document.querySelector('#quiz1')
const quiz2 = document.querySelector('#quiz2')
const operatorQuiz = document.querySelector('#operatorQuiz')
const valueQuiz = document.querySelector('#valueQuiz')
const scoreQuiz = document.querySelector('#scoreQuiz')
const btnQuiz = document.querySelector('#btnQuiz')

let score = 0;
const operators = ['+', '-', '*', '/'];
let value1, value2, randomOperator, correctAnswer;

function generateNewQuestion() {
    value1 = Math.ceil(Math.random() * 99);
    value2 = Math.ceil(Math.random() * 19);
    randomOperator = operators[Math.floor(Math.random() * operators.length)];
    correctAnswer = eval(`${value1} ${randomOperator} ${value2}`);
    quiz1.innerText = value1;
    quiz2.innerText = value2;
    operatorQuiz.innerText = randomOperator;
}
generateNewQuestion();
btnQuiz.addEventListener('click', () => {
    if(!valueQuiz.value){
        alert('Harap input nilai terlebih dahulu')
    } else{
        if(parseInt(score) >= 10){
            alert('Score Sudah Maksimal, Anda Hebat ')
            score = 0
        } else {
            const userAnswer = parseFloat(valueQuiz.value);
            console.log( userAnswer, correctAnswer)
            
            if (userAnswer === correctAnswer) {
                alert('Jawaban Anda benar!')
            score++;
            if(score =>10){
                alert('Selamat Anda Menang')
            }
            } else {
                alert('Jawaban Anda salah. Jawaban yang benar adalah ' + correctAnswer)
                if(score > 0){
                    score--
                }
            }
            scoreQuiz.innerText = score
            valueQuiz.value = ''
            generateNewQuestion();
        }
    }
})


