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
        ruolo: "Graphic Designer",
        image: "scott-estrada-developer.jpg"
    },
    {
        nome:  "Barbara Ramos",
        ruolo: "Chief Editor",
        image: "barbara-ramos-graphic-designer.jpg"
    },
]

for (let i = 0; i < team.length; i++) {
    console.log("");
    console.log(`Componente numero ${i+1}:`);
    console.log(`Nome: ${team[i].nome}`);
    console.log(`Ruolo: ${team[i].ruolo}`);
    console.log(`Path immmagine: img/${team[i].image}`);
}