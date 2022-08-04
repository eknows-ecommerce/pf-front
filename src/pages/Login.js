import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
//import { logUser } from "../actions";

const validateForm = (form) => {
  let errors = {};
  let regexName = /^[0-9A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

  if (!form.user.trim()) {
    errors.user = "This field is required";
  }
  if (!form.pswd.trim()) {
    errors.pswd = "This field is required";
  }

  if (typeof form.user.trim() !== "undefined") {
    if (!regexName.test(form.user.trim())) {
      errors.title = "This field only accept letters and numbers";
    }
  }
  if (typeof form.pswd.trim() !== "undefined") {
    if (!regexName.test(form.pswd.trim())) {
      errors.title = "This field only accept letters and numbers";
    }
  }

  return errors;
};

export default function Login() {
  const dispatch = useDispatch();
  const [errorsForm, setErrorsForm] = useState({});

  const [form, setForm] = useState({
    user: "",
    pswd: "",
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
      alert("Error log in");
    } else {
      e.preventDefault();
      //dispatch(logUser(form));
      alert("Your logged succesfully");
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1 className="font-bold font-poiret-one p-2">
          Usuario:
        </h1>
        <input className="font-bold font-poiret-one p-1 border-2"
          type='text'
          name='user'
          value={form.user}
          onChange={(e) => handleChange(e)}
        />
        {errorsForm.title ? (
          <h1 className="font-bold text-red-500">{errorsForm.title}</h1>
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
          <h1 className="font-bold text-red-500">{errorsForm.pswd}</h1>
        ) : (
          false
        )}
        <div className='p-2'>
          <button
            className='p-1 pt-0 border-2 rounded-xl'
            type="submit"
            name="submit"
          //disabled={Object.keys(errorsForm).length === 0 ? false : true}
          >Ingresar
          </button>
        </div>
        <h1 className="p-2">
          o conecta con:
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