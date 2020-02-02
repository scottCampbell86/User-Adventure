// User info page that SAVES USER OBJECT TO LOCAL STORAGE
////// space for user info:
  ///// place for user to enter info: html INPUT
  ////need to retrieve that info
    /////create a form and save in data object: use FormData
// once you have the info in FormData object
// need to localStorage.setItem('userInfo')
//get formData
//place user to input info


export let makeUser = (formData) => {
  let num = 40;
  let madNum = 100;
  const user = {
      name: formData.get(userName),
      Madness Level: '${madNum}%',
      Bank-Roll: '${num} bones'
      completed: {}
  };

  return user;
}

// send user to local assigned to var json
export function saveUser(user) {
  const json = JSON.stringify(user);
  localStorage.setItem('user', json);
}

// get var jason from local by parsing and conditioning
export function getUser() {
  const json = localStorage.getItem('user');
  if (!json) return null;
  const user = JSON.parse(json);
  return user;
}

// what is the resultant state
function scoreQuest(choice, questId, user) {
  // add hp to user according to the choice's consequences
  user.grooveLevel += choice.groove-level;
  // add gold to the user according to the choices consqencuewbnf
  user.bankRoll += choice.bank-roll;
  // set this quest id to completed in the user
  user.completed[questId] = true;
}

export default scoreQuest;

//Need a function to calculate/modify bank roll
//Need a function to calculate/ modify madness level
//Need a function to track the completed cities

/*export const newMakeUser = (formData) => ({
  name: formData.get('name'),
  Madness Level;
  Bank-Roll;
  completed: {}
}); */

