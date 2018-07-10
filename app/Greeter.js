import config from './config.json';

export function createDiv() {
    var greet = document.createElement('div');
    greet.innerHTML = config.greetText;
    return greet;
}