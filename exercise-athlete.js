class Atlete{
    
  constructor(name, surname, yob, sport, palmares, gender, retired){
        this.name = name; 
        this.surname = surname;
        this.yob = yob;
        this.sport= sport;
        this.palmares= palmares;
        this.gender = gender;
        this.retired = retired;
    }

    calculateAge(){
        const now = new Date();
        const year = now.getFullYear();
        const age = year - this.yob;
        return age;   
    }

    // bestResult(){
    //     const lambda = (acc, element) => {
    //         if(element > acc){
    //             acc = element
    //         }
    //         return acc
    //     }
    //     const result = this.palmares.reduce(lambda,0)
    //     return result
    // }

    bestResult(){
        let numero = 0;
        for (let i = 0; i < this.palmares.length; i++) {
            const element = this.palmares[i];
            if (element > numero) {
                numero = element
            }
        }
        return numero
    }
// }


    toString(){
            
        const genere =  this.gender === 'f' ? 'femmina' : 'maschio';

        const atleteString =  'Nome: ' + this.name + '\n' + 
                            'Cognome: ' + this.surname + '\n' +
                            'Età: ' + this.calculateAge() + '\n'+
                            'Genere: ' + genere + '\n';
        return atleteString

    }
}
