/*
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede*/

const members = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        img : 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        img : 'angela-caroll-chief-editor.jpg'
    },

    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        img : 'walter-gordon-office-manager.jpg'
    },

    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        img : 'angela-lopez-social-media-manager.jpg'
    },

    {
        name : 'Scott Estrada',
        role : 'Developer',
        img : 'scott-estrada-developer.jpg'
    },

    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        img : 'barbara-ramos-graphic-designer.jpg'
    },
];

const teamDomEl = document.querySelector('.team')

for (const key in members) {

    const member = members[key];

    console.log('NAME ' + member.name);
    console.log('ROLE ' + member.role);
    console.log('IMG ' + member.img);

    teamDomEl.innerHTML += `Name: ${member.name};</br>
    Role: ${member.role};</br>
    Img source: ${member.img}</br></br>`

}