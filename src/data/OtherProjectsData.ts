import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-6", "HAVEN ProjecTable", "img/projects/havn1.jpg", `
    <div class="paragraph">
      <strong>HAVEN ProjecTable</strong> is a collaborative project between LAVA and HSEO focused on visualization of climate and energy data.
            </div>
            <div class="paragraph center">
            <iframe width="800" height="450" src="https://www.youtube.com/embed/U9C2qxI-Weg?si=gz7IXD9TdPGFaTzI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div> 

        <div class="paragraph">
              <div class="notice">
                More information available <a href="https://energy.hawaii.gov/what-we-do/clean-energy-vision/" target="_blank">here</a>.
              </div>
            </div>

        <div class="paragraph center">
        </div>
    `, "#23bd69", false, true),
    new ProjectData("project-7", "Happening @ Manoa", "img/projects/landing.png", `
    <div class="paragraph">
                <strong>Happening @ Manoa</strong> is an application for members of the UH Manoa community to see what events are going on in their community as well as search for events that aligns with their interests.
            </div>
            <div class="paragraph center">
                <img width="800" src="img/projects/landingfinal.png" alt="HAM Screenshot" />
            </div>
            <div class="paragraph">
              Utilizes :
              <ul>
              <li>Meteor</li>
              <li>React</li>
              <li>MongoDB</li>
              </ul>
          </div>

            <div class="paragraph">
              <div class="notice">
                You can find many more details on our  <a href="https://happeningatmanoa.github.io/" target="_blank">website</a>
              </div>
            </div>
`, "#1ca1e2"),
    new ProjectData("project-8", "Hawaii Healthcare Dashboard", "img/projects/tylerLogo.png", `
    <div class="paragraph">
                <strong>Hawaii Healthcare Dashboard</strong> A dashboard that allows users to search for healthcare facilities and filter them by name, services, insurance, island, and facility type. Created for Hawaii Annual Code Challenge 2023
            </div>
            <div class="paragraph center">
                <img width="800" src="img/projects/hhd.png" alt="HAM Screenshot" />
            </div>
          <div class="paragraph">
          Utilizes :
          <ul>
          <li>Meteor</li>
          <li>React</li>
          <li>MongoDB</li>
          </ul>
      </div>

            <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/bencatcraw/HACC2023" target="_blank">GitHub</a>.
              </div>
            </div>

            <div class="paragraph center">
            </div>`),
    new ProjectData("project-9", "CreateX Horror Experience", "img/projects/crtx.png", `
     <div class="paragraph">
                <strong>CreateX Horror Experience</strong> This is a horror experience created using the CreateX lab at UH West Oahu. CreateX is an array of projectors that project videos and applications onto the walls and floors of the room to create immersive experiences.
            </div>
            <div class="paragraph center">
            <iframe width="800" height="450" src="https://www.youtube.com/embed/L0PQpKlKZmo?si=7W5L00i7KG2Sqq0e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="paragraph">
        Utilizes :
        <ul>
        <li>Projection Mapping</li>
        <li>Unity</li>
        <li>C#</li>
        <li>Motion Tracking</li>
        </ul>
    </div>

            <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/bencatcraw/VRARCREATEX3" target="_blank">GitHub</a>.
              </div>
            </div>`),
];