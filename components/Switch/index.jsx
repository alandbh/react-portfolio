import styles from './Switch.module.css'
function Switch() {
  return (
    <div>
        <label className={styles.wrapper}>
            <input type="checkbox" name='worktype' />
            <div className="border-white/50 border">
                <div className='bg-white/50'></div>
                <span>UX/UI</span>
                <span className={styles.check}>FRONT-END</span>
            </div>
        </label>
    </div>
  );
}

export default Switch;