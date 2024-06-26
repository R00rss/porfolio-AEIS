// import "./ThemeComponent.css"; CSS- normal
import { useState } from "react";
import styles from "./ThemeComponent.module.css"; // CSS - modulos

// tailwindCSS + CSS
//CSS - modulos de css


export default function ThemeComponent() {
    const [darkMode, setDarkMode] = useState(false)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        // cuando es tipo checkbox e.target.checked
        console.log(typeof e.target.checked)
        console.log("checked", e.target.checked)
        setDarkMode(e.target.checked)
    }
    return (
        <section className="flex justify-center items-center gap-2">
            <button
                onClick={() => setDarkMode(false)}
                className={`${!darkMode ? "text-slate-100" : "text-slate-100/50"} lg:text-sm text-xs`}>Light</button>
            <label className={styles.switch} htmlFor="input_theme">
                <input checked={darkMode} onChange={handleChange} type="checkbox" name="input_theme" id="input_theme" />
                <span className={styles.slider}></span>
            </label>
            <button
                onClick={() => setDarkMode(true)}
                className={`${darkMode ? "text-slate-100" : "text-slate-100/50"} lg:text-sm text-xs`}>Dark</button>
        </section>
    )
}
