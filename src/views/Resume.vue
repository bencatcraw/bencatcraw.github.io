<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Benjamin Crawford</strong>, a senior Computer Science major at University of Hawaiʻi at Mānoa. I am pursuing a career in game development and design.
      <br />I am extremely passionate about games and have been playing them my whole life. I have played every genre there is and have even competed professionally.
      <br />I strive in team centered environments and have lead many projects.
      <br />
      <br />Currently, I work at LAVA, a research lab on campus. There, I develop visualization applications to make complex data easier to understand.
      <br />
      <br />Besides video games, I love rock climbing, photography, and my two cats.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/BCCRESUME2025.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF </a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/avatar.png" alt="Resume Photo" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work Experience</h2>

      <h3>LAVA - Undergraduate Research Assistant</h3>
      <h4>2024 - Present</h4>

      <div> Developing a Unity application for projection on a 3D map to visualize GIS layers</div>
      <div> Working closely with the Hawaii State Energy office to create an application and tool for community outreach</div>

      <div class="tech-stack">Unity, C#, Data Visualization, VR</div>

      <h3>University of Hawai’i - Network Support Specialist</h3>
      <h4>2022 - 2024</h4>

      <div>Repairing, and upgrading staff hardware and software</div>
      <div>Assess and troubleshoot computer problems brought by faculty and staff using WebHelpDesk</div>
      <div>Overseeing a system of 1000+ devices including computer setups, printers, servers, etc.</div>

      <div class="tech-stack">WebHelpDesk, C++, Networking, Computer Hardware</div>

      <h2>Internships</h2>

      <h3>Vanta - Event Operations Associate</h3>
      <h4>Summer 2023</h4>

      <div>Created playbooks for small to large eSports events for K-12 playerbase</div>

      <div class="tech-stack">Event Management, eSports, Event Production, Sponsorships</div>

      <h3>Blizzard Entertainment - Overwatch League Student Intern</h3>
      <h4>Summer 2022</h4>

      <div>Assisted in keeping the event (Midseason Madness) running smoothly and creation of short and long form content</div>

      <div class="tech-stack">Live Events, eSports, Player Relations, Content Creation</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Programs</h3>
        <SkillRate name="Unity" :rate="5" />
        <SkillRate name="Unreal" :rate="3" />
        <SkillRate name="Godot" :rate="2" />
        <SkillRate name="GameMaker" :rate="2" />
        <SkillRate name="Blender" :rate="3" />
        <SkillRate name="Maya" :rate="3" />
      </div>
      
      <div class="skill-set">
        <h3>Languages</h3>
        <SkillRate name="C#" :rate="5" />
        <SkillRate name="C++" :rate="3" />
        <SkillRate name="C" :rate="3" />
        <SkillRate name="Java" :rate="3" />
        <SkillRate name="Javascript" :rate="3" />
        <SkillRate name="Python" :rate="3" />
      </div>

      
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>University of Hawaiʻi at Mānoa - 2025</h3>
      <h4>Bachelor of Arts in Computer Science</h4>
      <div>Specialty in game design and creative media.</div>

      <h2>Language</h2>

      <h3>English</h3>
      <div>Fully Proficient</div>

      <h3>Spanish</h3>
      <div>Elementary Level</div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: -50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>