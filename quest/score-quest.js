  
function scoreQuest(choice, questId, user) {

    user.madness += choice.madness;
    user.bank += choice.bank;
    user.completed[questId] = true;
}

export default scoreQuest;