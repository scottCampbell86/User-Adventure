// My Vars
const userSingIn = document.getElementById('name')
//state
let madnessLevel;
let bankRoll;
let cityComplete;
//
let displayMadness = document.getElementById('madness-level');
let displayBank = document.getElementById('bank-roll');
displayMadness.textContent = madnessLevel;
displayBank.textContent = bankRoll;

const initiateState = () => {
totalViews = 0;
bankRoll = 0; 
cityComplete = 0;

};


userSignIn.addEventListener("submit", (e) => {
    e.preventDefault();
    //making a new FormData object
    const formData = new FormData(userSignIn);
    //use formData to make an object
    const user = makeUser.get(formData);

    saveUser(user);

    windown.location='map';