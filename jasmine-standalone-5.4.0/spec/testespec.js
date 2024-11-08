// //TESTESPEC.JS AQUI VAMOS COLOCAR O CODIGO 

// it("Lista de Teste", function(){
//     expect(inteiro(1)).toBe(1);
//     expect(inteiro(2)).toBe(2);
// })

// describe("Teste de números", function(){
//     it("Fizz Buzz", function(){
//         expect(jogo(1)).toBe(1);
//         expect(jogo(2)).toBe(2);
//         expect(jogo(3)).toBe("Fizz");
//         expect(jogo(4)).toBe(4);
//         expect(jogo(5)).toBe("Buzz");
//         expect(jogo(6)).toBe("Fizz");
//         expect(jogo(7)).toBe(7);
//         expect(jogo(8)).toBe(8);
//         expect(jogo(9)).toBe("Fizz");
//         expect(jogo(10)).toBe("Buzz");



// describe("Teste de média", function(){
//     it("Resultado", function(){
//         let res = aluno();
//         expect(res).toEqual("Reprovado")
//     })
// })


// describe("Pessoas", function(){
//     let nome = "Pietro"
//     let sobrenome = "Cunha"
//     let idade = 17;

//     let pessoa = new Pessoa(nome, sobrenome, idade);
//     it('Teste - Nome', function(){
//         expect("Pietro").toBe(pessoa.nome());
//     })
//     it('Teste - Nome e Sobrenome', function(){
//         expect("Pietro Cunha").toBe(pessoa.nome_completo());
//     })
//     it('Teste - Nome e Sobrenome e Idade', function(){
//         expect("Pietro Cunha tem idade de 17").toBe(pessoa.nome_tudo());
//     })
// })

// ex. 1
// describe("Multiplicação ", function(){
//     it("Resultado: ", function(){

//         let a = 2;
//         let b = 4;
//         let c = 6;
        
//         expect(multiplicacao(a, b, c)).toBe(48);
//     })
// }
// )

// ex. 2
// describe ("Divisão: ", function(){
//     it("Resultado: ", function(){


//         expect(divisao(6,2)).toBe(3)
//     })
  
// })

//ex. 3 
// describe("Celsius para Fahrenheit:", function(){
//     it("Resultado: ", function(){

//         expect(celsiusFahrenheit(0)).toBe(32)
//     })
// })

// describe("Fahrenheit para Celsius:", function(){
//     it("Resultado: ", function(){

//         expect(fahrenheitCelsius(32)).toBe(0)
//     })
// })


//ex.4 
// describe("Calcular Média: ", function(){
//     it("Resultado: ", function(){

//         expect(calcularMedia(10,20,30)).toBe(20)
//     })
// })

//ex.5
// describe("Contar Caracteres: ", function(){
//     it("Resultado:", function(){
//         expect(contarCaracteres("amar")).toBe(4)
//     })
// })

//ex.6
// describe("Operações:", function(){
//     it("Soma: ", function(){
//         expect(operacoes(10, 20, "+")).toBe(30)
//     })

//     it("Subtração: ", function(){
//         expect(operacoes(10, 10, "-")).toBe(0)
//     })

//     it("Multiplicação: ", function(){
//         expect(operacoes(10, 20, "*")).toBe(200)
//     })

//     it("Divisão: ", function(){
//         expect(operacoes(10, 5, "/")).toBe(2)
//     })

// })