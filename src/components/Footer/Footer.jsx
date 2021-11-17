import style from "./Footer.module.css"

const Footer = () =>{
    return(
        <div className={style.footer}>
            <div className={style.name}>Rozetka</div>
            <div className={style.social}>
                <a><img className={style.soc} src="https://img.icons8.com/material/480/instagram-new--v1.png"/></a>
                <a><img className={style.soc} src="https://img.icons8.com/material-two-tone/452/facebook-f--v2.png"/></a>
                <a><img className={style.soc} src="https://image.flaticon.com/icons/png/512/87/87413.png"/></a>
            </div>
        </div>
    );
}
export default Footer