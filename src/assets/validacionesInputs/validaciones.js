const validarInputText = (texto) => {
  let regex = /^[ ()a-zA-ZÀ-ÿ\u00f1\u00d1]*[ ()a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g
  return regex.test(texto)
}

const validarInputNumero = (numero) => {
  return /^[0-9 ]*$/.test(numero)
}

export { validarInputNumero, validarInputText }
