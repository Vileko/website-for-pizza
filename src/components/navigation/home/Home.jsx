import React, {useState} from 'react';
import {  Carousel} from 'react-bootstrap';
import HomePizza from './HomePizza';
import HomeDrinks from './HomeDrinks';
import ShowAlert from '../pizza/ShowAlert';

const Home = ({arrayPizza, arrayDrinks, arraySnacks, setArrayBasket, arrayBasket}) => {
    const [showAlert, setShowAlert] = useState(null);
    const [showAlertActive, setShowAlertActive] = useState(false);

    function hideAlert(){
        setShowAlert(null);
      }

    function btnInBasket(array, price = array.price, quantity  = 1) {
        const newIndex = arrayBasket.findIndex(ar => ar.id === array.id)
        
        if(newIndex < 0){
            const newArray = {
                ...array,
                pricce: price,
                quantity: quantity,
            }
            setArrayBasket([...arrayBasket, newArray])
            setShowAlertActive(false)
            setShowAlert(
                <div className="postList_title_text"><span>{array.title}</span> добавлен в корзнину</div>
              )
        } else {
            setShowAlertActive(true)
            setShowAlert(
            <div className="postList_title_text"><span>{array.title}</span> уже в корзине</div>
            )
        }
    }
    return (
        <div className='container carusel'>
            <ShowAlert text={showAlert} hideAlert={hideAlert} showAlertActive={showAlertActive}/>
            <Carousel>
                <Carousel.Item interval={5000}>
                    <div className="carusel_img-1"></div>
                    <Carousel.Caption>
                    <h3>В понедельник!</h3>
                    <p>По слову "Пицца ТОП" скидка 25% на ВСЕ</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div className="carusel_img-2"></div>
                    <Carousel.Caption>
                    <h3>Доставка</h3>
                    <p>Закажи доставку и получити БОНУС!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div className="carusel_img-3"></div>
                    <Carousel.Caption>
                    <h3>По вторникам!</h3>
                    <p>Маленькая пицца в ПОДАРОК!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className='home_menu'>
           
                <div>
                    <h2>Топ 3 пиццы</h2>
                    <div className='pizza'>
                        {arrayPizza.map(array => 
                            array.top === true ? <HomePizza post={array} key={array.id} btnInBasket={btnInBasket}/> : false
                        )}
                    </div>
                </div>
                <div>
                    <h2>Самые вкусные напитки</h2>
                    <div className='pizza'>
                        {arrayDrinks.map(array => 
                                array.top === true ? <HomePizza post={array} key={array.id} btnInBasket={btnInBasket}/> : false
                            )}
                    </div>
                </div>
                <div>
                    <h2>Топ 3 суппа</h2>
                    <div className='pizza'>
                        {arraySnacks.map(array => 
                                array.top === true ? <HomeDrinks post={array} key={array.id} btnInBasket={btnInBasket}/> : false
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Home;