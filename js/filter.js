const btns = [
    { id: 1, name: 'Graphic' },
    { id: 2, name: 'Illustration' },
    { id: 3, name: 'Logo' },
    { id: 4, name: 'Music' },
];

// "All" first, then the alphabetical list
const filters = [{ id: 0, name: 'All' }, ...btns];

document.getElementById('fltrbtn').innerHTML = filters.map(({ id, name }) => {
    return `<button class="fil-p" onclick="filterItems(${id})">${name}</button>`;
}).join('');

const product = [
    {
        id:1,
        image: '',
        title: 'NEVER AGAIN',
        category: 'Graphic',
        description: 'Small study on distressed design. Used to commemorate the military dictatorship and its victims.',
    },
    {
        id:2,
        image: '',
        title: 'BERSERKER/RESEARCHER',
        category: 'Illustration',
        description: 'Character design for a personal project, testing color theory and anatomy.',
    },
    {
        id:3,
        image: '',
        title: 'ASHWORM',
        category: 'Logo',
        description: 'Styled logo for my own TTRPG project, based on old-school death metal and black metal aesthetic.',
    },
    {
        id:4,
        image: '',
        title: 'EMOTION EATER',
        category: 'Music',
        description: 'First single of my modern metalcore band. Did voices, lyrics, album art and video editing for this single.',
    },
    {
        id:1,
        image: '',
        title: 'RESISTENCIA STGO SXE',
        category: 'Graphic',
        description: 'Started as a fun project mixing tattoos, hardcore and design. Now used as a merch design for the STGO SXE Crew.',
    },
    {
        id:2,
        image: '',
        title: 'SUMMER NIGHT KINK',
        category: 'Illustration',
        description: 'Character design for a personal project, testing color theory and anatomy.',
    },
    {
        id:3,
        image: '',
        title: 'GODMONEY',
        category: 'Logo',
        description: 'Logo for the Tokyo-based upcoming metallic hxc band GODMONEY. Based on 90s hxc and industrial logos.',
    },
    {
        id:1,
        image: '',
        title: 'GABBERCORE',
        category: 'Graphic',
        description: 'Study focused on creating a mascot and poster for a techno and hardcore festival. Based on Y2K and underground design styles.',
    },
    {
        id:2,
        image: '',
        title: 'BACKGROUND',
        category: 'Illustration',
        description: 'Background drawing study for a manga scene. Used old european castles for reference.',
    },
    {
        id:3,
        image: '',
        title: 'DIGITALCOFFIN',
        category: 'Logo',
        description: 'Logo for the studio you are checking right now. Based on cyberpunk/hacker aesthetics.',
    },
    

];

product.sort((a,b) => a.title.localeCompare(b.title));

const filterItems = (id) => {
    if (id === 0) {
        displayItem(product);
        return;
    }

    const selected = filters.find (f => f.id ===id).name;
    displayItem(product.filter(item =>item.category === selected));
};

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map(({ image, title, category, description }) => {
        return `
            <div class="box">
                <h2>${title}</h2>
                <div class="img-box">
                    <img class="images" src="${image}" alt="${title}">
                </div>
                <div class="bottom">
                    <h3>${category}</h3>
                    <p>${description}</p>
                </div>
            </div>`;
    }).join('');
};
displayItem(product);