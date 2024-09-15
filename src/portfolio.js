const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://bencatcraw.github.io',
    title: 'BC.',
}

const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Ben Crawford',
    role: 'Game Developer',
    description:
        '',
    resume: 'https://example.com',
    social: {
        linkedin: 'https://linkedin.com/in/bencatcraw/',
        github: 'https://github.com/bencatcraw',
    },
}

const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: 'HAVEN ProjecTable',
        description:
            'A collaborative project between LAVA and HSEO focused on visualization of climate and energy data.',
        stack: ['Unity', 'C#', 'ArcGIS'],
        sourceCode: 'https://github.com/bencatcraw/HSEOHAVENTABLE',
        livePreview: 'https://www.youtube.com/watch?v=U9C2qxI-Weg',
    },
    {
        name: 'Cookie & Cream VR Cafe',
        description:
            'Cookie & Cream is a coop VR cooking game where the players play as cats. This game was created for ICS 486.',
        stack: ['Unity', 'VR', 'Quest 3'],
        sourceCode: 'https://github.com/bencatcraw/VRCATCAFE',
        livePreview: 'https://drive.google.com/file/d/1qqZUKlRQVLEvvm8Fp6iyKTJQVUmy5ujA/view',
    },
    {
        name: 'Life Before Death',
        description:
            'Life Before Death is a walking simulator/escape room game focused on interactive storytelling, diverse puzzles, and high quality graphics.',
        stack: ['Unreal Engine 5', 'Blueprints', 'Quixel'],
        livePreview: 'https://bcc394.wixsite.com/lifebeforedeath',
    },
    {
        name: 'homebound',
        description:
            'homebound is a astmospheric puzzle platformer about a lonely astronaut and fluffy new friend. homebound is available for free on Steam.',
        stack: ['Unity', 'Steam', 'Pixel Art'],
        livePreview: 'https://store.steampowered.com/app/2568870/homebound/',
    },
    {
        name: 'Mars Mech Mission',
        description:
            'A tower defense game about a lone dwarf who has to defend his space base from robotic crabs and scorpions. This game was created for the ICS 369.',
        stack: ['Unity', 'C#'],
        sourceCode: 'https://github.com/bencatcraw/I3T4/',
        livePreview: 'https://bencatcraw.itch.io/mmm/',
    },
    {
        name: 'AR Souveneir',
        description:
            'This project was created for my AR/VR Development class. The task was to create an interactable virtual souveneir that is tracked in real time on a surface such as this "merge cube"',
        stack: ['Unity', 'AR'],
        sourceCode: 'https://github.com/bencatcraw/ARCube',
        livePreview: 'https://drive.google.com/file/d/1fqUwz0IlJJDpctqnZcUi0ydNmsvN8gkQ/view?usp=sharing',
    },
    {
        name: 'Untitled Mech Game',
        description:
            'This game was created for the MechJam III game jam by the UH Manoa Game Dev Club. The game is about a mech that can switch between earth, water, and fire abilities that let it solve puzzles to progress through the levels.',
        stack: ['Unity', 'C#'],
        livePreview: 'https://bencatcraw.itch.io/untitled-mech-game',
    },
    {
        name: 'Hawaii Healthcare Dashboard',
        description:
            'A dashboard that allows users to search for healthcare facilities and filter them by name, services, insurance, island, and facility type. Created for Hawaii Annual Code Challenge 2023',
        stack: ['Meteor', 'React', 'MongoDB'],
        sourceCode: 'https://github.com/bencatcraw/HACC2023',
    },
    {
        name: 'Happening @ Manoa',
        description:
            'An application for members of the UH Manoa community to see what events are going on in their community as well as search for events that aligns with their interests.',
        stack: ['Meteor', 'React', 'MongoDB'],
        sourceCode: 'https://github.com/happeningatmanoa/happeningatmanoa',
        livePreview: 'https://happeningatmanoa.github.io/',
    },
    {
        name: 'CreateX Horror Experience',
        description:
            'This is a horror experience created using the CreateX lab at UH West Oahu. CreateX is an array of projectors that project videos and applications onto the walls and floors of the room to create immersive experiences.',
        stack: ['Unity', 'CreateX', '3D Projection'],
        sourceCode: 'https://github.com/bencatcraw/VRARCREATEX3',
        livePreview: 'https://drive.google.com/file/d/1HSnV7SnfJoOdOeAte26IjJ3HBAsbNIlA/view',
    },

]

const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'Unity',
    'Unreal Engine',
    'C#',
    'Java',
    'C++',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Git',
]

const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'bcc@hawaii.edu',
}

export { header, about, projects, skills, contact }
