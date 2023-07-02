import readlineSync from 'readline-sync';

export function name() {
    console.log(`Hello, ${readlineSync.question('May I have your name? ')}!`);
}
