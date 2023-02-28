const nome = getElementById("nomeId");
const email = getElementById("emailId");
const fone = getElementById("foneId");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function checkInputs() {
  const nomeValue = nome.value;
  const emailValue = email.value;
  const foneValue = fone.value;

  if (nomeValue === "") {
    setErrorFor(nome, "O nome de usuário é obrigatorio.");
  } else setSuccessFor(nome);

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatorio.");
  } else setSuccessFor(email);

  if (foneValue === '') {
    setErrorFor(fone, "O número de telefone é obrigatorio.");
} else setSuccessFor(telefone);
}