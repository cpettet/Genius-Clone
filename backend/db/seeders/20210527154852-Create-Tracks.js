"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tracks",
      [
        {
          uploaderId: 1,
          artist: "Julien Baker",
          album: "Sprained Ankle",
          title: "Sprained Ankle",
          albumArtLink:
            "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/de/71/3c/de713ca5-7fe1-875d-4c8d-dfb21fb5d693/source/600x600bb.jpg",
          lyrics: `Wish I could write songs about anything other than death<br />But I can't go to bed without drawing the red, shaving off breaths;<br />Each one so heavy, each one so cumbersome<br />Each one a lead weight hanging between my lungs<br />Spilling my guts, sweat on a microphone, breaking my voice<br />Whenever I'm alone with you, can't talk but<br />"Isn't this weather nice? Are you okay?"<br />Should I go somewhere else and hide my face?<br />A sprinter learning to wait<br />A marathon runner, my ankles are sprained<br />A marathon runner, my ankles are sprained<br />`,
        },
        {
          uploaderId: 1,
          artist: "John Prine",
          album: "In Spite of Ourselves",
          title: "In Spite of Ourselves",
          albumArtLink:
            "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/1a/6c/f5/1a6cf5c2-8204-713b-e770-d6c1cab998e4/source/600x600bb.jpg",
          lyrics: `[Verse 1: John Prine]<br />
She don't like her eggs all runny<br />
She thinks crossin' her legs is funny<br />
She looks down her nose at money<br />
She gets it on like the Easter Bunny<br />
She's my baby, I'm her honey<br />
I'm never gonna let her go<br /><br />

[Verse 2: Iris Dement]<br />
He ain't got laid in a month of Sundays<br />
I caught him once and he was sniffin' my undies<br />
He ain't too sharp, but he gets things done<br />
Drinks his beer like it's oxygen<br />
He's my baby and I'm his honey<br />
I'm never gonna let him go<br /><br />

[Chorus: Both]<br />
In spite of ourselves, we'll end up a-sittin' on a rainbow<br />
Against all odds, honey, we're the big door prize<br />
We're gonna spite our noses right off of our faces<br />
There won't be nothin' but big old hearts dancin' in our eyes<br /><br />

[Verse 3: John Prine]<br />
She thinks all my jokes are corny<br />
Convict movies make her horny<br />
She likes ketchup on her scrambled eggs<br />
Swears like a sailor when she shaves her legs<br />
She takes a lickin' and keeps on tickin'<br />
I'm never gonna let her go<br /><br />


[Verse 4: Iris Dement]<br />
He's got more balls than a big brass monkey<br />
He's a whacked-out weirdo and a lovebug junkie<br />
Sly as a fox and crazy as a loon<br />
Payday comes and he's howlin' at the moon<br />
He's my baby, I don't mean maybe<br />
Never gonna let him go<br /><br />

[Chorus: Both]<br />
In spite of ourselves, we'll end up a-sittin' on a rainbow<br />
Against all odds, honey, we're the big door prize<br />
We're gonna spite our noses right off of our faces<br />
There won't be nothin' but big old hearts dancin' in our eyes<br />

In spite of ourselves, we'll end up a-sittin' on a rainbow<br />
Against all odds, honey, we're the big door prize<br />
We're gonna spite our noses right off of our faces<br />
There won't be nothin' but big old hearts dancin' in our eyes<br /><br />

[Outro: John Prine]<br />
In spite of ourselves<br />`,
        },
        {
          uploaderId: 1,
          artist: "John Denver",
          album: "John Denver Sings",
          title: "Leaving on a Jet Plane",
          albumArtLink:
            "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/d6/a5/9b/d6a59bf9-2366-9131-e0c4-8de808eb2be9/source/600x600bb.jpg",
          lyrics: `[Verse 1]<br />
All my bags are packed, I'm ready to go<br />
I'm standing here outside your door<br />
I hate to wake you up to say goodbye<br />
But the dawn is breaking, it's early morn<br />
The taxi's waiting, he's blowin' his horn<br />
Already I'm so lonesome I could die<br /><br />

[Chorus]<br />
So kiss me and smile for me<br />
Tell me that you'll wait for me<br />
Hold me like you'll never let me go<br />
'Cause I'm leaving on a jet plane<br />
Don't know when I'll be back again<br />
Oh babe, I hate to go<br /><br />

[Verse 2]<br />
There's so many times I've let you down<br />
So many times I've played around<br />
I tell you now, they don't mean a thing<br />
Every place I go, I'll think of you<br />
Every song I sing, I'll sing for you<br />
When I come back, I'll bring your wedding ring<br /><br />

[Chorus]<br />
So kiss me and smile for me<br />
Tell me that you'll wait for me<br />
Hold me like you'll never let me go<br />
'Cause I'm leaving on a jet plane<br />
Don't know when I'll be back again<br />
Oh babe, I hate to go<br />

[Verse 3]<br /><br />
Now the time has come to leave you<br />
One more time, let me kiss you<br />
Then close your eyes and I'll be on my way<br />
Dream about the days to come<br />
When I won't have to leave alone<br />
About the times I won't have to say<br /><br />

[Chorus]<br />
Kiss me and smile for me<br />
Tell me that you'll wait for me<br />
Hold me like you'll never let me go<br />
'Cause I'm leaving on a jet plane<br />
Don't know when I'll be back again<br />
Oh babe, I hate to go<br /><br />

[Outro]<br />
I'm leaving on a jet plane<br />
Don't know when I'll be back again<br />
Oh babe, I hate to go<br />`,
        },
        {
          uploaderId: 1,
          artist: "",
          album: "",
          title: "",
          albumArtLink: "",
          lyrics: ``,
        },
        {
          uploaderId: 1,
          artist: "",
          album: "",
          title: "",
          albumArtLink: "",
          lyrics: ``,
        },
        {
          uploaderId: 1,
          artist: "",
          album: "",
          title: "",
          albumArtLink: "",
          lyrics: ``,
        },
        {
          uploaderId: 1,
          artist: "",
          album: "",
          title: "",
          albumArtLink: "",
          lyrics: ``,
        },
        {
          uploaderId: 1,
          artist: "",
          album: "",
          title: "",
          albumArtLink: "",
          lyrics: ``,
        },
        {
          uploaderId: 1,
          artist: "",
          album: "",
          title: "",
          albumArtLink: "",
          lyrics: ``,
        },
        {
          uploaderId: 1,
          artist: "",
          album: "",
          title: "",
          albumArtLink: "",
          lyrics: ``,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tracks", null, {});
  },
};
