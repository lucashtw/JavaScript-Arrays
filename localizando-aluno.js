const alunos = ['João','Juliana','Caio','Ana']
const mediasDosAlunos = [10,7,9,6]
// inclues retorna booleano, no caso da linha 9 verifica se existe o valor no array
// indexOf retorna a posição do array onde tem aquele valor

let listaDeNotasEAlunos = [alunos,mediasDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){ 
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua media é ' + listaDeNotasEAlunos[1][indice]
    }else{
        return "Aluno não esta cadastrado"
    }
}

console.log(exibeNomeNota("Ana"))

