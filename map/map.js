import { getUser } from '../data/api.js';
import quests from '../data/quest-data.js';
//import cities from '../data/quest-data.js'
import loadProfile from '../common/load-profile.js';
import createQuestLink from './create-quest-link.js';
import createCompletedQuest from './create-completed-quest.js';
import hasCompletedAllQuests from './has-completed-all-quests.js';
import isDead from '../common/is-dead.js';

loadProfile(); 

// go grab the user from localStorage
const user = getUser();

// if they're dead, or if they've completed all the quests
if (isDead(user) || hasCompletedAllQuests(quests, user)) {
    // send them to the results page
    window.location = '../results';
}
// getting some quest element from DOM
const nav = document.getElementById('quests');

for (let i = 0; i < quests.length; i++) {
    // for every quest
    const quest = quests[i];
    let questDisplay = null;

    // if the user has completed it
    if (user.completed[quest.id]) {
        // make a completed quest display (with a checkmark)
        questDisplay = createCompletedQuest(quest);
    }
    else {
        // otherwiese, make a link to the quest
        questDisplay = createQuestLink(quest);
    }
    nav.appendChild(questDisplay); // add the quest display to the nav
}
