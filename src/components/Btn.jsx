import styles from "./css/Btn.module.css";

const Btn = ({ type, mode, text, onClick }) => {
    return (
        <button className={styles[`${mode}Btn`]} type={type} onClick={onClick}>
            {text}
        </button>
    );
}

export default Btn;
