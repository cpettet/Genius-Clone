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
          createdAt: "2021-05-24 17:35:02.576-07",
          updatedAt: "2021-05-24 17:35:02.576-07",
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
          createdAt: "2021-05-24 17:35:02.576-07",
          updatedAt: "2021-05-24 17:35:02.576-07",
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
          createdAt: "2021-05-24 17:35:02.576-07",
          updatedAt: "2021-05-24 17:35:02.576-07",
        },
        {
          uploaderId: 1,
          artist: "Sufjan Stevens",
          album: "Carrie & Lowell",
          title: "Drawn to the Blood",
          albumArtLink:
            "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/98/78/32/98783291-4c4d-3d61-41c3-2f68fc946f2b/source/600x600bb.jpg",
          lyrics: `[Verse 1]<br />
I’m drawn to the blood<br />
The flight of a one-winged dove<br />
How? How did this happen?<br />
How? How did this happen?<br /><br />

The strength of his arm<br />
My lover caught me off guard<br />
How? Head of a rabbit<br />
How? Head of a rabbit<br /><br />

[Chorus]<br />
For my prayer has always been love<br />
What did I do to deserve this?<br /><br />

[Verse 2]<br />
With blood on my sleeve<br />
Delilah, avenge my grief<br />
How? God of Elijah<br />
How? God of Elijah<br /><br />

As fire to the sun<br />
Tell me what I have done<br />
How? Heart of a dragon?<br />
How? Heart of a dragon?<br /><br />

[Chorus]<br />
For my prayer has always been love<br />
What did I do to deserve this now?<br />
How did this happen?<br />`,
          createdAt: "2021-05-24 17:35:02.576-07",
          updatedAt: "2021-05-24 17:35:02.576-07",
        },
        {
          uploaderId: 1,
          artist: "Bon Iver",
          album: "For Emma, Forever Ago",
          title: "Re: Stacks",
          albumArtLink:
            "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/0a/82/75/0a827530-cc26-3785-bc62-a0b7e10aac90/source/600x600bb.jpg",
          lyrics: `This my excavation and to<br />
Day is Qumran<br />
Everything that happens is from now on<br />
This is pouring rain<br />
This is paralyzed<br />
<br />
I keep throwing it down, two<br />
Hundred at a time<br />
It's hard to find it when you knew it<br />
When your money's gone<br />
And you're drunk as hell<br />
<br />
On your back with your racks as he stacks your load<br />
In the back with the racks and he stacks your load<br />
In the back with the racks and you're unstacking your load<br />
<br />
I've been twisting to the sun<br />
I needed to replace<br />
And the fountain in the front yard is rusted out<br />
All my love was down<br />
In a frozen ground<br />
<br />
There's a black crow sitting across from me<br />
His wiry legs are crossed<br />
He's dangling my keys, he even fakes a toss<br />
Whatever could it be<br />
That has brought me to this loss?<br />
<br />
On your back with your racks as he stacks your load<br />
In the back with the racks and he stacks your load<br />
In the back with the racks and you're unstacking your load<br />
<br />
This is not the sound of a new man<br />
Or a crispy realization<br />
It's the sound of me unlocking and you lift away<br />
Your love will be<br />
Safe with me<br />
`,
          createdAt: "2021-05-24 17:35:02.576-07",
          updatedAt: "2021-05-24 17:35:02.576-07",
        },
        {
          uploaderId: 1,
          artist: "Taylor Swift",
          album: "folklore",
          title: "betty",
          albumArtLink:
            "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/25/44/bc/2544bc2a-fdd2-f146-4fc0-60b11de9d193/source/600x600bb.jpg",
          lyrics: `[Verse 1]<br />
Betty, I won't make assumptions<br />
About why you switched your homeroom, but<br />
I think it's 'cause of me<br />
Betty, one time I was riding on my skateboard<br />
When I passed your house<br />
It's like I couldn't breathe<br />
<br />
[Pre-Chorus]<br />
You heard the rumors from Inez<br />
You can't believe a word she says<br />
Most times, but this time it was true<br />
The worst thing that I ever did<br />
Was what I did to you<br />
<br />
[Chorus]<br />
But if I just showed up at your party<br />
Would you have me? Would you want me?<br />
Would you tell me to go fuck myself<br />
Or lead me to the garden?<br />
In the garden, would you trust me<br />
If I told you it was just a summer thing?<br />
I'm only seventeen, I don't know anything<br />
But I know I miss you<br />
<br />
[Verse 2]<br />
Betty, I know where it all went wrong<br />
Your favorite song was playing<br />
From the far side of the gym<br />
I was nowhere to be found<br />
I hate the crowds, you know that<br />
Plus, I saw you dance with him<br />
<br />
[Pre-Chorus]<br />
You heard the rumors from Inez<br />
You can't believe a word she says<br />
Most times, but this time it was true<br />
The worst thing that I ever did<br />
Was what I did to you<br />
<br />
[Chorus]<br />
But if I just showed up at your party<br />
Would you have me? Would you want me?<br />
Would you tell me to go fuck myself<br />
Or lead me to the garden?<br />
In the garden, would you trust me<br />
If I told you it was just a summer thing?<br />
I'm only seventeen, I don't know anything<br />
But I know I miss you<br />
<br />
[Bridge]<br />
I was walking home on broken cobblestones<br />
Just thinking of you when she pulled up like<br />
A figment of my worst intentions<br />
She said "James, get in, let's drive"<br />
Those days turned into nights<br />
Slept next to her, but<br />
I dreamt of you all summer long<br />
<br />
[Verse 3]<br />
Betty, I'm here on your doorstep<br />
And I planned it out for weeks now<br />
But it's finally sinkin' in<br />
Betty, right now is the last time<br />
I can dream about what happens when<br />
You see my face again<br />
<br />
[Pre-Chorus]<br />
The only thing I wanna do<br />
Is make it up to you<br />
So I showed up at your party<br />
Yeah, I showed up at your party<br />
<br />
[Chorus]<br />
Yeah, I showed up at your party<br />
Will you have me? Will you love me?<br />
Will you kiss me on the porch<br />
In front of all your stupid friends?<br />
If you kiss me, will it be just like I dreamed it?<br />
Will it patch your broken wings?<br />
I'm only seventeen, I don't know anything<br />
But I know I miss you<br />
<br />
[Outro]<br />
Standing in your cardigan<br />
Kissin' in my car again<br />
Stopped at a streetlight<br />
You know I miss you<br />
`,
          createdAt: "2021-05-24 17:35:02.576-07",
          updatedAt: "2021-05-24 17:35:02.576-07",
        },
        {
          uploaderId: 1,
          artist: "Beirut",
          album: "The Flying Club Cup",
          title: "Nantes",
          albumArtLink:
            "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/b4/69/c9/b469c9aa-fce0-7b86-ca63-80a39aeef26e/source/600x600bb.jpg",
          lyrics: `[Verse: Zach Condon]<br />
Well it's been a long time, long time now<br />
Since I've seen you smile<br />
And I'll gamble away my fright<br />
And I'll gamble away my time<br />
And in a year, a year or so<br />
This will slip into the sea<br />
Well, it's been a long time, long time now<br />
Since I've seen you smile<br />
<br />
[Chorus: Zach Condon]<br />
Nobody raise your voices<br />
Just another night in Nantes<br />
Nobody raise your voices<br />
Just another night in Nantes<br />
<br />
[Bridge: Simone Simon & Fernand Ledoux]<br />
...plaisanter<br />
Oh non je t'en prie, nous ne sommes pas chez nous<br />
Oh je t'assure que Victoire...<br />
Non, laisse moi!<br />
Mais qu'est-ce que tu as aujourd'hui?<br />
J'ai que les hommes me dégoûtent, vous ne pensez qu'à ça<br />
<br />
[Verse: Zach Condon]<br />
Well it's been a long time, long time now<br />
Since I've seen you smile<br />
And I'll gamble away my fright<br />
And I'll gamble away my time<br />
And in a year, a year or so<br />
This will slip into the sea<br />
Well, it's been a long time, long time now<br />
Since I've seen you smile<br />
`,
          createdAt: "2021-05-24 17:35:02.576-07",
          updatedAt: "2021-05-24 17:35:02.576-07",
        },
        {
          uploaderId: 1,
          artist: "The Magnetic Fields",
          album: "69 Love Songs",
          title: "Reno Dakota",
          albumArtLink:
            "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/f0/e8/ba/f0e8bae9-b952-e9d9-3f56-78a497bafc2b/source/600x600bb.jpg",
          lyrics: `Reno Dakota<br />
There's not an iota<br />
Of kindness in you<br />
You know you enthrall me<br />
And yet you don't call me<br />
It's making me blue<br />
Pantone 292<br />
<br />
Reno Dakota<br />
I'm reaching my quota<br />
Of tears for the year<br />
Alas and alack<br />
You just don't call me back<br />
You have just disappeared<br />
It makes me drink beer<br />
<br />
I know you're a recluse<br />
You know that's no excuse<br />
Reno that's just a ruse<br />
Do not play fast and loose with my heart<br />
<br />
Reno Dakota<br />
I'm no Nino Rota<br />
I don't know the score<br />
Have I annoyed you<br />
Or is there a boy who<br />
Well he's just a whore<br />
I've had him before<br />
It makes me drink more<br />
`,
          createdAt: "2021-05-24 17:35:02.576-07",
          updatedAt: "2021-05-24 17:35:02.576-07",
        },
        {
          uploaderId: 1,
          artist: "Fleet Foxes",
          album: "Fleet Foxes",
          title: "Tiger Mountain Peasant Song",
          albumArtLink:
            "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/08/0d/40/080d4084-4239-61d4-1392-d34db2f413e6/source/600x600bb.jpg",
          lyrics: `[Verse 1]<br />
Wanderers this morning came by<br />
Where did they go, graceful in the morning light?<br />
To banner fair, to follow you softly<br />
In the cold mountain air<br />
<br />
[Verse 2]<br />
Through the forest, down to your grave<br />
Where the birds wait, and the tall grasses wave<br />
They do not know you anymore, more, more, more<br />
<br />
[Chorus]<br />
Dear shadow alive and well<br />
How can the body die?<br />
You tell me everything<br />
Anything true<br />
<br />
[Verse 3]<br />
Into town one morning I went<br />
Staggering through premonitions of my death<br />
I don't see anybody that dear to me<br />
<br />
[Chorus]<br />
Dear shadow alive and well<br />
How can the body die?<br />
You tell me everything<br />
Anything true<br />
<br />
[Outro]<br />
Jesse<br />
I don't know what I have done<br />
I'm turning myself to a demon<br />
I don't know what I have done<br />
I'm turning myself to a demon<br />
`,
          createdAt: "2021-05-24 17:35:02.576-07",
          updatedAt: "2021-05-24 17:35:02.576-07",
        },
        {
          uploaderId: 1,
          artist: "Bob Dylan",
          album: "The Freewheelin' Bob Dylan",
          title: "Blowing in the Wind",
          albumArtLink:
            "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/10/3d/a2/103da2b8-8035-6521-7def-066b921aa6db/source/600x600bb.jpg",
          lyrics: `[Verse 1]<br />
How many roads must a man walk down<br />
Before you call him a man?<br />
How many seas must the white dove sail<br />
Before she sleeps in the sand?<br />
Yes, and how many times must the cannonballs fly<br />
Before they're forever banned?<br />
<br />
[Refrain]<br />
The answer, my friend, is blowin' in the wind<br />
The answer is blowin' in the wind<br />
<br />
[Verse 2]<br />
Yes, and how many years can a mountain exist<br />
'Fore it is washed to the sea?<br />
Yes, and how many years can some people exist<br />
Before they're allowed to be free?<br />
Yes, and how many times can a man turn his head<br />
And pretend that he just doesn't see?<br />
<br />
[Refrain]<br />
The answer, my friend, is blowin' in the wind<br />
The answer is blowin' in the wind<br />
<br />
[Verse 3]<br />
Yes, and how many times must a man look up<br />
Before he can see the sky?<br />
Yes, and how many ears must one man have<br />
Before he can hear people cry?<br />
Yes, and how many deaths will it take till he knows<br />
That too many people have died?<br />
<br />
[Refrain]<br />
The answer, my friend, is blowin' in the wind<br />
The answer is blowin' in the wind<br />
`,
          createdAt: "2021-05-24 17:35:02.576-07",
          updatedAt: "2021-05-24 17:35:02.576-07",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tracks", null, {});
  },
};
