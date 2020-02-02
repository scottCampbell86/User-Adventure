  
import loadProfile from '../common/load-profile.js';
import { getUser } from '../data/api.js';
import scoreMadness from './score-madness.js';
import scoreGold from './score-gold.js';
import { madnessMessages, aliveGoldMessages, deadGoldMessages } from './messages.js';

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');

const madnessResult = scoreMadness(user.madness); // frail, dead, or healthy
const goldResult = scoreGold(user.gold);
const madnessMessage = madnessMessages[madnessResult];

let goldMessages = null;
if (madnessResult === 'dead') {
    goldMessages = deadGoldMessages;
}
else {
    goldMessages = aliveGoldMessages;
}

const goldMessage = goldMessages[goldResult];

let story = 'And so, ';
story += user.name + ', ';
story += madnessMessage + ',' + goldMessage + '.';

storyDisplay.textContent = story;