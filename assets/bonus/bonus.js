const members = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        img : '../img/wayne-barnett-founder-ceo.jpg'
    },

    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        img : '../img/angela-caroll-chief-editor.jpg'
    },

    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        img : '../img/walter-gordon-office-manager.jpg'
    },

    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        img : '../img/angela-lopez-social-media-manager.jpg'
    },

    {
        name : 'Scott Estrada',
        role : 'Developer',
        img : '../img/scott-estrada-developer.jpg'
    },

    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        img : '../img/barbara-ramos-graphic-designer.jpg'
    },
];

const rowDomEl = document.querySelector('.row');
const nameInputDomEl = document.querySelector('form #name');
const roleInputDomEl = document.querySelector('form #role');
const imgInputDomEl = document.querySelector('form #img');

const btnSendModal = document.querySelector('button.send');

let imgUser;


for (const key in members) {

    const member = members[key];

    //console.log('NAME ' + member.name);
    //console.log('ROLE ' + member.role);
    //console.log('IMG ' + member.img);

    const markupMember = `
<div class="col-12 col-md-6 col-lg-4">
    <div class="card shadow" style="width: 18rem;">
        <img src="${member.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <div class="card-text text-center">
                <h3>${member.name}</h3>
                <span>${member.role}</span>
            </div>
        </div>
    </div>
</div>
`
rowDomEl.insertAdjacentHTML('beforeend', markupMember);
 
}

btnSendModal.addEventListener('click', () => {

    rowDomEl.innerHTML = '';

    let addedName = nameInputDomEl.value;
    let addedRole = roleInputDomEl.value;
    let addedImg = `https://picsum.photos/200/300?random=${randomNumber(1,200)}` //imgInputDomEl.value;

    console.log(addedName, addedRole, addedImg);

    members.push({
        name : addedName,
        role : addedRole,
        img : addedImg
    })

    nameInputDomEl.value = '';
    roleInputDomEl.value = '';
    imgInputDomEl.value = '';
     /* addedName = '';
    addedRole = '';
    addedImg = ''; */

 for (const key in members) {

    const member = members[key];
 
    
    const markupMember = `
<div class="col-12 col-md-6 col-lg-4">
    <div class="card shadow" style="width: 18rem;">
        <img src="${member.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <div class="card-text text-center">
                <h3>${member.name}</h3>
                <span>${member.role}</span>
            </div>
        </div>
    </div>
</div>
`
rowDomEl.innerHTML += markupMember;

}  

    console.log(members);
    
})



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }