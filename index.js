// function primeiraFuncao(){
//     return new Promise((resolve) =>{

//         setTimeout(()=>{
//             console.log('Esperou isso aqui!')
//             resolve()
//         }, 1000)
        
//     })
// }

// async function segundaFuncao(){
//     console.log('Iniciou')

//     await primeiraFuncao()

//     console.log('Terminou')
// }

// segundaFuncao();

// function getUser(id){
//     return fetch(`https://reqres.in/api/users?id=${id}`)
//     .then(data => data.json())
//     .catch(err => console.log(err))
// }

// async function showUserName(id){

//     try{
//         const user = await getUser(id)
//         console.log(`O nome do usuário é ${user.data.first_name}`)

//     } catch(err){
//         console.log(`Erro: ${err}`)
//     }
    
// }

// showUserName(8);

const url = `https://api.adviceslip.com/advice`;

const showAdvice = document.querySelector('.api-response');

const getNewAdvice = document.querySelector('.get-new-advice');

const validateHTTP = adviceData => {
    if(!adviceData.ok){
        throw new Error(`HTTP error, status ${adviceData.status}`)
    }

return adviceData.json()
}

function myAdvice ( {slip} ){
    const randomAdvice = slip.advice
    showNewAdivce(randomAdvice)
}



function newFetch(){
    fetch(url)
        .then(validateHTTP)
        .then(myAdvice)
        .catch(error => {
        console.log(error.adviceData)
    })
}

function showNewAdivce(advice){
    console.log(advice)
   showAdvice. innerHTML = advice
}
// fetch(url)
//     .then(validateHTTP)
//     .then(myAdvice)
//     .catch(error => {
//     console.log(error.adviceData)
// })

getNewAdvice.addEventListener('click', newFetch)

 

