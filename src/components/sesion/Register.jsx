import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
//import { registUser } from "../actions";

const validateForm = (form) => {
  let errors = {};
  let regexName = /^[0-9A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

  if (!form.email.trim()) {
    errors.email = "Este campo es obligatorio";
  }
  if (!form.user.trim()) {
    errors.user = "Este campo es obligatorio";
  }
  if (!form.pswd.trim()) {
    errors.pswd = "Este campo es obligatorio";
  }
  if (!form.pswd2.trim()) {
    errors.pswd2 = "Este campo es obligatorio";
  }

  /*if (typeof form.email.trim() !== "undefined") {
    if (!regexName.test(form.email.trim())) {
      errors.title = "Este campo solo acepta letras y números";
    }
  }*/
  if (typeof form.user.trim() !== "undefined") {
    if (!regexName.test(form.user.trim())) {
      errors.user = "Este campo solo acepta letras y números";
    }
  }
  if (typeof form.pswd.trim() !== "undefined") {
    if (!regexName.test(form.pswd.trim())) {
      errors.pswd = "Este campo solo acepta letras y números";
    }
  }
  if (form.pswd.trim() !== form.pswd2.trim()) {
    errors.pswd2 = "Las contraseñas son diferentes";
  }

  return errors;
};

export default function Register() {
  const dispatch = useDispatch();
  const [errorsForm, setErrorsForm] = useState({});

  const [form, setForm] = useState({
    email: "",
    user: "",
    pswd: "",
    pswd2: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrorsForm(
      validateForm({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //si hay errores no enviar
    if (Object.keys(errorsForm).length !== 0) {
      alert("Error en registracion");
    } else {
      e.preventDefault();
      //dispatch(registUser(form));
      alert("Registrado perfectamente");
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1 className="font-bold font-poiret-one p-2">
          Email:
        </h1>
        <input className="font-bold font-poiret-one p-1 border-2"
          type='email'
          name='email'
          value={form.email}
          onChange={(e) => handleChange(e)}
        />
        {errorsForm.email ? (
          <h1 className="font-bold text-xs text-red-500">{errorsForm.email}</h1>
        ) : (
          false
        )}
        <h1 className="font-bold font-poiret-one p-2">
          Usuario:
        </h1>
        <input className="font-bold font-poiret-one p-1 border-2"
          type='text'
          name='user'
          value={form.user}
          onChange={(e) => handleChange(e)}
        />
        {errorsForm.user ? (
          <h1 className="font-bold text-xs text-red-500">{errorsForm.user}</h1>
        ) : (
          false
        )}
        <h1 className="font-bold font-poiret-one p-2">
          Contraseña:
        </h1>
        <input className="font-bold font-poiret-one p-1 border-2"
          type='password'
          name='pswd'
          value={form.pswd}
          onChange={(e) => handleChange(e)}
        />
        {errorsForm.pswd ? (
          <h1 className="font-bold text-xs text-red-500">{errorsForm.pswd}</h1>
        ) : (
          false
        )}
        <h1 className="font-bold font-poiret-one p-2">
          Confirme contraseña:
        </h1>
        <input className="font-bold font-poiret-one p-1 border-2"
          type='password'
          name='pswd2'
          value={form.pswd2}
          onChange={(e) => handleChange(e)}
        />
        {errorsForm.pswd2 ? (
          <h1 className="font-bold text-xs text-red-500">{errorsForm.pswd2}</h1>
        ) : (
          false
        )}
        <button
          className='p-1 pt-0 border-2 rounded-xl'
          type="submit"
          name="submit"
        //disabled={Object.keys(errorsForm).length === 0 ? false : true}
        >Registrarse
        </button>
        <h1 className="p-2">
          o usa la cuenta de:
        </h1>
        <div className='p-1'>
          <button className='p-1 rounded-full'>
            <img src='https://cdn-icons-png.flaticon.com/512/2965/2965278.png' width={64}></img>
          </button>
          <button className='p-1 rounded-full'>
            <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' width={64}></img>
          </button>
        </div>
      </form>

      <div>
        <Link to='/' className='p-1'>
          <button className='p-1 border-2 rounded-xl'>
            Volver
          </button>
        </Link>
      </div>
    </div>
  )
}