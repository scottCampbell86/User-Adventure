import { getUser } from '../user-info/userFunctions.js';

export const loadProfile = () => {
    const name = document.getElementById('name');
    const bankRoll = document.getElementById('bank-roll');
    const grooveLevel = document.getElementById('groove-level');

    const user = getUser();

    if (!user) {
      window.location = './';
    }

    name.textContent = user.name;
    bankRoll.textContent = user.bankRoll;
    grooveLevel.textContent = user.grooveContent;
};