<<<<<<< HEAD
const validarInputText = (texto) =>texto && /^[A-Za-z\s]+$/g.test(texto)

const validarInputNumero = (numero) => numero && /^[1-9]\d*(.\d+)?$/.test(numero)
export {validarInputNumero, validarInputText}
=======
const validarInputText = (texto) => texto && /^[A-Za-z\s]+$/g.test(texto)

const validarInputNumero = (numero) =>
  numero && /^[1-9]\d*(.\d+)?$/.test(numero)
export { validarInputNumero, validarInputText }
>>>>>>> b5842a4509709a0c82dfbde062b509de99571500
