const allQuotes = [ 
    {
        name: 'Tony Robbins',
        quote: 'If you do what you’ve always done, you’ll get what you’ve always gotten.' 
    },
    {
        name: 'Sheryl Sandberg',
        quote: 'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.'
    },
    {
        name: 'Steve Jobs',
        quote: 'Stay hungry, stay foolish.'
    },
    {
        name: 'Oprah Winfrey',
        quote: 'Don’t worry about being successful but work toward being significant and the success will naturally follow.'
    },
    {
        name: 'Mario Andretti',
        quote: 'If things seem under control, you are just not going fast enough.'
    },
    {
        name: 'Braveheart',
        quote: 'Every man dies, but not every man really lives.'
    },
    {
        name: 'Jack Canfield',
        quote: 'Don’t worry about failures, worry about the chances you miss when you don’t even try.'
    },
    {
        name: 'John A. Shedd',
        quote: 'A ship in the harbor is safe, but that is not what ships are built for.'
    },
    {
        name: 'Albert Einstein',
        quote: 'Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.'
    },
    {
        name: 'Bill Gates',
        quote: 'Success is a lousy teacher. It seduces smart people into thinking they can’t lose.'
    },
    {
        name: 'Dwayne Johnson',
        quote: 'The wall! Your success is on the other side. Can’t jump over it or go around it. You know what to do.'
    },
    {
        name: 'Arnold Schwarzenegger',
        quote: 'The worst thing I can be is the same as everybody else.'
    }
];

const quoteSpace = document.querySelector('.quote');
const authorSpace = document.querySelector('.author');
const button = document.querySelector('.container > button');
const body = document.querySelector('body');

const allBackgrounds = ['url(https://picsum.photos/id/1031/5446/3063)', 'url(https://picsum.photos/id/1051/4928/3264)', 'url(https://picsum.photos/id/1059/7360/4912)', 'url(https://picsum.photos/id/1067/5760/3840)'];

button.addEventListener('click', () =>{
    let random = Math.floor(Math.random() * allQuotes.length);
    let randomImage = Math.floor(Math.random() * allBackgrounds.length);
    quoteSpace.innerHTML = allQuotes[random].quote;
    authorSpace.innerHTML = allQuotes[random].name;
    body.style.backgroundImage = allBackgrounds[randomImage];
})