import { getUser } from '../data/api.js';
import isDead from './is-dead.js';

function loadProfile() {
    /* reference needed DOM elements */
    const name = document.getElementById('name');
    const madness = document.getElementById('madness');
    const bank = document.getElementById('bank');

    /* initialize: load and parse json with user from local storage */
    const user = getUser();

    // if there's no user
    if (!user) {
        // no user? go back to sign up:
        window.location = './';
    }

    // copy data from object to DOM properties:
    name.textContent = user.name;
    bank.textContent = user.bank;

    // if they're dead, say so in the header
    if (isDead(user)) {
        madness.textContent = 'DOA';
    }
    else {
        // otherwise show the user madness
        madness.textContent = user.madness;
    }

}

export default loadProfile;