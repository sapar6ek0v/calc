const lftIn = document.querySelector('.left-input')
const rhtIn = document.querySelector('.right-input')
const rstIn = document.querySelector('.result-input')

const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const mlt = document.querySelector('.multiplication')
const dvd = document.querySelector('.division')
const root = document.querySelector('.big-sub-button')
const degree = document.querySelector('.big-button')

const disBtn = () => {
    const nwCl = Array.from(document.querySelectorAll('.disabled-button'))
    if (lftIn.value.trim() === '' || rhtIn.value.trim() === '') {
        nwCl.forEach(it => it.setAttribute('disabled', 'true'))
    }else {
        nwCl.forEach(it => it.removeAttribute('disabled'))
    }
}
lftIn.addEventListener('input', (disBtn) )
rhtIn.addEventListener('input', (disBtn) )

//-------------------------------------------- ! -----------------------------------------//

const addOperator = (char) => {
    const operator = document.querySelector('.span')
    const operatorEquals = document.querySelector('.span__sub-span')


    operator.textContent = char
    operatorEquals.textContent = "="
}

const makeList = (char) => {
    const creatLi = document.createElement('li')
    let ul = document.querySelector('ul')
    ul.prepend(creatLi)

    creatLi.textContent = +lftIn.value + char + +rhtIn.value + "=" + rstIn.value

    creatLi.addEventListener('click', () => {
        creatLi.style.textDecoration = 'line-through'
        if (creatLi.style.textDecoration === 'line-through') {
            creatLi.addEventListener('click', () => {
                creatLi.remove()
            })
        }
    })
}
//-------------------------------------------- ! -----------------------------------------//



minus.addEventListener('click', () => {
    rstIn.value = lftIn.value - rhtIn.value
    addOperator('-')
    makeList('-')
})

plus.addEventListener('click', () => {
    rstIn.value = +lftIn.value + +rhtIn.value
    addOperator('+')
    makeList('+')
})

mlt.addEventListener('click', () => {
    rstIn.value = lftIn.value * rhtIn.value
    addOperator('*')
    makeList('*')
})
root.addEventListener('click', ()=> {
    rstIn.value = Math.sqrt(lftIn.value)
    addOperator('%')
    makeList('%')
})
degree.addEventListener('click', ()=> {
    rstIn.value = Math.pow(lftIn.value, rhtIn.value)
    addOperator('**')
    makeList('**')
})

dvd.addEventListener('click', () => {
    if (lftIn.value / rhtIn.value === Infinity) {
        rstIn.value = ''
        alert('Ошибка! Операция не возможно')
    } else {
        rstIn.value = lftIn.value / rhtIn.value
    }
    addOperator('/')
    makeList('/')
})

// ---------------------------------  !!! --------------------------------- //

const maxMin = document.querySelector('.max-min-input')
const maxMinRes = document.querySelector('.result-m-input')
const max = document.querySelector('.button-max')
const min = document.querySelector('.button-min')


max.addEventListener('click', () => {
    maxMinRes.value = maxMin.value.split(' ').map(it => +it).reduce((x, y) => {
        return (x > y) ? x : y
    })
})

min.addEventListener('click', () => {
    // maxMinRes.value = maxMin.value.split(' ').map(it => +it).reduce((x, y) => {
    //     return (x < y) ? x : y
    // })
    maxMinRes.value = Math.min(...maxMin.value.split(' '))

})

const checkMinMaxIn = () => {
    const minMaxBtn = Array.from(document.querySelectorAll('.min-max-button'))
    if (maxMin.value.trim() === '' ) {
        minMaxBtn.forEach(it => it.setAttribute('disabled', 'true'))
    } else {
        minMaxBtn.forEach(it => it.removeAttribute('disabled'))
    }
}

maxMin.addEventListener('input', (checkMinMaxIn))

// -------------------------------------------- !!! ------------------------------------------ //

const removeList = document.querySelector('.clear-button')

removeList.addEventListener('click', ()=> {
   if (confirm('Действительно но ли хотите удалить') ) {
       Array.from(document.querySelectorAll('li')).forEach(it => it.remove())
   }
})
// --------------------------------------------- !!! ------------------------------------------///


