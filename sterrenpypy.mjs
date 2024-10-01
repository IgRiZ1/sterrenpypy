import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

for(let i = 0; i < 6; i++ ){
    for(let j = 0 ; j < i ; j++){

            process.stdout.write('*')
    }
    console.log();

}


process.exit()  