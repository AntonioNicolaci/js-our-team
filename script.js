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

for (let i = 0; i < team.length; i++) {
    stampFinale += '<div class="row">';
    stampFinale += `<div><span class="nome">Nome:</span> <span class="valore">${team[i].nome}</span></div>`;
    stampFinale += `<div><span class="nome">Ruolo:</span> <span class="valore">${team[i].ruolo}</span></div>`;
    stampFinale += `<div class="span_img"><span class="nome">Immmagine:</span> <img src="img/${team[i].image}" alt="image_${team[i].nome}"></div>`;
    stampFinale += '</div>';
}

document.getElementById("lista_nomi").innerHTML = stampFinale;