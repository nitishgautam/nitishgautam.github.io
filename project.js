// // Project
// const project = [
//     {
//         id: "1",
//         titleImage: "images/selfdrivingcar.png",
//         title: "Self Driving Car",
//         category: "project",
//         desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
//         link: "https://aatman-github-io.vercel.app/",
//         linkTitle: "selfdrivingcar.com",
//         githubLink: "https://github.com/NITISHGAUTAM/aatman.github.io"
//     },
//     {
//         id: 2,
//         titleImage: "images/ecom.png",
//         title: "E-Commerce",
//         category: "project",
//         desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
//         link: "https://e-commerce-psi-murex.vercel.app/",
//         linkTitle: "ecommerce.com",
//         githubLink: "https://github.com/NITISHGAUTAM/aatman.github.io"
//     },
//     {
//         id: 3,
//         titleImage: "images/netflix.png",
//         title: "Netflix Clone",
//         category: "project",
//         desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
//         link: "https://netflix-clone-theta-lovat.vercel.app",
//         linkTitle: "netflix.com",
//         githubLink: "https://github.com/NITISHGAUTAM/aatman.github.io"
//     },
//     {
//         id: 4,
//         titleImage: "/old/imgVid/boy2.png",
//         title: "Self Driving Car",
//         category: "project",
//         desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
//         link: "https://aatman-github-io.vercel.app/",
//         linkTitle: "selfdrivingcar.com",
//         githubLink: "https://github.com/NITISHGAUTAM/aatman.github.io"
//     },
// ];

// const pContainer = document.querySelector('.p-container');


// //Load
// window.addEventListener('DOMContentLoaded', function () {
//     displayProjectItem(project)
// })



// function displayProjectItem(p) {
//     let displayProject = p.map(function (item) {
//         return `<section class="projects p-active" id="${item.id}">
//         <div class="p-link">
//             <a href="${item.link}" target="_blank">${item.linkTitle} >></a>
//         </div>
//         <div class="p-image">
//             <img src="${item.titleImage}" alt="">
//         </div>
//         <div class="p-intro">
//             <h2>${item.title}</h2>
//             <p>${item.desc}</p>
//         </div>
//         <div class="p-source">
//             <p>project source-</p>
//             <a class="icon" href="${item.githubLink}" target="_blank">
//                 <i class="fa-brands fa-github"></i>
//                 <i class='bx bxl-netlify'></i>
//             </a>
//         </div>
//         </section>`;
//     })
//     displayProject = displayProject.join('');
//     pContainer.innerHTML = displayProject;
// }