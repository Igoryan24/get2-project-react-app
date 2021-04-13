import azur from '../../../common/style/images/azurair.jpg'
import windrose from '../../../common/style/images/windrose.jpeg'
import skyup from '../../../common/style/images/skyup2.jpg'
import mau from '../../../common/style/images/mau.jpg'
import azuricon from '../../../common/style/images/azur.png'
import windicon from '../../../common/style/images/wr2.png'
import skicon from '../../../common/style/images/sk2.png'
import mauicon from '../../../common/style/images/mau.png'

const flights = [
    {
        id:1,
        head: "AZUR Air Ukraine",
        airicon: azuricon,
        photo: azur,//"images/azurair.jpg",
        description: `Подорожуйте безпечно разом з AZUR Air Ukraine, за доступними цінами!
            Авіакомпанія отримала ну майже новий, досить рідкісний Boeing 757-300 родом з Ізраїлю. На даний момент, основу авіакомпанії становлять літаки Boeing.`,
        color: "#5f2923",
        fullDescription:`<div class='container'>
            <div class='description-row'>
                <p class="article-head">Хто такі і на чому літають ?</p>
                <p class"f-description"><br>Азур Ейр Україна, у давні часи мала назву ЮТейр, спеціалізувалася в основному на виконанні чартерних рейсів для туроператора «Anex Tour».<br> З того часу багато чого змінилося, від назви компанії до афіафлоту та напрямків польотів. Із головних фішок даної компанії можна виділити нові напрямки польотів, на Домінікану та Кубу, за досить бюджетними цінами здебільшого це прямі чартерні рейси. У літку 2020 компанія отримала обновку, далекомагістральний, вузькофюзеляжний (рядність місць 3х3) літак Boening 757-300 місткістю до 295 пасажирів, Раніше Boeing 757 не експлуатувалася українськими авіакомпаніями. Бортовий номер літака: UR-AZP, рік випуску 1999, до цього експлуатувався ізраїльською авіакомпанією Arkia. Даний літак допомогав дістатися хасидам до Одеси. <br> На сьогоднішній день авіафлот компанії складається з 7 повітряних суден:</br></p>
                <br> <li class="fly-description">Boeing 767-300ER - 3шт, 1991/1993/2001 - років виробництва відповідно;</li></br>
                <br> <li class="fly-description">Boeing 737-800NG - 3шт, 1999/2000/2003 - років виробництва відповідно;</li></br>
                <br> <li class="fly-description">Boeing 757-300 - 1шт, 1999 - року виробництва;</li></br>
                <br> Середній вік авіафлоту становить 23 роки - чимало, чи не так ?</br>
                <br> З навединих даних можна зробити висновки, що фраза "летюча маршрутка чи маршрутка з крилами", яка часто зустрічається у відгуках залишених пасажирами, повністю виправдовує свій сенс=));
            </div>
        </div>`,
        /*testimonials: 
            {
                id:1,
                testimonial: {
                    name: "Петро", 
                    text: "Даная статья фуфло, не очем! Летали этой зимой с женой на доминикану, с Азуром, все супер! Всем были довольны, немного с потолка капала вода, но вертливые стюардессы вовремя ее вытерали салфетками. А на обед давали сухари очень вкусные и хрустящие)) Из минусов хочу отметить, что в салоне немного попахивало керосином, а так все супер! Даной авиакомпании однозначный рекомендансён!))",

                },
                id:2,
                testimonial: {
                    name: "Кастиль", 
                    text: "Возил свою малую в Анталию, нам очень понравился полет!",
                }
                
            },*/
    },
    {
        id:2,
        head: "WINDROSE airlines",
        photo: windrose,//"/images/windrose.jpeg",
        airicon: windicon,
        description: `Швидко та вчасно Windrose доставить вас на відпочинок вашої мрії! Лідер з вчасно виконаних рейсів.
        Замовляйте квитки та отримайте каву і пончик в подарунок!
        В основі авіапарку 3 середньомагістральні літаки Airbus A-321 і 1 Airbus A320`,
        classwindrose: "row-windrose",
        color: "#db4c09",
        testimonial:{id:2,name:"",text:""},
        
    },
    {
        id:3,
        head: "SkyUp Airlines",
        photo: skyup,//"/images/skyup2.jpg",
        airicon: skicon,
        description: "Єдина авіакомпанія України яка на даний момент виконує прямі рейси до Занзібару, із стрімко зростаючим авіафлотом досить свіжих та комфортних середньомагістральних літаків Boeing 737-700 NG/800 NG/900 ER. Середній вік авіфлоту становить 9 років.",
        color: "#f36a2a",
        
    },
    {
        id:4,
        head: "Ukraine International Airlines",
        photo: mau,//"/images/mau.jpg",
        airicon: mauicon,
        description: `МАУ можна назвати справжнім "Oldom" на ринку вітчизняних авіакомпаній, і хоча компанія має досить потужний авіафлот в основі якого Boeing, очолює топ найгірших авіакомпаній світу. Чи варто переплачувати за сумнівний сервіс ? Питання залишається досить відкритим. `, 
        classwindrose: "row-windrose",
        color: "#4c89da",
        
    }
]

export const getFlightsObject = array => array.reduce((obj,flight) => ({
    ...obj,
    [flight.id]:flight,
}),{})

export default flights