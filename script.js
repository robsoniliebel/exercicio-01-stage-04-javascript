let nome = prompt ("Olá, seja bem vindo! Qual o seu nome?")
alert("Seja bem vindo(a) " + nome)

let firstNumber = prompt ('Digite o primeiro número')
let secondNumber = prompt ('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restdiv = firstNumber % secondNumber
const verify = sum % 2

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da Divisão: ' + restdiv)

if (verify === 0) {
    alert('A soma dos dois número é Par: ' + sum)
} else {
    alert('A soma dos dois números é Ímpar: ' + sum)
}

if (firstNumber === secondNumber) {
    alert('Os números inseridos são iguais')
} 

if (firstNumber != secondNumber) {
  alert ('Os números inseridos são diferentes')
}
