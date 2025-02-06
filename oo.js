// Base Class
function Veiculo(marca, modelo, cilindrada, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.cilindrada = cilindrada;
};

Veiculo.prototype.displayInfo = function() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Cilindrada: ${this.cilindrada} Ano: ${this.ano}`);
};

// Classe de moto que herda de Veiculo
function Moto(marca, modelo, cilindrada, ano) {
    Veiculo.call(this, marca, modelo, cilindrada);
    this.ano = ano;
}

Moto.prototype = Object.create(Veiculo.prototype);
Moto.prototype.constructor = Moto;

Moto.prototype.displayInfo = function() {
    Veiculo.prototype.displayInfo.call(this);
    console.log(`Ano: ${this.ano}`);
};

// Classe Carro que herda de Veiculo
function Carro(marca, modelo, cilindrada, ano) {
    Veiculo.call(this, marca, modelo, cilindrada);
    this.ano = ano;
}

Carro.prototype = Object.create(Veiculo.prototype);
Carro.prototype.constructor = Carro;

Carro.prototype.displayInfo = function() {
    Veiculo.prototype.displayInfo.call(this);
    console.log(`Ano: ${this.ano}`);
};

// Instanciando objetos
const moto1 = new Moto('ELIMINATOR 500', 'Z500', 411, 2022);
const moto2 = new Moto('RELIMINATOR 500', 'NINJA 500', 650, 2024);
const carro1 = new Carro('Hilux', 'SW4', 1000, 2022);

// Exibindo informações
moto1.displayInfo();
moto2.displayInfo();
carro1.displayInfo();