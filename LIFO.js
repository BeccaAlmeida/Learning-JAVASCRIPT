// javascript => conceitos importantes

// => conceito de pilha {
// LIFO => o ultimo que entra é o ultimo que sai

function func1() {
    func2();
    console.log('Executou a função 1');
}


function func2() {
    func3();
    console.log('Executou a função 2');
}

function func3() {
    console.log('Executou a função 3');
}
func1();