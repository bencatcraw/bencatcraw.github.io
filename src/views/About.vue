<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Benjamin Crawford</strong>, a game developer with 10 years of experience.<br/>
        I've also been playing games, casually and competitively, for most of my life and know the ins and outs of every genre.
      </div>

      <div style="margin-top: 20px;">I've worked on  <router-link to="/game-projects">games</router-link> (ranging from personal projects to group game jams), on other <router-link to="/other-projects">non-game projects</router-link>, and took part in <router-link to="/resume">a few internships</router-link> as well.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a game designer/gameplay programmer, and excited for new opportunities. You can reach me at <a href="mailto:bcc@hawaii.edu">bcc@hawaii.edu</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Profile Photo" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.photo {
  margin-top: -30px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>