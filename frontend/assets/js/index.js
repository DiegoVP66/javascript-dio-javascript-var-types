/* Desenvolvido por Diego Vicente Pereira  */

let currentWord = document.getElementById("word");
let result = document.getElementById("result");
let buttonVerify = document.getElementById("btn");
let verify;

const palindromo = (string) => {
  if (!string) return (result.innerHTML = "String inexistente");

  for (let i = 0; i < string.length / 2; i++) {
    string[i] !== string[string.length - 1 - i]
      ? (verify = false)
      : (verify = true);
  }

  verify
    ? (result.innerHTML = `A string "${string}" é um palíndromo`)
    : (result.innerHTML = `A string "${string}" não é um palíndromo`);
};

const changeWordColor = () => {
  verify ? (result.style.color = "blue") : (result.style.color = "#922020");
};

buttonVerify.addEventListener("click", function () {
  palindromo(currentWord.value);
  changeWordColor();
});
