/* Mini Game, Rock, Paper or Scissors */
let options = ['paper', 'rock', 'scissors'];
let cpuOption, meOption;

const cpuChooseOption = () => {
    let optionChoosed = Math.floor(Math.random() * 3);

    if(optionChoosed === 0){
        return cpuOption = options[0];
    } else if (optionChoosed === 1){
        return cpuOption = options[1];
    } else {
        return cpuOption = options[2];
    }
}

const theSame = () => console.log(`THE SAME OPTION => ME: ${meOption} CPU" ${cpuOption}`);

const NotSame = () => {
    console.log(`ME: ${meOption} and CPU: ${cpuOption}`)
    cpuOption = undefined;
    meOption = undefined;
    startGame();
}

const validateOption = () => cpuOption === meOption ? theSame() : NotSame();

function startGame(){
    cpuChooseOption();
    meOption = prompt('Write Rock, Paper or Scissors:');
    switch (meOption) {
        case options[0]:
            return validateOption();
            break;
        case options[1]:
            return validateOption();
            break;
        case options[2]:
            return validateOption();
            break;
        default: 
            console.log('Some is wrong, try again');
            startGame();
    }
}
        /* if (cpuOption){
            meOption = prompt('Write Rock, Paper or Scissors:')
            if(meOption) {
                if(meOption === cpuOption){
                    console.log(`THE SAME OPTION: CPU ${cpuOption} ME ${meOption}`)
                } else {
                    console.log(`You choosed: ${meOption} and CPU choosed: ${cpuOption}`)
                    meOption = undefined
                    cpuOption = undefined
                    startGame()
                }
            }
        } */