import styles from './css/Inpt.module.css';

const Inpt = ({ key, title, error, onchange }) => {
    return (
        <div
            key={key}
            id={styles.inptContainer}
        >
            <p id={styles.inptTitle}>
                {title}
            </p>
            <input
                id={styles.inptInput}
                onChange={e => onchange(e)}
            />
            { error && <p id={styles.inptError}>{error}</p> }
        </div>
    )
}


export default Inpt;