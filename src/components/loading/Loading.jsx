import React from "react";
import s from './Loading.module.css'

export default function Loading({ setLoading }){
        setTimeout(() =>{
            setLoading(false)
        }, 2000)
    return(
        <div className={s.container}>
            <div className={s.loading}></div>
        </div>
    )
}