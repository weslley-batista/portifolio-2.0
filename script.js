// Copiar email para area de tranferencia
function copyToClipBoard() {
    let text = document.getElementById('email');
    navigator.clipboard.writeText(text.textContent);
}
// Mudar estado do aviso de email
function changeStateCopy(){
    let state = document.getElementById('emailCopy');
    state.innerHTML = "Copiado com sucesso!"
    setTimeout(() => {state.innerHTML = "Copiar"}, 2000)
}