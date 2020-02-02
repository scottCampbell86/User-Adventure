const nyc = {
    id: 'nyc',
    title: 'Big Apple',
    map: {
        top: '30%',
        left: '90%',
    },
  //image
    description: `
      All the way from Lowell, you made it to NYC!
      You're a student and a standout on the gridiron at Columbia, not bad for kid from Mill-City.

      But tonight you stumbled into a haunt on 9th and 3rd and met a cool, cool cat named Ginsberg, he was reading this poem he was writing, Howl.

      So what do you think? Call it a night, get some rest for the big game tomorrow, or see what Ginsberg and his crew of pals have planned for the evening?`,

    choices: [{
        id: 'rest',
        description: 'Call it a night',
        result: 
      'You did great in the game, but you never got around to writing that book about that trip you never took... And now you live in Queens with a wife and kids. Every winter you plan on dusting off that typewriter, but, you know how it goes...',
        madness: 0,
      // this ends the game
          
    }, {
        id: 'howl',
        description: 'Out all night',
        result: 
          "You went out all night, hopped from place to place, alley to alley, and ended up at some apartment, somewhere in Manhattan, and your new poet friend introduces you to a guy named Neal Cassady. And right as the sun was rising over the East River, Neal said, 'man, forget the game, the road is out there, let's go!",
        madness: 100,

    }]
};


                              /// CHICAGO 


const chicago = {
    id: 'chicago',
    title: 'The Windy City',
  //image;
    map: {
        top: '20%',
        left: '50%',
    },
  
    description: 
    `You made it the windy city! Neal drove so you're good and rested. It's early, so what do you feel like doing?`,
    choices: [{
        id: 'loop',
        description: 'Stroll the Loop by yourself',
        result: 
          `"You spend the day crazed, strolling about the loop, digging the screeching trolleys, newsboys, gals cutting by, the smell of fried food and beer in the air, neons winking," and now you regret only passing through town the last time you were in this town.`,
        madness: 100,
      //
      // you spend $10
      // 
      //
    }, {
        id: 'neal',
        description: 'Ask Neal to hit the Loop with you',
        result: 
          'All Neal could talk about while you were cruising the Loop was how good all the food smelled and how hungry he was from all the driving and how he was going to eat as many hot dogs and pieces of fried dough as he could. And he did. He spent $35 on the grub and some drinks and passed out before dark. Watch your budget, you need that gas money! And don not be too bummed about the wasted night, there is much road ahead... ',
        madness: -30,

    }]
};
                              /// NEW ORLEANS


const newOrleans = {
    id: 'new-orleans',
    title: 'The Big Easy',
    map: {
        top: '80%',
        left: '50%'
    },
  //image;
    description: 
      `Those were some strange days spent on the farm at Old Bull Lee's on the way to The Big Easy. A wild and reckless cat himself, but a wise one no less, and he had some worrisome thoughts about Neal, he even said you should ditch Neal and stay there with him and his wife in Louisianna. But you brush it off, shake off some of those aches and flu feelings, and set out for New Orleans. What do you do to get back up and jumping! `,

    choices: [{
        id: 'farm',
        description: `You need to think it through. Go back to Old Bull Lee's for more wisdom.`,
        result: 
          `You didn't find any wisdom down there at Old Bull Lee's. No inspiration. Or much of anything that's any good. You write back and forth with Allen for sometime, but he is still waiting to hear back from you regarding the last letter he sent, that was a year ago... `,
        madness: 0,
      // this ends the game
    
    }, {
        id: 'music',
        description: 'Stick with Neal, see if Old Bull Lee is wrong.',
        result: 
          `You made the right choice, you spent the night digging the music, all the jazz, "live in the muds of New Orleans." You ran into a friend of Dizzy's who gave you a place to crash and you were up all night and even stayed for another. Even got yourself a free tank of gas on the way out of town, thinking about the way your writing should sound.`,
        madness: 100,
    }]
};

                                /// DENVER


const denver = {
    id: 'denver',
    title: 'Denver',
    map: {
        top: '35%',
        left: '30%'
    },
  //image;
    description: 
      `Denver. "And there in the blue air you see for the first time, far off, the great snowy tops of the Rocky Mountains. You knew you had to get to Denver at once!" You know about the music, you know about the bars, you know about it all. But you also know that Neal has some business to attend to. His long lost father might be living there. He might need some help trying to find him.`,
    choices: [{
        id: 'friend',
        description: `You stick with Neal and help however you can, even though the city Calls`,
        result: 
          `Turns out, Neal was short on patience and it was only a few calls in the phone book and you were off. What a night! You "stumbled along with the most wicked grin of joy in the world, among the bums and beat cowboys of Larimer Street."`,
        madness: 100,
    }, {
        id: 'ditch',
        description: `Can't resist, just have to hit Larimer, sorry, Neal, we'll catch up later.`,
        result: 
          `Neal understood. He didn't have luck but he ran into somefriend's from back home. You had a good time for yourself too, but you also spend your last dime. And so did Neal. And then you got a flat before you breached city limits. Time to hitch back. Not ideal, but it could be worse, after all, "there is nothing behind you, and everything ahead of you, as is ever so on the road."`,
        madness: -30
    }]
};

                              /// SF

const sanFrancisco = {
    id: 'san-francisco',
    title: 'Frisco',
    map: {
        top: '45%',
        left: '1%',
    },
  //image;
    description: `How'd you do it? All the way to 'Frisco? That's a lot of traveling. That's a lot of road. A lot to tell. But it isn't over, or is it? `,

    choices: [{
        id: 'home',
        description: `So you're heading back—surely you'll find something fun to do...`,
        result: `Maybe you can even make a stop on the way.`,
        madness: -10,

    }, {
        id: 'mexico-ciy',
        description: `Neal won't stop talking about Mexico City. Want to tag along?`,
        result: 
          `Should've gone elsewhere, that's for sure. You could dig the mamba, but the rest of that trip...what a trip. Neal was so crazed he ditched you somewhere south of the boder sick with dysentry! Good luck getting back East!`,
        madness: 0,

      // this ends the game


    }]
};
const cities = [
    nyc,
    chicago,
    newOrleans,
    denver,
    sanFrancisco,
];

export default cities;

