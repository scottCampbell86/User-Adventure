  
import loadProfile from '../common/load-profile.js';
import { getUser } from '../data/api.js';
import scoreMadness from './score-madness.js';
import scoreBank from './score-bank.js';
import { madnessMessages, aliveBankMessages, deadBankMessages } from './messages.js';

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');

const madnessResult = scoreMadness(user.madness); // frail, dead, or healthy
const bankResult = scoreBank(user.bank);
const madnessMessage = madnessMessages[madnessResult];

let bankMessages = null;
if (madnessResult === 'dead') {
    bankMessages = deadBankMessages;
}
else {
    bankMessages = aliveBankMessages;
}

const bankMessage = bankMessages[bankResult];
console.log(bankResult);

let story = 'And so, ';
story += user.name + ', ';
story += madnessMessage + ',' + bankMessage + '.';

storyDisplay.textContent = story;