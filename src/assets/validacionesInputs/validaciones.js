const validarInputText = (texto) =>texto && /^[A-Za-z\s]+$/g.test(texto)

const validarInputNumero = (numero) => numero && /^[1-9]\d*(.\d+)?$/.test(numero)
export {validarInputNumero, validarInputText}