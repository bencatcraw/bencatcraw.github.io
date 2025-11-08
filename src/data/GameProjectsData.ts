import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-0", "Wheelchair Wizards", "img/projects/WWMAIN.png", 
    `   
    <div class="paragraph">
    <strong>Wheelchair Wizards</strong> is is a 4 player party game where you battle your friends while upgrading your wizard. Wheelchair Wizards is available on Steam for free, and has seen over 25,000 unique players in 3 months and has 300+ daily active users. 
    </div>
    <div class="paragraph center">
    <strong> Trailer </strong>
    </div>
    <div class="paragraph center">
        <iframe width="800" height="450" src="https://www.youtube.com/embed/S6ToBf0wrA4?si=QfW74Fx6Hw6fpOse" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <iframe src="https://store.steampowered.com/widget/3832630/" frameborder="0" width="646" height="190"></iframe>
    </div>
    <div class="paragraph">
    Wheelchair Wizards was created in Godot, to challenge my cross-engine knowledge. It uses a recompiled version of the engine to incoporate GodotSteam, a networking library for leveraging Steam's built-in P2P. 
    </div>
    `, "#119999", false, true),
    new ProjectData("project-1", "Cloud Runner", "img/projects/cr1.png", 
    `   
    <div class="paragraph">
     <strong>Cloud Runner</strong> is a fast paced interactive parkour game that has the player running on clouds while slicing buildings and parrying meteors to fight back against an evil megacorporation.
    </div>
    <div class="paragraph center">
    <strong> Gameplay </strong>
    </div>
    <div class="paragraph center">
        <iframe width="800" height="450" src="https://www.youtube.com/embed/b-193vYd_E0?si=M_vXHWG1oZBI_FFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Cloud Runner was an experimental project, where I spent a lot of time focused on parts of game design I felt I didn't have lots of experience in. Most notably: level design, cutscenes, and shaders.
    </div>

    `, "#999999", false, true),
    new ProjectData("project-2", "Life Before Death", "img/projects/lifebanner.png", 
    `   
    <div class="paragraph">
     <strong>Life Before Death</strong> is a walking simulator/escape room game focused on interactive storytelling, diverse puzzles, and high quality graphics.
    </div>
    <div class="paragraph center">
    <strong> Trailer </strong>
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://video.fastly.steamstatic.com/store_trailers/257071960/movie480_vp9.webm?t=1732215514" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <iframe src="https://store.steampowered.com/widget/3282650/" frameborder="0" width="646" height="190"></iframe>
    </div>
    <div class="paragraph">
        Life Before Death was my first attempt at a larger scale Unreal Engine project, focused on beautiful graphics and level design.
    </div>
    `, "#383838", false, true),
    new ProjectData("project-3", "Brick Brick", "img/projects/brickbrick.png", 
    `   
    <div class="paragraph">
     <strong>Brick Brick</strong> is a mobile puzzle game where you connect bricks to clear area and score points. It can be played in the browser below.
    </div>
    <div class="center">
    <iframe src="https://bencatcraw.github.io/BrickBrick/" width="545" height="965">
    </iframe>
    </div>
    <div class="paragraph">
        Brick Brick was created in one night to test my development speed (and to make replicate a game my girlfriend plays that doesn't have ads.) Brick Brick is completely free and open source and is open to contributions!
    </div>
    <div class="paragraph">
        <div class="notice">
        Source code available on <a href="https://github.com/bencatcraw/BrickBrick" target="_blank">GitHub</a>.
        </div>
    </div>
    `, "#111922", true, false),
    new ProjectData("project-4", "Cookie & Cream VR Cafe", "img/projects/ccc.png", `
    <div class="paragraph">
        <strong>Cookie & Cream</strong> is a coop VR cooking game where the players play as cats. While one player takes orders and fills drinks, the other frantically makes food while the timer counts down.
    </div>
    <div class="paragraph center">
    <strong> Gameplay </strong>
    </div>
    <div class="paragraph center">
        <iframe width="800" height="450" src="https://www.youtube.com/embed/KfA0ykglSQY?si=XDOaRGSG-5YqXubV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
       Cookie & Cream was one of my first attempts at true online multiplayer using Unity's P2P solutions: Netcode for Gameobjects and Relay.
    </div>

    <div class="paragraph">
    <div class="notice">
        Source code is available on <a href="https://github.com/bencatcraw/VRCATCAFE" target="_blank">GitHub</a>.
    </div>
    </div>
    </div>
    `, "#5a78af"),
    new ProjectData("project-5", "homebound", "img/projects/header.jpg", `
    <div class="paragraph">
        <strong>homebound</strong> is a astmospheric puzzle platformer about a lonely astronaut and fluffy new friend. homebound is available for free on Steam.
    </div>
    <div class="paragraph center">
    <strong> Trailer </strong>
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://video.fastly.steamstatic.com/store_trailers/256966958/movie480_vp9.webm?t=1693471926" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <iframe src="https://store.steampowered.com/widget/2568870/" frameborder="0" width="646" height="190"></iframe>
    </div>

    <div class="paragraph">
        homebound is a project I was invited onto by a friend. I helped provide insight on its current state, as well building out logic for the puzzle objects in the game.
    </div>
    `, "#e48246"),
    new ProjectData("project-6", "Mars Mech Mission", "img/projects/mmmlogo.png", `
    <div class="paragraph">
    <strong>Mars Mech Mission</strong> is a tower defense game about a lone dwarf who has to defend his space base from robotic crabs and scorpions.
    </div>
    <div class="paragraph center">
        <img width="800" src="img/projects/mmm.png" alt="Eugeneable Screenshot" />
    </div>
    <div class="center">
    <iframe frameborder="0" src="https://itch.io/embed/2039754" width="552" height="167"><a href="https://bencatcraw.itch.io/mmm">Mars Mech Mission by bencatcraw</a></iframe>
    </div>
    `, "#e48246"),
    new ProjectData("project-7", "Untitled Mech Game", "img/projects/water_3.gif", `
    <div class="paragraph">
        <strong>Untitled Mech Game</strong> was created for the MechJam III game jam by the UH Manoa Game Dev Club. The game is about a mech that can switch between earth, water, and fire abilities that let it solve puzzles to progress through the levels.
    </div>
    <div class="paragraph center">
        <img width="800" src="img/projects/art363.png" alt="Eugeneable Screenshot" />
    </div>
    <div class="center">
    <iframe frameborder="0" src="https://itch.io/embed/1631011" width="552" height="167"><a href="https://bencatcraw.itch.io/untitled-mech-game">Untitled Mech Game by bencatcraw</a></iframe>
    </div>
`, "#5a78af")
];