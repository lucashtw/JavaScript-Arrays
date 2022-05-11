const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']


//remover a partir de qual elemente,quantos elementos, e colocar no lugar
listaDeChamada.splice(1,2,'Rodrigo')

//remover de e para, e colocar no lugar
listaDeChamada.splice(2,1,'Rodrigo')


//se colocar 0 no segundo elemento ele só adiciona
//listaDeChamada.splice(2,0,'Rodrigo')

console.log(`Lista de chamada: ${listaDeChamada}`)