import * as styles from "./Footer.css";
function Footer() {

    const getCurrentYear = ()=>{
        return new Date().getFullYear();
    };
  return (
    <div className={styles.footer}>
        <p>Melbourne, Victoria 3002, Australia. &copy; Ten Ten   {getCurrentYear()}</p>
    </div>
  )
}

export default Footer






















