const team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        nome:  "Barbara Ramos",
        ruolo: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    },
]
let stampFinale = "";
let i = 0;

stampFinale += `<div class="row row-col-sm-1 row-col-md-2 row-col-lg-3 gap-3 justify-content-center">`  
for (let i= 0 ; i < team.length; i++) {
    stampFinale += 
       `<div class="card text-center col-sm-12 col-md-5 col-lg-3 p-0">
            <img src="img/${team[i].image}" class="card-img-top" alt="img_${team[i].image}">
            <div class="card-body">
                <p class="card-text">${team[i].nome}</p>
                <p class="card-text">${team[i].ruolo}</p>
            </div>
        </div>`;
}    
stampFinale += `</div>`


document.getElementById("lista_nomi").innerHTML = stampFinale;