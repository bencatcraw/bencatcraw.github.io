import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Life Before Death", "img/projects/lbd.png", 
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
        Utilizes :
        <ul>
        <li>Unreal Engine 5</li>
        <li>C++</li>
        <li>Blueprints</li>
        <li>Quixel</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/lbd2.png" alt="LBD Screenshot" />
        <img class="pc-screenshot" src="img/projects/lbd1.png" alt="LBD Screenshot" />
    </div>
    `, "#383838", true),
    new ProjectData("project-2", "Cookie & Cream VR Cafe", "img/projects/ccc.png", `
    <div class="paragraph">
        <strong>Cookie & Cream</strong> is a coop VR cooking game where the players play as cats.
    </div>
    <div class="paragraph center">
        <iframe width="800" height="450" src="https://www.youtube.com/embed/KfA0ykglSQY?si=XDOaRGSG-5YqXubV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Utilizes :
        <ul>
        <li>Unity</li>
        <li>C#</li>
        <li>VR</li>
        <li>Online Multiplayer</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        Source code is available on <a href="https://github.com/bencatcraw/VRCATCAFE" target="_blank">GitHub</a>.
    </div>
    </div>
    </div>
    `, "#5a78af"),
    new ProjectData("project-3", "homebound", "img/projects/header.jpg", `
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
        Utilizes :
        <ul>
        <li>Unity</li>
        <li>C#</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2568870/ss_5686460168acf81291a0a4951a6013f93c2bf29e.600x338.jpg?t=1695372893" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2568870/ss_1e4dff82a0e0bb20989c0a6791b62fc8b80ef717.600x338.jpg?t=1695372893" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2568870/ss_29a6848eb3f86abbaa06136231a7d110efc96879.600x338.jpg?t=1695372893" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2568870/ss_07b0686833618613b394bcb2c9f612f1cc6c4301.600x338.jpg?t=1695372893" alt="Drawing Overload Screenshot" />
    </div>
    `, "#e48246"),
    new ProjectData("project-4", "Mars Mech Mission", "img/projects/mmmlogo.png", `
    <div class="paragraph">
    <strong>Mars Mech Mission</strong> is a tower defense game about a lone dwarf who has to defend his space base from robotic crabs and scorpions.
    </div>
    <div class="paragraph center">
        <img width="800" src="img/projects/mmm.png" alt="Eugeneable Screenshot" />
    </div>
    <div class="paragraph">
        Main features :
        <ul>
        <li>Unity</li>
        <li>C#</li>
        <li>Blender</li>
        <li>FLStudio</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Playable in the browser on <a href="https://bencatcraw.itch.io/mmm/" target="_blank">itch.io</a>.
        Source code available on <a href="https://github.com/bencatcraw/I3T4" target="_blank">GitHub</a>.
        </div>
    </div>
    `, "#e48246"),
    new ProjectData("project-5", "Untitled Mech Game", "img/projects/water_3.gif", `
    <div class="paragraph">
        <strong>Untitled Mech Game</strong> was created for the MechJam III game jam by the UH Manoa Game Dev Club. The game is about a mech that can switch between earth, water, and fire abilities that let it solve puzzles to progress through the levels.
    </div>
    <div class="paragraph center">
        <img width="800" src="img/projects/art363.png" alt="Eugeneable Screenshot" />
    </div>
    <div class="paragraph">
        Utilizes :
        <ul>
        <li>Unity</li>
        <li>C#</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Playable in the browser on <a href="https://bencatcraw.itch.io/untitled-mech-game" target="_blank">itch.io</a>.
        </div>
    </div>
`, "#5a78af")
];