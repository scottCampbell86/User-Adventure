import { getUser } from '../data/api.js';
import isDead from './is-dead.js';

function loadProfile() {

    const name = document.getElementById('name');
    const madness = document.getElementById('madness');
    const bank = document.getElementById('bank');


    const user = getUser();

  
    if (!user) {
    
        window.location = './';
    }


    name.textContent = user.name;
    bank.textContent = user.bank;

   
    if (isDead(user)) {
        madness.textContent = ` so gone you lost it`;
    }
    else {
 
        madness.textContent = user.madness;
    }

}

export default loadProfile;