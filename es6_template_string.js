const name = "Tashi Nyima";
const age = 32;
const sentences = `My name is ${name} and I am ${age + 2} old`;

const person = {
    name: 'Tara',
    job: 'Web Developer',
    city: 'London',
    bio: 'Front End Developer from Tibet',
};

const markup = `
    <div class="person">
        <h2>
            ${person.name}
            <span class="job">${person.job}</span>
        </h2>
        <p class="location">${person.city}</p>
        <p class="bio">${person.bio}</p>
    </div>
`;

// document.body.innerHTML = markup;

// Nested Template String
const dogs = [
    {name: 'Hachi', age: 10},
    {name: 'Marri', age: 8},
    {name: 'Bingo', age: 5},
];

const dogMarkup = 
`
    <ul class="dogs">
        ${dogs.map(dog => 
        `
            <li>
                ${dog.name} 
                is 
                ${dog.age * 7}'s old
            </li>
        `).join('')
        }
    </ul>
`;

// document.body.innerHTML = dogMarkup;

// Tenary Operator
const song = {
    name: "Dying to live",
    artist: 'Tupac',
    featuring: 'Biggie Smalls'
};

const songMarkup = 
`
    <div class="song">
        <p>
            ${song.name} - ${song.artist}
            ${song.featuring ? `(Featuring ${song.featuring})`: ''}
        </p>
    </div>
`;

// document.body.innerHTML = songMarkup;


// Calling function in Template String
const beer = {
    name: 'Lhasa Beer',
    brewery: 'Lhasa Brewery',
    keywords: ['pale', 'cloudy', 'spiced', 'crisp']
};

const renderKeywords = keywords => {
    return `
        <ul> 
            ${keywords.map(keyword => 
            `
                <li>${keyword}</li>
            `).join('')}
        </ul>
    `
};

const beerMarkup = 
`
    <div class="beer">
        <h2>${beer.name}</h2>
        <p class="brewery">${beer.brewery}</p>
        ${renderKeywords(beer.keywords)}
    </div>
`;

// document.body.innerHTML = beerMarkup;

// Tagged Template String
const highLight = (strings, ...values) => {
    let str = '';
    strings.forEach((string, i) => {
        str += `${string} <span contenteditable class="hl">${values[i] || ''}</span>`;
    });
    return str;
};

const dogName = 'Hachi';
const dogAge  = 10;
const sentence = highLight `My dog's name is ${dogName} and he is ${dogAge} years old`;

document.body.innerHTML = sentence;