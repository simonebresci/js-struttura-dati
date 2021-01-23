// Obiettivo
// Organizzare un array di carte (oggetti) Magic  (almeno 5 all'inizio), con tutte le loro proprietà. Partite dalla base che abbiamo definito qui https://github.com/ott-fogliata/boolean-code/blob/main/js-struttura-dati/js/script.js
// Visualizzare nell'html la lista di queste carte mostrando SOLO il nome della carta. Non grafichiamo nulla.
// Creaiamo una select nell'html per filtrare le carte attraverso la proprietà power, per un valore che va da 1 a 5. (anche se in Magic è diverso)
// Superpoweredbonus. E se volessi un'altra select e filtrare gli elementi attraverso la proprietà che abbiamo chiamato cardType?



// Campo field delle carte
const fieldCodes = [
  'W', 'U', 'B', 'R', 'G'
]

// Tipo della carta
const cardTypes = [
  'terre',
  'creature',
  'incantesimi',
  'artefatti',
  'instantanei',
  'stregonerie'
]

// PowerValues - valori consentiti
const powerValues = [1,2,3,4,5];

// Abbiamo creato un oggetto di oggetti, come riferimento
// di una edizione. Se ad esempio scrivo editions['SP']
// allora otterrò tutto un oggetto che descrive
// con più dettagli l'edizione.
// come oggetto di oggetti, può essere navigato solo con il for-in
const editions = {

  'BL': {
      edition: 'Boolean',
      rarity: 'blue'
  },

  'SP': {
      edition: 'Special',
      rarity: 'red'
  }

}

// CREAZIONE DELLE CARTE DI GIOCO
const cards = [{
  // carta 1
  cardName: 'Grizzly Bears',

  cost: {
    genericCostNumber: 1,
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[0],  // 'W',  - un suo riferimento
      fieldCodes[2]   // 'B'
    ],
  },

  picture: 'images/i.png',
  cardType: cardTypes[1],
  cardObject: 'Bear',

  editionType: editions['BL'],

  description: 'Lorem ipsum',
  story: 'Naltro Lorem Ipsum',

  score: {
    power: 2,  // filtrarlo per power
    toughness: 2
  }

  },
  // carta 2
  {

    cardName: 'Sviluppatore guerriero',

    cost: {
      genericCostNumber: 3,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[2],
        fieldCodes[3]
      ],
    },

    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[1],
    cardObject: 'Bear',

    editionType: editions['BL'],

    description: 'Lo sviluppatore guerriero spezza i byte in bit!',
    story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

    score: {
      power: 5,  // r
      toughness: 3
    }

    },
  // carta 3
  {

    cardName: 'MewTwo',

    cost: {
      genericCostNumber: 3,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[2],
        fieldCodes[3]
      ],
    },

    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[1],
    cardObject: 'Pokemon',

    editionType: editions['BL'],

    description: 'Il potere della mente più forte del mondo',
    story: 'Il pokemon clonato dalla leggenda di Mew',

    score: {
      power: 5,  // r
      toughness: 3
    }

    },
    // carta 4
    {

      cardName: 'Kelenvorita mascherato',

      cost: {
        genericCostNumber: 2,
        costFields: [ // colors array con riferimento a fieldCodes
          fieldCodes[0],
          fieldCodes[2]
        ],
      },

      picture: 'images/g.png',  // da inserire immagine
      cardType: cardTypes[1],
      cardObject: 'Mezzo orco',

      editionType: editions['SP'],

      description: 'Quando arriva a 0 punti ferita acquista un punto ferita e invece di finire al cimitero recupera forza',
      story: 'Kelenvor predica la grigia ed imparziale giustizia della morte.',

      score: {
        power: 5,  // r
        toughness: 3
      }

      },
      // carta 5
      {
      cardName: 'Paralyze',

      cost: {
        genericCostNumber: '',
        costFields: [ // colors array con riferimento a fieldCodes
          fieldCodes[2],  // 'B',  - un suo riferimento
        ],
      },

      picture: 'images/i.png',
      cardType: cardTypes[2],
      cardObject: 'Enchant',
      editionType: editions['SP'],
      description:'When paralyze ecc..',
      story:'',
      authorString:'autore copyright autore',
      cardColor: fieldCodes[2],
      score: {
        power: 0,  // filtrarlo per power
        toughness: 0
        }
      },
      // carta 6
      {

      cardName: 'Dancing Scimitar',

      cost: {
        genericCostNumber: 4,
        costFields: [],
      },

      picture: 'images/g.png',  // da inserire immagine
      cardType: cardTypes[3],
      cardObject: 'Spirit',

      editionType: editions['BL'],

      description: 'Vola (questa creautare non può essere fermata eccetto da una creatura volante )',
      story: 'Una spada che non ha mai conosciuto il fodero, un\'impugnatura che non ha mai conosciuto mano',

      score: {
        power: 1,
        toughness: 5
      }

    }


]

// CREAZIONE DELLE CARTE DI GIOCO

// Mostra su console carte di gioco create
console.log(cards);

// MANIPOLAZIONE DEI DATI
function filterByPower(powerValue,array){
  return array.filter((element)=>{
    return element.score.power === powerValue;
  });

}

function filterByCardType(cardType,array){
  return array.filter((element)=>{
    return element.cardType === cardType;
  });

}

// /MANIPOLAZIONE DEI DATI

// FUNZIONI DI VISUALIZZAZIONE

// Mostra carte in elemento HTML generico
function render(DOMElement, array){
  const cardListHTMLElement = document.getElementById(DOMElement);


  // Svuota elemento
  cardListHTMLElement.innerHTML = '';

  array.forEach( (element) => {
    let {cardName,cardType,score} = element;
    cardListHTMLElement.innerHTML += `
    <li> ${cardName} - ${cardType} - ${score.power} / ${score.toughness}
    </li>

    `
  });
}

// Popola "select" HTML generica
function renderSelect(DOMElement, array){
  const select = document.getElementById(DOMElement);
  array.forEach( (element) => {
    select.innerHTML += ` <option value=${element}> ${element} </option> `;
  });
}
// /FUNZIONI DI VISUALIZZAZIONE



// filterByPower(5,cards);
render('lista-carte',cards);
renderSelect('power-select', powerValues);
renderSelect('card-select', cardTypes);


// Evento change del selettore potenza
$('#power-select').change(function(){
  // Controllo selezione
  if(isNaN($(this).val())){
    alert('errore');
  }else{
    const selectValue = parseInt($(this).val());
    const filteredArray = filterByPower(selectValue, cards);

    render('lista-carte', filteredArray);
  }
});


// Evento change del selettore tipo carta
$('#card-select').change(function(){
  const selectValue = $(this).val();
  console.log(selectValue);
  const filteredArray = filterByCardType(selectValue, cards);

  render('lista-carte', filteredArray);

});
