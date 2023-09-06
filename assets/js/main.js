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

const teamDomEl = document.querySelector('.team');
const rowDomEl = document.querySelector('.row');

for (const key in members) {

    const member = members[key];

    //console.log('NAME ' + member.name);
    //console.log('ROLE ' + member.role);
    //console.log('IMG ' + member.img);

    const markupMember = `
<div class="col-12 col-md-6 col-lg-4">
    <div class="card shadow" style="width: 18rem;">
        <img src="./assets/img/${member.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <div class="card-text text-center">
                <h3>${member.name}</h3>
                <span>${member.role}</span>
            </div>
        </div>
    </div>
</div>
`
rowDomEl.innerHTML += markupMember

console.log(markupMember);

    

}