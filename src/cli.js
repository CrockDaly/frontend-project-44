/* eslint-disable indent */
import readlineSync from 'readline-sync';

export default function name() {
    console.log(`Hello, ${readlineSync.question('May I have your name? ')}!`);
}
