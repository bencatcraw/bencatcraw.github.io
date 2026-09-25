// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-portfolio",
          title: "portfolio",
          description: "A look at all the cool things I&#39;ve worked on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/";
          },
        },{id: "nav-games",
          title: "games",
          description: "Released games I made or worked on",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/games/";
          },
        },{id: "nav-prototypes",
          title: "prototypes",
          description: "Proof of concept projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/prototypes/";
          },
        },{id: "nav-other",
          title: "other",
          description: "other cool stuff I&#39;ve worked on",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/other/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-2026-is-here",
        
          title: "2026 is here!",
        
        description: "plans for 2026",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/newyear/";
          
        },
      },{id: "post-first-blog-post",
        
          title: "first blog post",
        
        description: "introductory blog post",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/first/";
          
        },
      },{id: "projects-untitled-mech-game",
          title: 'Untitled Mech Game',
          description: "mechjam 3 submission",
          section: "Projects",handler: () => {
              window.location.href = "/projects/umg_project/";
            },},{id: "projects-mars-mech-mission",
          title: 'Mars Mech Mission',
          description: "tower defense",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mmm_project/";
            },},{id: "projects-homebound",
          title: 'homebound',
          description: "puzzle platformer",
          section: "Projects",handler: () => {
              window.location.href = "/projects/homebound_project/";
            },},{id: "projects-hawaii-healthcare-dashboard",
          title: 'Hawaii Healthcare Dashboard',
          description: "HACC 2023 submission",
          section: "Projects",handler: () => {
              window.location.href = "/projects/healthcare_project/";
            },},{id: "projects-happening-mānoa",
          title: 'Happening @ Mānoa',
          description: "community events website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ham_project/";
            },},{id: "projects-createx-horror-experience",
          title: 'CreateX Horror Experience',
          description: "spooky projection mapping",
          section: "Projects",handler: () => {
              window.location.href = "/projects/createx_project/";
            },},{id: "projects-haven-projectable",
          title: 'HAVEN ProjecTable',
          description: "clean energy visualizations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/haven_project/";
            },},{id: "projects-life-before-death",
          title: 'Life Before Death',
          description: "story walking sim",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lbd_project/";
            },},{id: "projects-cookie-amp-cream-vr-cafe",
          title: 'Cookie &amp;amp; Cream VR Cafe',
          description: "multiplayer vr cooking game",
          section: "Projects",handler: () => {
              window.location.href = "/projects/catcafe_project/";
            },},{id: "projects-cloud-runner",
          title: 'Cloud Runner',
          description: "arcade parkour",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cloudrunner_project/";
            },},{id: "projects-wheelchair-wizards",
          title: 'Wheelchair Wizards',
          description: "multiplayer platform fighter",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ww_project/";
            },},{id: "projects-brick-brick",
          title: 'Brick Brick',
          description: "mobile puzzle clearing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/brickbrick_project/";
            },},{id: "projects-interactive-3d-aquarium",
          title: 'Interactive 3D Aquarium',
          description: "create your own fish",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aquarium_project/";
            },},{id: "projects-arcane-interns",
          title: 'Arcane Interns',
          description: "co-op roguelike dungeon crawler",
          section: "Projects",handler: () => {
              window.location.href = "/projects/arcane_project/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/bencatcraw", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/bencatcraw", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%63%63@%68%61%77%61%69%69.%65%64%75", "_blank");
        },
      },];
