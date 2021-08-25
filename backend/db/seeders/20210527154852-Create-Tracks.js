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
          lyrics: `Wish I could write songs about anything other than death
But I can't go to bed without drawing the red, shaving off breaths;
Each one so heavy, each one so cumbersome
Each one a lead weight hanging between my lungs
Spilling my guts, sweat on a microphone, breaking my voice
Whenever I'm alone with you, can't talk but
"Isn't this weather nice? Are you okay?"
Should I go somewhere else and hide my face?
A sprinter learning to wait
A marathon runner, my ankles are sprained
A marathon runner, my ankles are sprained`,
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
          lyrics: `[Verse 1: John Prine]
She don't like her eggs all runny
She thinks crossin' her legs is funny
She looks down her nose at money
She gets it on like the Easter Bunny
She's my baby, I'm her honey
I'm never gonna let her go

[Verse 2: Iris Dement]
He ain't got laid in a month of Sundays
I caught him once and he was sniffin' my undies
He ain't too sharp, but he gets things done
Drinks his beer like it's oxygen
He's my baby and I'm his honey
I'm never gonna let him go

[Chorus: Both]
In spite of ourselves, we'll end up a-sittin' on a rainbow
Against all odds, honey, we're the big door prize
We're gonna spite our noses right off of our faces
There won't be nothin' but big old hearts dancin' in our eyes

[Verse 3: John Prine]
She thinks all my jokes are corny
Convict movies make her horny
She likes ketchup on her scrambled eggs
Swears like a sailor when she shaves her legs
She takes a lickin' and keeps on tickin'
I'm never gonna let her go


[Verse 4: Iris Dement]
He's got more balls than a big brass monkey
He's a whacked-out weirdo and a lovebug junkie
Sly as a fox and crazy as a loon
Payday comes and he's howlin' at the moon
He's my baby, I don't mean maybe
Never gonna let him go

[Chorus: Both]
In spite of ourselves, we'll end up a-sittin' on a rainbow
Against all odds, honey, we're the big door prize
We're gonna spite our noses right off of our faces
There won't be nothin' but big old hearts dancin' in our eyes

In spite of ourselves, we'll end up a-sittin' on a rainbow
Against all odds, honey, we're the big door prize
We're gonna spite our noses right off of our faces
There won't be nothin' but big old hearts dancin' in our eyes

[Outro: John Prine]
In spite of ourselves`,
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
          lyrics: `[Verse 1]
All my bags are packed, I'm ready to go
I'm standing here outside your door
I hate to wake you up to say goodbye
But the dawn is breaking, it's early morn
The taxi's waiting, he's blowin' his horn
Already I'm so lonesome I could die

[Chorus]
So kiss me and smile for me
Tell me that you'll wait for me
Hold me like you'll never let me go
'Cause I'm leaving on a jet plane
Don't know when I'll be back again
Oh babe, I hate to go

[Verse 2]
There's so many times I've let you down
So many times I've played around
I tell you now, they don't mean a thing
Every place I go, I'll think of you
Every song I sing, I'll sing for you
When I come back, I'll bring your wedding ring

[Chorus]
So kiss me and smile for me
Tell me that you'll wait for me
Hold me like you'll never let me go
'Cause I'm leaving on a jet plane
Don't know when I'll be back again
Oh babe, I hate to go

[Verse 3]
Now the time has come to leave you
One more time, let me kiss you
Then close your eyes and I'll be on my way
Dream about the days to come
When I won't have to leave alone
About the times I won't have to say

[Chorus]
Kiss me and smile for me
Tell me that you'll wait for me
Hold me like you'll never let me go
'Cause I'm leaving on a jet plane
Don't know when I'll be back again
Oh babe, I hate to go

[Outro]
I'm leaving on a jet plane
Don't know when I'll be back again
Oh babe, I hate to go`,
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
          lyrics: `[Verse 1]
I’m drawn to the blood
The flight of a one-winged dove
How? How did this happen?
How? How did this happen?

The strength of his arm
My lover caught me off guard
How? Head of a rabbit
How? Head of a rabbit

[Chorus]
For my prayer has always been love
What did I do to deserve this?

[Verse 2]
With blood on my sleeve
Delilah, avenge my grief
How? God of Elijah
How? God of Elijah

As fire to the sun
Tell me what I have done
How? Heart of a dragon?
How? Heart of a dragon?

[Chorus]
For my prayer has always been love
What did I do to deserve this now?
How did this happen?`,
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
          lyrics: `This my excavation and to
Day is Qumran
Everything that happens is from now on
This is pouring rain
This is paralyzed

I keep throwing it down, two
Hundred at a time
It's hard to find it when you knew it
When your money's gone
And you're drunk as hell

On your back with your racks as he stacks your load
In the back with the racks and he stacks your load
In the back with the racks and you're unstacking your load

I've been twisting to the sun
I needed to replace
And the fountain in the front yard is rusted out
All my love was down
In a frozen ground

There's a black crow sitting across from me
His wiry legs are crossed
He's dangling my keys, he even fakes a toss
Whatever could it be
That has brought me to this loss?

On your back with your racks as he stacks your load
In the back with the racks and he stacks your load
In the back with the racks and you're unstacking your load

This is not the sound of a new man
Or a crispy realization
It's the sound of me unlocking and you lift away
Your love will be
Safe with me
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
          lyrics: `[Verse 1]
Betty, I won't make assumptions
About why you switched your homeroom, but
I think it's 'cause of me
Betty, one time I was riding on my skateboard
When I passed your house
It's like I couldn't breathe

[Pre-Chorus]
You heard the rumors from Inez
You can't believe a word she says
Most times, but this time it was true
The worst thing that I ever did
Was what I did to you

[Chorus]
But if I just showed up at your party
Would you have me? Would you want me?
Would you tell me to go fuck myself
Or lead me to the garden?
In the garden, would you trust me
If I told you it was just a summer thing?
I'm only seventeen, I don't know anything
But I know I miss you

[Verse 2]
Betty, I know where it all went wrong
Your favorite song was playing
From the far side of the gym
I was nowhere to be found
I hate the crowds, you know that
Plus, I saw you dance with him

[Pre-Chorus]
You heard the rumors from Inez
You can't believe a word she says
Most times, but this time it was true
The worst thing that I ever did
Was what I did to you

[Chorus]
But if I just showed up at your party
Would you have me? Would you want me?
Would you tell me to go fuck myself
Or lead me to the garden?
In the garden, would you trust me
If I told you it was just a summer thing?
I'm only seventeen, I don't know anything
But I know I miss you

[Bridge]
I was walking home on broken cobblestones
Just thinking of you when she pulled up like
A figment of my worst intentions
She said "James, get in, let's drive"
Those days turned into nights
Slept next to her, but
I dreamt of you all summer long

[Verse 3]
Betty, I'm here on your doorstep
And I planned it out for weeks now
But it's finally sinkin' in
Betty, right now is the last time
I can dream about what happens when
You see my face again

[Pre-Chorus]
The only thing I wanna do
Is make it up to you
So I showed up at your party
Yeah, I showed up at your party

[Chorus]
Yeah, I showed up at your party
Will you have me? Will you love me?
Will you kiss me on the porch
In front of all your stupid friends?
If you kiss me, will it be just like I dreamed it?
Will it patch your broken wings?
I'm only seventeen, I don't know anything
But I know I miss you

[Outro]
Standing in your cardigan
Kissin' in my car again
Stopped at a streetlight
You know I miss you
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
          lyrics: `[Verse: Zach Condon]
Well it's been a long time, long time now
Since I've seen you smile
And I'll gamble away my fright
And I'll gamble away my time
And in a year, a year or so
This will slip into the sea
Well, it's been a long time, long time now
Since I've seen you smile

[Chorus: Zach Condon]
Nobody raise your voices
Just another night in Nantes
Nobody raise your voices
Just another night in Nantes

[Bridge: Simone Simon & Fernand Ledoux]
...plaisanter
Oh non je t'en prie, nous ne sommes pas chez nous
Oh je t'assure que Victoire...
Non, laisse moi!
Mais qu'est-ce que tu as aujourd'hui?
J'ai que les hommes me dégoûtent, vous ne pensez qu'à ça

[Verse: Zach Condon]
Well it's been a long time, long time now
Since I've seen you smile
And I'll gamble away my fright
And I'll gamble away my time
And in a year, a year or so
This will slip into the sea
Well, it's been a long time, long time now
Since I've seen you smile
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
          lyrics: `Reno Dakota
There's not an iota
Of kindness in you
You know you enthrall me
And yet you don't call me
It's making me blue
Pantone 292

Reno Dakota
I'm reaching my quota
Of tears for the year
Alas and alack
You just don't call me back
You have just disappeared
It makes me drink beer

I know you're a recluse
You know that's no excuse
Reno that's just a ruse
Do not play fast and loose with my heart

Reno Dakota
I'm no Nino Rota
I don't know the score
Have I annoyed you
Or is there a boy who
Well he's just a whore
I've had him before
It makes me drink more
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
          lyrics: `[Verse 1]
Wanderers this morning came by
Where did they go, graceful in the morning light?
To banner fair, to follow you softly
In the cold mountain air

[Verse 2]
Through the forest, down to your grave
Where the birds wait, and the tall grasses wave
They do not know you anymore, more, more, more

[Chorus]
Dear shadow alive and well
How can the body die?
You tell me everything
Anything true

[Verse 3]
Into town one morning I went
Staggering through premonitions of my death
I don't see anybody that dear to me

[Chorus]
Dear shadow alive and well
How can the body die?
You tell me everything
Anything true

[Outro]
Jesse
I don't know what I have done
I'm turning myself to a demon
I don't know what I have done
I'm turning myself to a demon
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
          lyrics: `[Verse 1]
How many roads must a man walk down
Before you call him a man?
How many seas must the white dove sail
Before she sleeps in the sand?
Yes, and how many times must the cannonballs fly
Before they're forever banned?

[Refrain]
The answer, my friend, is blowin' in the wind
The answer is blowin' in the wind

[Verse 2]
Yes, and how many years can a mountain exist
'Fore it is washed to the sea?
Yes, and how many years can some people exist
Before they're allowed to be free?
Yes, and how many times can a man turn his head
And pretend that he just doesn't see?

[Refrain]
The answer, my friend, is blowin' in the wind
The answer is blowin' in the wind

[Verse 3]
Yes, and how many times must a man look up
Before he can see the sky?
Yes, and how many ears must one man have
Before he can hear people cry?
Yes, and how many deaths will it take till he knows
That too many people have died?

[Refrain]
The answer, my friend, is blowin' in the wind
The answer is blowin' in the wind
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
