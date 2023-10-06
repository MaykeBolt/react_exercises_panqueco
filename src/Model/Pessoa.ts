export default class Pessoa {
    name: string; //É necessário isso?
    age: number; //É necessário isso?
    genre: boolean
    /* Só é necessário definir o tipo das var 'name' & 'age' ou também devo definir o tipo das var 'nome' e 'idade' no
    construtor?
    */
    constructor(nome: string, idade: number, genero: boolean) {
        this.name = nome;
        this.age = idade;
        this.genre = genero;
    }   

    getGenre() {
        if (this.genre == false) {
            return (
                "Masculino"
            )
        }
        if (this.genre == true) {
            return (
                "Feminino"
            )
        }
    }
}