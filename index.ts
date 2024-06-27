import * as Prompt from 'prompt-sync';

function velha() {
    let prompt = Prompt();
    let y: number = 0;
    let x: number = 0;

    const arrayA:string[] = [' ',' ',' '];
    const arrayB:string[] = [' ',' ',' '];
    const arrayC:string[] = [' ',' ',' '];
    let arrayTotalA: string[] = [];
    let arrayTotalB:string[] = [];
    let vertical:string[][] = [];
    let horizontal:string[][] = [];
    let diagonal:string[][] = [];
    let io:boolean = true;
    console.log('JOGO DA VELHA!\n', arrayA,'\n', arrayB,'\n', arrayC, '\nescolha a posicao');
    while (io){ 
        let cpuY:number = Math.floor(Math.random() * (2 - 0) + 0);
        let cpuX:number = Math.floor(Math.random() * (2 - 0) + 0);
        y = parseInt(prompt('vertical: '));

        x = parseInt(prompt('horizontal: '));
        while (x > arrayA.length) {
            console.log('POSIÇÃO HORIZONTAL INVALIDA!');
            x = parseInt(prompt('Insira um numero de 0 a 2: '));
        }

        switch (y) {
            case 0:
                arrayA.splice(x, 1, 'X');
                break;
            case 1:
                arrayB.splice(x, 1, 'X');
                break;
            case 2:
                arrayC.splice(x, 1, 'X');
                break;
                case 999:
                io = false;
                break;
            default:
                console.log('opcao invalida! \ndigite 0, 1 ou 2');
                break;
        }

        arrayTotalA = arrayA.concat(arrayB, arrayC)
        arrayTotalB = arrayA.concat(arrayB, arrayC)
        vertical = [[arrayA[0], arrayB[0], arrayC[0]], [arrayA[1], arrayB[1], arrayC[1]], [arrayA[2], arrayB[2], arrayC[2]]]
        horizontal = [arrayA, arrayB, arrayC]
        diagonal = [[arrayA[0], arrayB[1], arrayC[2]], [arrayA[2], arrayB[1], arrayC[0]]]

        for (let index2 = 0; index2 < vertical.length; index2++) {
            if (vertical[index2].every((elem) => elem == "X")) {
                console.log('VOCE VENCEU!');
                io = false;
                
            } else if (vertical[index2].every((elem) => elem == "O")) {
                console.log('VOCE PERDEU!');
                io = false;
                
            }
        }
        for (let index2 = 0; index2 < horizontal.length; index2++) {
            if (horizontal[index2].every((elem) => elem == "X")) {
                console.log('VOCE VENCEU!');
                io = false;
                
            } else if (horizontal[index2].every((elem) => elem == "O")) {
                console.log('VOCE PERDEU!');
                io = false;
                
            }
        }
        for (let index2 = 0; index2 < diagonal.length; index2++) {
            if (diagonal[index2].every((elem) => elem == "X")) {
                console.log('VOCE VENCEU!');
                io = false;
                
            } else if (diagonal[index2].every((elem) => elem == "O")) {
                console.log('VOCE PERDEU!');
                io = false;
                
            }
        }
        
        while (JSON.stringify(arrayTotalA) == JSON.stringify(arrayTotalB)) {

            switch (cpuY){
                case 0:
                    if (arrayA[cpuX] == 'X' || arrayA[cpuX] == 'O') {
                        if (arrayA.includes(' ')) {
                            cpuX = arrayA.indexOf(' ')
                            arrayA.splice(cpuX, 1, 'O')
                        } else {
                            cpuY = 1
                        }
                    } else {
                        arrayA.splice(cpuX, 1, 'O')
                    }
                    break;
                case 1:
                    if (arrayB[cpuX] == 'X' || arrayB[cpuX] == 'O') {
                        if (arrayB.includes(' ')) {
                            cpuX = arrayB.indexOf(' ')
                            arrayB.splice(cpuX, 1, 'O')
                        } else {
                            cpuY = 2
                        }
                    } else {
                        arrayB.splice(cpuX, 1, 'O')
                    }
                    break;
                case 2:
                    if (arrayC[cpuX] == 'X' || arrayC[cpuX] == 'O') {
                        if (arrayC.includes(' ')) {
                            cpuX = arrayC.indexOf(' ')
                            arrayC.splice(cpuX, 1, 'O')
                        } else {
                            cpuY = 0
                        }
                    } else {
                        arrayC.splice(cpuX, 1, 'O')
                    }
            }
            
            arrayTotalB = arrayA.concat(arrayB, arrayC)
        }

        vertical = [[arrayA[0], arrayB[0], arrayC[0]], [arrayA[1], arrayB[1], arrayC[1]], [arrayA[2], arrayB[2], arrayC[2]]]
        horizontal = [arrayA, arrayB, arrayC]
        diagonal = [[arrayA[0], arrayB[1], arrayC[2]], [arrayA[2], arrayB[1], arrayC[0]]]
               
        
        
        console.log('\n',arrayA,'\n',arrayB,'\n',arrayC,'\n');        
        
        for (let index2 = 0; index2 < vertical.length; index2++) {
            if (vertical[index2].every((elem) => elem == "X")) {
                console.log('VOCE VENCEU!');
                io = false;
                
            } else if (vertical[index2].every((elem) => elem == "O")) {
                console.log('VOCE PERDEU!');
                io = false;
                
            }
        }
        for (let index2 = 0; index2 < horizontal.length; index2++) {
            if (horizontal[index2].every((elem) => elem == "X")) {
                console.log('VOCE VENCEU!');
                io = false;
                
            } else if (horizontal[index2].every((elem) => elem == "O")) {
                console.log('VOCE PERDEU!');
                io = false;
                
            }
        }
        for (let index2 = 0; index2 < diagonal.length; index2++) {
            if (diagonal[index2].every((elem) => elem == "X")) {
                console.log('VOCE VENCEU!');
                io = false;
                
            } else if (diagonal[index2].every((elem) => elem == "O")) {
                console.log('VOCE PERDEU!');
                io = false;
                
            }
        }
    }
}

        
velha()