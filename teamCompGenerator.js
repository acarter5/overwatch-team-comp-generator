/*
FYI, the 'onFormSubmit' function at the bottom is what makes the 
algorithm collect data from a google form and return it to a 
google sheet. Just look at the other functions to see how the algorithm works.
*/

var teamCharacters = {
  'DOOMFIST' : 0,
  'GENJI' : 0,
  'MCCREEE' : 0,
  'PHARAH' : 0,
  'REAPER' : 0,
  'SOLDIER 76' : 0,
  'SOMBRA' : 0,
  'TRACER' : 0,
  'BASTION' : 0,
  'HANZO' : 0,
  'JUNKRAT' : 0,
  'MEI' : 0,
  'TORBJORN' : 0,
  'WIDOWMAKER' : -5,
  'D.VA' : 0,
  'ORISA' : 0,
  'REINHARDT' : 0,
  'ROADHOG' : -2,
  'WINSTON' : 0,
  'ZARYA' : 0,
  'ANA' : 0,
  'LUCIO' : 0,
  'MERCY' : 0,
  'SYMMETRA' : 0,
  'ZENYATA' : 0,
}
var DPS = ['DOOMFIST', 'GENJI', 'MCCREEE', 'PHARAH', 'SOLDIER 76', 'TRACER', 'SOMBRA'];
var DEFENSE = ['BASTION','HANZO', 'JUNKRAT', 'MEI', 'TORBJORN', 'WIDOWMAKER', 'SYMMETRA'];
var TANKS = ['D.VA', 'ORISA', 'REINHARDT', 'ROADHOG', 'WINSTON', 'ZARYA'];
var HEALERS = ['ANA', 'LUCIO', 'MERCY', 'ZENYATA'];
var augDPS = DPS.concat(DEFENSE);

function teamCompCreator(enemyTeam, mode, map, teamModel) {
  
  enemyTeam = enemyTeam.split(', ');
  var teamCompArray = [];

  enemyTeam.forEach(addCounterValues);

  classSort();

  if (teamModel === '2/2/2') {
    teamCompArray[0] = DPS[0];
    teamCompArray[1] = DPS[1];
    teamCompArray[2] = TANKS[0];
    teamCompArray[3] = TANKS[1];

    teamCompArray.forEach(addHealerValues);

    teamCompArray[4] = HEALERS[0];
    teamCompArray[5] = HEALERS[1];
  } else if (teamModel === '2/2/2 DEFENSE') {
    teamCompArray[0] = augDPS[0];
    teamCompArray[1] = augDPS[1];
    teamCompArray[2] = TANKS[0];
    teamCompArray[3] = TANKS[1];

    teamCompArray.forEach(addHealerValues);

    teamCompArray[4] = HEALERS[0];
    teamCompArray[5] = HEALERS[1];
  }

  return teamCompArray.join(', ');
}

function addCounterValues(currentCharacter) {
  switch (currentCharacter) {
    case 'DOOMFIST' :
      teamCharacters['MCCREEE']++;
      teamCharacters['SOMBRA']++;
      teamCharacters['ORISA']++;
      teamCharacters['MEI']++;
      teamCharacters['ZENYATA']++;
      teamCharacters['WIDOWMAKER']++;
      teamCharacters['REAPER']++;
      break;
    case 'GENJI' :
      teamCharacters['MEI']++;
      teamCharacters['ZARYA']++;
      teamCharacters['WINSTON']++;
      break;
    case 'MCCREEE' :
      teamCharacters['GENJI']++;
      teamCharacters['SOLDIER 76']++;
      teamCharacters['WIDOWMAKER']++;
      teamCharacters['HANZO']++;
      teamCharacters['WINSTON']++;
      break;
    case 'PHARAH' :
      teamCharacters['MCCREEE']++;
      teamCharacters['ROADHOG']++;
      teamCharacters['SOLDIER 76']++;
      teamCharacters['WIDOWMAKER']++;
      teamCharacters['TORBJORN']++;
      teamCharacters['D.VA']++;
      break;
    case 'REAPER' : 
      teamCharacters['JUNKRAT']++;
      teamCharacters['MCCREEE']++;
      teamCharacters['PHARAH']++;
      break;
    case 'SOLDIER 76' :
      teamCharacters['MEI']++;
      teamCharacters['SYMMETRA']++;
      teamCharacters['ROADHOG']++;
      teamCharacters['D.VA']++;
      break;
    case 'SOMBRA' :
      teamCharacters['SOMBRA']++;
      teamCharacters['GENJI']++;
      teamCharacters['MEI']++;
      teamCharacters['TRACER']++;
      break;
    case 'TRACER' :
      teamCharacters['MEI']++;
      teamCharacters['SOMBRA']++;
      teamCharacters['SOLDIER']++;
      teamCharacters['MCCREEE']++;
      break;
    case 'BASTION' :
      teamCharacters['GENJI']++;
      teamCharacters['WIDOWMAKER']++;
      teamCharacters['PHARAH']++;
      teamCharacters['ROADHOG']++;
      teamCharacters['TRACER']++;
      teamCharacters['SOLDIER 76']++;
      teamCharacters['HANZO']++;
      break;
    case 'HANZO' :
      teamCharacters['D.VA']++;
      teamCharacters['TRACER']++;
      teamCharacters['MEI']++;
      teamCharacters['GENJI']++;
      teamCharacters['WINSTON']++;
      break;
    case 'JUNKRAT' :
      teamCharacters['HANZO']++;
      teamCharacters['WIDOWMAKER']++;
      teamCharacters['MCCREEE']++;
      teamCharacters['PHARAH']++;
      teamCharacters['WINSTON']++;
      break;
    case 'MEI' :
      teamCharacters['JUNKRAT']++;
      teamCharacters['WIDOWMAKER']++;
      teamCharacters['PHARAH']++;
      break;
    case 'TORBJORN' :
      teamCharacters['JUNKRAT']++;
      teamCharacters['PHARAH']++;
      teamCharacters['WIDOWMAKER']++;
      teamCharacters['SOLDIER 76']++;
      teamCharacters['HANZO']++;
      break;
    case 'WIDOWMAKER' :
      teamCharacters['TRACER']++;
      teamCharacters['GENJI']++;
      teamCharacters['D.VA']++;
      teamCharacters['WINSTON']++;
      break;
    case 'D.VA' :
      teamCharacters['MEI']++;
      teamCharacters['SYMMETRA']++;
      teamCharacters['ZARYA']++;
      break;
    case 'ORISA' :
      teamCharacters['SOMBRA']++;
      teamCharacters['WIDOWMAKER']++;
      teamCharacters['TRACER']++;
      teamCharacters['GENJI']++;
      break;
    case 'REINHARDT' :
      teamCharacters['SOMBRA']++;
      teamCharacters['ROADHOG']++;
      teamCharacters['SYMMETRA']++;
      teamCharacters['ORISA']++;
      teamCharacters['REINHARDT']++;
      break;
    case 'ROADHOG' :
      teamCharacters['D.VA']++;
      teamCharacters['GENJI']++;
      teamCharacters['REAPER']++;
      teamCharacters['SOLDIER 76']++;    
      break;
    case 'WINSTON' :
      teamCharacters['MEI']++;
      teamCharacters['REAPER']++;
      teamCharacters['D.VA']++;
      teamCharacters['ROADHOG']++;
      teamCharacters['ZARYA']++;
      break;
    case 'ZARYA' :
      teamCharacters['REAPER']++;
      teamCharacters['ROADHOG']++;
      teamCharacters['PHARAH']++;
      break;
    case 'ANA' :
      teamCharacters['GENJI']++;
      teamCharacters['REAPER']++;
      teamCharacters['TRACER']++;
      teamCharacters['WINSTON']++;
      teamCharacters['D.VA']++;
      break;
    case 'LUCIO' :
      teamCharacters['MEI']++;
      teamCharacters['MCCREEE']++;
      teamCharacters['PHARAH']++;
      teamCharacters['D.VA']++;
      teamCharacters['ROADHOG']++;
      break;
    case 'MERCY' :
      teamCharacters['MCCREEE']++;
      teamCharacters['TRACER']++;
      teamCharacters['WIDOWMAKER']++;
      teamCharacters['WINSTON']++;
      break;
    case 'SYMMETRA' :
      teamCharacters['JUNKRAT']++;
      teamCharacters['PHARAH']++;
      teamCharacters['ROADHOG']++;
      break;
    case 'ZENYATA' :
      teamCharacters['TRACER']++;
      teamCharacters['WIDOWMAKER']++;
      teamCharacters['HANZO']++;
      teamCharacters['REAPER']++;
      teamCharacters['WINSTON']++;
      break;
  }
}

function addHealerValues(currentCharacter) {
  switch (currentCharacter) {
    case 'DOOMFIST' :
      teamCharacters['LUCIO']++;
      break;
    case 'GENJI' :
      teamCharacters['LUCIO']++;
      break;
    case 'MCCREEE' :
      teamCharacters['LUCIO']++;
      break;
    case 'PHARAH' :
      teamCharacters['MERCY']++;
      break;
    case 'REAPER' : 
      teamCharacters['ZENYATA']++;
      break;
    case 'SOLDIER 76' :
      teamCharacters['MERCY']++;
      break;
    case 'SOMBRA' :
      teamCharacters['LUCIO']++;
      break;
    case 'TRACER' :
      teamCharacters['LUCIO']++;
      break;
    case 'BASTION' :
      teamCharacters['MERCY']++;
      break;
    case 'HANZO' :
      teamCharacters['MERCY']++;
      break;
    case 'JUNKRAT' :
      teamCharacters['LUCIO']++;
      break;
    case 'MEI' :
      teamCharacters['LUCIO']++;
      break;
    case 'TORBJORN' :
      teamCharacters['ZENYATA']++;
      teamCharacters['MERCY']++;
      break;
    case 'WIDOWMAKER' :
      teamCharacters['MERCY']++;
      break;
    case 'D.VA' :
      teamCharacters['ZENYATA']++;
      teamCharacters['MERCY']++;
      break;
    case 'ORISA' :
      teamCharacters['MERCY']++;
      break;
    case 'REINHARDT' :
      teamCharacters['MERCY']++;
      teamCharacters['ANA']++;
      break;
    case 'ROADHOG' :
      teamCharacters['MERCY']++;
      break;
    case 'WINSTON' :
      teamCharacters['ZENYATA']++;
      break;
    case 'ZARYA' :
      teamCharacters['MERCY']++;
      break;
  }

  HEALERS.sort(function(charA, charB) {
    return teamCharacters[charB] - teamCharacters[charA];
  });  
}

function classSort() {
  var classes = [DPS, DEFENSE, TANKS, augDPS, HEALERS];
  var resultArray = [];

  classes.forEach(function(currentClass) {
    currentClass = currentClass.sort(function(charA, charB) {
      return teamCharacters[charB] - teamCharacters[charA];
    });
  });
}

function onFormSubmit(e) {
  var ss = SpreadsheetApp.openById('16jFQUtr6G46Pf4BSYg44v6INknObeGL0xrZ1rF7Odic');
  var resultsTab = ss.getSheetByName("resultsTab");
  var mapChoice;
  
  var timeStamp = e.values[0];
  var enemyTeamChoice = e.values[1];
  var modeChoice = e.values[2];
  var teamModelChoice = e.values[4];
  
  if (modeChoice == 'ASSAULT') {
    mapChoice = e.values[3]; 
  } else if (modeChoice == 'ESCORT') {
    mapChoice = e.values[5]; 
  } else if (modeChoice == 'ASSAULT/ESCORT') {
    mapChoice = e.values[6]; 
  } else if (modeChoice == 'CONTROL') {
    mapChoice = e.values[7]; 
  }
  
  var result = teamCompCreator(enemyTeamChoice, modeChoice, mapChoice, teamModelChoice); 
  
  resultsTab.getRange('A1').setValue(result);
}