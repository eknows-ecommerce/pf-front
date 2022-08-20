const validarInputText = (texto) => {
  return /^[A-Za-z ]*$/.test(texto)
}

const validarInputNumero = (numero) => {
  return /^[0-9 ]*$/.test(numero)
}

export { validarInputNumero, validarInputText }
