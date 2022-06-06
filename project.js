const project = [
    {
        id: 1,
        titleImage: "imgVid/Self-driving-car.png",
        title: "Self Driving Car",
        category: "Massive",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        link: "https://aatman-github-io.vercel.app/",
        linkName: "Selfdrivingcar.com",
        githubLink: "https://github.com/NITISHGAUTAM/aatman.github.io",
    },
    {
        id: 2,
        titleImage: "imgVid/netflix.png",
        title: "Netflix Clone",
        category: "Massive JavaScript",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        link: "https://netflix-clone-theta-lovat.vercel.app/",
        linkName: "Netfliclone.com",
        githubLink: "https://github.com/NITISHGAUTAM/netflix-clone",
    },
    {
        id: 1,
        titleImage: "imgVid/Self-driving-car.png",
        title: "Self Driving Car",
        category: "Massive",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        link: "https://aatman-github-io.vercel.app/",
        linkName: "Selfdrivingcar.com",
        githubLink: "https://github.com/NITISHGAUTAM/aatman.github.io",
    },
    {
        id: 2,
        titleImage: "imgVid/netflix.png",
        title: "Netflix Clone",
        category: "Massive JavaScript",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        link: "https://netflix-clone-theta-lovat.vercel.app/",
        linkName: "Netfliclone.com",
        githubLink: "https://github.com/NITISHGAUTAM/netflix-clone",
    },
];

const projectContainer = document.querySelector('.projects');
const filterBtns = document.querySelectorAll('.filter-btn');


//Load
window.addEventListener('DOMContentLoaded', function () {
    displayProjectItems(project)
})



function displayProjectItems(p) {
    let displayProject = p.map(function (item) {
        return `<li class="project-item">
                        <div class="logo-row">
                            <img src="${item.titleImage}" alt="Image 001" />
                        </div>
                        <div class="title-row">
                            <h3> ${item.title} </h3>
                            <div class="links"> <i class="fa fa-external-link icon" aria-hidden="true"></i> <a
                                    href="${item.link}" target="_blank">
                                    ${item.linkName} </a> </div>
                        </div>
                        <div class="desc-row">
                            <p>
                                ${item.desc}
                            </p>
                        </div>
                        <div class="footer-row">
                            <div class="days danger"> <i class="fa fa-clock-o icon" aria-hidden="true"></i> Project
                                Source
                            </div>
                            <div class="users">
                                <a class="icon" href="${item.githubLink}" target="_blank">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                                <a class="icon" href="#" target="_blank">
                                    <i class='bx bxl-netlify'></i>
                                </a>
                                <a class="icon" href="#" target="_blank">
                                    <i class="fa-brands fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </li>`;
    })
    displayProject = displayProject.join('');
    projectContainer.innerHTML = displayProject;
}