function seletorDeEstado() {
  let states = document.getElementById('estados-brasil');
  let stateOptions =  ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let i = 0; i < stateOptions.length; i += 1) {
    let option = document.createElement('option');
    option.innerText = stateOptions[i];
    option.value = stateOptions[i];
    states.appendChild(option);
  }
} 
seletorDeEstado();

function validationName(input, name) {
  let trimmed = input.value.trim();
  let validation = inputs[name];

  if(validation.required && trimmed.length === 0) {
    return false;
  }

  if(validation.maxLength && trimmed.length > validation.maxLength) {
    return false;
  }

  return true;
}
