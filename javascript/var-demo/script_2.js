let GlobalName = 'Test Global Name 0';
const form = document.getElementById('personForm');

function getForm() {
  const form = document.getElementById('personForm');
  console.log('getForm', form);
}

getForm();

function interalName() {
  let GlobalName = 'Test Internal';
  console.log('GlobalName', GlobalName);

  function Test2() {
    let GlobalName = 'Test Internal 2';
  }

  function Test3() {
    let GlobalName = 'Test Internal 3';
    console.log('Test3', GlobalName);
  }

  function Test4() {
    let GlobalName = 'Test Internal 4';
    console.log('Test4', GlobalName);
  }

function Set1() {
  Auto = 2;
  console.log(Auto);
}
function Set2() {
  Auto = 3;
  console.log(Auto);
}
function Set3() {
  let Auto = 4;
  console.log(Auto);
}
Set1();
Set2();
Set3();
console.log("PRUEBA SET");

GlobalName = 'Naaa';
console.log('function interalName GlobalName--->', GlobalName);
GlobalName = 'Naaa 2';
console.log('function interalName GlobalName--->', GlobalName);
GlobalName = 'Naaa 3';
console.log('function interalName GlobalName--->', GlobalName);
//let internalName = 'Pertenezco a InternalName Function';

//console.log('function interalName--->', internalName);

if (true) {
  let GlobalName = 'Dentro de If';
  console.log('GlobalName', GlobalName);
}
}

function ChangeGlobalName() {
  GlobalName = 'La cambio desde Name a 2';
  //internalName = 'Deberia Crear esta como Global';

  // console.log('function ChangeGlobalName -->', GlobalName);
  //console.log('function ChangeGlobalName internalName-->', internalName);
}

let validationStatus = 'pending';

form.addEventListener('submit', function (event) {
  event.preventDefault();

  interalName();
  //ChangeGlobalName();
  console.log('GlobalName', GlobalName);
});

const document_v2 = {
  getElementById_v2: function () {
    console.log('Hiiiiiii');
  },
};

document_v2.getElementById_v2();
interalName();
