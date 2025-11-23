import {Project} from "../types"

export const projects: Project[] = [
    {
        id: 1,
        title: "LightAR",
        description: "iOS Application using Augmented Reality",
        tags: ["Swift", "iOS", "AR", "In Progress..."],
        link: "https://github.com/milansipos/LightAR"
    },
    {
        id: 2,
        title: "LAMP-Stack Webserver",
        description: "One of my first projects -- a webserver running on a Raspberry Pi using PHP",
        tags: ["PHP", "HTML", "CSS", "JS", "SQL"],
        link: "https://github.com/milansipos/lampstack_piwebserver"
    },
    {
        id: 3,
        title: "Flight Notifier",
        description: "Short Python script notifying me via email if a certain route falls under a certain price",
        tags: ["Python", "API's"],
        link: "https://github.com/milansipos/flightnotifier"
    },
    {
        id: 4,
        title: "Password Filler",
        description: "Browser extension to manage and autofill password (and username) of saved websites",
        tags: ["JS", "Webextension API"],
        link: "https://github.com/milansipos/passwordfiller"
    },
    {
        id: 5,
        title: "This Website :)",
        description: "You can freely check out the code of this Website on GitHub, as it is also hosted on GitHub Pages",
        tags: ["React", "TypeScript", "GH Pages"],
        link: "https://github.com/milansipos/personal_website"
    },
    {
        id: 6,
        title: "More coming soon...",
        description: "I'm always actively working on something on the side, so there is more to come",
        tags: ["Future"],
        link: "https://github.com/milansipos"
    },
]