// CONSOLE PROJECT
const TableBrasileirao = {    

    nomes: [
        'Athletico',
        'Atlético-GO',
        'Atlético-MG',
        'Bahia',
        'Botafogo',
        'Bragantino',
        'Corinthians',
        'Criciúma',
        'Cruzeiro',
        'Cuiabá',
        'Flamengo',
        'Fluminense',
        'Fortaleza',
        'Grêmio',
        'Internacional',
        'Juventude',
        'Palmeiras',
        'São Paulo',
        'Vasco',
        'Vitória'
    ],
    points: []
}
for (let i = 0; i < 20; i++) {
    const point = ~~(Math.random() * 2) === 1 ? ~~(Math.random() * 90) + 10 : ~~(Math.random() * 70) + 10;
    TableBrasileirao.points.push(point);
}

const tabela = TableBrasileirao.nomes.map((nome, index) => ({
    Nome: nome,
    Pontos: TableBrasileirao.points[index]
}));

tabela.sort((a, b) => b.Pontos - a.Pontos);

console.log('Position | Team          | Points');
console.log('---------|---------------|-------');
tabela.forEach((item, index) => {
    const position = (index + 1).toString().padStart(2, '0')
    
    console.log(`${position.toString().padEnd(8)} | ${item.Nome.padEnd(13)} | ${item.Pontos}`);
});