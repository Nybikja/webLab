import style from "./Intro.module.css"
import {Button} from "react-bootstrap";
import Cards from "./Card/Card";


const Intro = () => {
    return (
        <div className={style.intro}>
            <div className={style.introduction}>
                <div>
                    <img className={style.photo} src="https://xl-static.rozetka.com.ua/assets/img/design/logo_bf.svg"/>
                </div>
                <div className={style.text}>
                    <h1 className={style.title}>Rozetka</h1>
                    <p className={style.paragraph}>ROZETKA – самый большой онлайн-ритейлер в стране. 
                    С 2005 года мы воплощаем маленькие мечты и грандиозные планы миллионов людей. 
                    У нас можно найти буквально все. Мы продаем по справедливой цене и предоставляем 
                    гарантию, так как считаем, что онлайн-шопинг должен быть максимально удобным и 
                    безопасным. И каждый раз, когда кто-то нажимает «Купить», мы понимаем, 
                    что делаем нужное дело.</p>
                </div>
            </div>

            <div className={style.content}>
                <div className={style.card}>
                    <Cards
                        src="https://content1.rozetka.com.ua/goods/images/big/233713916.jpg"
                        title="Упаковка влажного корма для котов Purina"
                        text="Снеки Gimborn GimCat Мультивитамин микс 150 г."/>
                    <Cards
                        src="https://content1.rozetka.com.ua/goods/images/big/195937063.jpg"
                        title="Зонт складной AVK L3FA59SA-10-04"
                        text="Оплата. Оплата при получении товара, Картой онлайн, Google Pay, -5% скидки от ПриватБанк и Mastercard от 500 грн"/>
                    <Cards
                        src="https://content.rozetka.com.ua/goods/images/big/22702443.jpg"
                        title="Пульсоксиметр HEACO CMS50B"
                        text="Тип элемента питания
                        2 х ААА (в комплекте)
                        "/>
                </div>
            </div>
        </div>
    );
}
export default Intro