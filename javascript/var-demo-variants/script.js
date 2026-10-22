{
  // Root
  const form = document.getElementById('personForm');
  const validationMessage = document.getElementById('validationMessage');

  console.log('form', form);
  console.log('validationMessage', validationMessage);

  let validationStatus = 'pending';

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // getElementById obtiene el valor del dni (Buscar una etiqueta html con el id dni)
    const dni = document.getElementById('dni').value;
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;

    // La funcion trim se encarga de eliminar los espacios dentro de un string
    // ' Ana' ->  despues de aplicar trim -> 'Ana'

    // !Number.isNaN(Number(dni))-  Chequea si el valor es un numero y no un string
    const dniIsValid = dni.trim() !== '' && !Number.isNaN(Number(dni));
    const nameIsValid = name.trim() !== '' && Number.isNaN(Number(name));
    const lastnameIsValid = lastname.trim() !== '' && Number.isNaN(Number(lastname));

    // Pregunta si dni y name son validos, de ser correcto guarda true
    const formIsValid = dniIsValid && nameIsValid && lastnameIsValid;
    //const formIsValid = dniIsValid && nameIsValid;

    // Esto se llama ternaria es parecido a un if, pregunta el valor si es true
    // en este caso y asinga un valor a validationStatus
    validationStatus = formIsValid ? 'valid' : 'invalid';

    // lo que hace es a validationMessage que es una porcion de html asignarle un valor
    // valid o invalid
    validationMessage.textContent = `Estado: ${validationStatus}`;

    // Console.log esta diseñada para enviar valores en la dev tools de desarrolador
    // Para poder imprimir variables
    console.log('DNI:', dni);
    console.log('Nombre:', name);
    console.log('Estado:', validationStatus);
  });
}
