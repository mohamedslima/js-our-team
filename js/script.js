// MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// organizzare i singoli membri in card/schede
// BONUS 3:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team:
// cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale
// e viene stampata una nuova card con tutte le informazioni inserite dall'utente.

const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];

teamContainer = document.querySelector('.team-container');
document.querySelector('#addMemberButton').addEventListener('click', addMemberFromInput);

for (let i = 0; i < team.length; i++) {
    // piccolo trucco che mi permette di mantenere la fn addPersonToTeamGrid generica e capace di aggiunge URL da internet
    team[i]['image'] = 'img/'+team[i]['image'];
    addPersonToTeamGrid(team[i]);    
}

function addPersonToTeamGrid(person) {
    //preleviamo i dati dell'oggetto dell'array che stiamo vedendo a questo giro
    let thisName = person['name'];
    let thisRole = person['role'];
    let thisImg = person['image'];
    //creiamo un div vuoto con classe team-card
    let thisCard = document.createElement('div');
    thisCard.classList.add('team-card');
    //creiamo il div vuoto card-img
    let thisCardImgDiv = document.createElement('div');
    thisCardImgDiv.classList.add('card-image');
    //creiamo il div vuoto card-text
    let thisCardText = document.createElement('div');
    thisCardText.classList.add('card-text');
    //mettiamo card-img e card-text nella card
    thisCard.append(thisCardImgDiv,thisCardText)

    //creaimo e popoliamo l'img che andrà dentro card-img
    let thisCardImg = document.createElement('img');
    thisCardImg.src = thisImg;
    thisCardImg.alt = thisName;
    // mettiamo l'img dentro card-image
    thisCardImgDiv.append(thisCardImg);

    //creiamo e popoliamo l'h3 che andrà dentro il div card-text
    let thisCardTextTitle = document.createElement('h3');
    thisCardTextTitle.textContent = thisName;
    //creiamo e popoliamo il p che andrà dentro il div card-text
    let thisCardTextCaption = document.createElement('p');
    thisCardTextCaption.textContent = thisRole;
    //popoliamo thisCardText
    thisCardText.append(thisCardTextTitle,thisCardTextCaption);
    teamContainer.append(thisCard);
}

//prende 3 valori di qualsiasi tipo e ci costruisce un oggetto con key name, role, image
function buildPersonObject(name,role,image) {
    let newPerson = {};
    newPerson.name = name;
    newPerson.role = role;
    newPerson.image = image;
    return newPerson;
}

//prende i valori dei 3 input nella pagina e li usa per aggiungere una card
function addMemberFromInput() {
    let memberName = document.getElementById('name');
    let memberRole = document.getElementById('role');
    let memberImg = document.getElementById('image');

    addPersonToTeamGrid(buildPersonObject(memberName.value,memberRole.value,memberImg.value));
    memberName.value = '';
    memberRole.value = '';
    memberImg.value = '';
}