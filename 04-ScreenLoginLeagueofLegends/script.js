const inputs = document.querySelectorAll('.input'); //será um arry com dois elementos, pela existencia do input de login e senha [0] [1] como exemplo de seleção
const button = document.querySelector('.login__button');

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}
const handleFocusOut = ({ target }) => {
    if (target.value === '') { //checa se tem algo escrito no input para impedir que ele desative
      const span = target.previousElementSibling;
      span.classList.remove('span-active');
    }
}

const handleChange = () => {
    const [username, password] = inputs;

    if(username.value && password.value.length >= 8){ //se tiver o campo login e senha de 8 digitos, libera botão login
        button.removeAttribute('disabled')
    } else{ //se não atender o necessário para login, volta a bloquear o botão
        button.setAttribute('disabled', '')
    }

}

//as funções podem ser escritas em qualquer parte do Js, elas sobem naturalmente para que sejam lidas e chamadas.
inputs.forEach((input) => input.addEventListener(
    'focus', handleFocus
)); //forEach execultará a função uma vez para cada elemento do Array
inputs.forEach((input) => input.addEventListener(
    'focusout', handleFocusOut
));
inputs.forEach((input) => input.addEventListener(
    'input', handleChange
));