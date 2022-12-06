import React, {useState, useEffect} from 'react';
import {
    Route,
    Routes,
  } from "react-router-dom";
import MenuNavigation from '../components/navigation/menu_navigation/MenuNavigation';
import Pizza from '../components/navigation/pizza/Pizza';
import Basket from '../components/navigation/basket/Basket';
import JsonMenu from './menu.json';
import JsonMenuSnacks from './snacks.json';
import JsonMenuDrinks from './drinks.json';
import Home from '../components/navigation/home/Home';
import Snacks from '../components/navigation/snacks/Snacks';
import Drinks from '../components/navigation/drinks/Drinks';
import Footer from '../components/footer/Footer';
import AboutUs from '../components/footer/about_us/AboutUs';
import Stock from '../components/footer/stock/Stock';
import Admin from '../components/navigation/admin/Admin';

const Router = () => {
    const [arrayPizza, setArrayPizza] = useState([]);
    const [arrayBasket, setArrayBasket] = useState([]);
    const [arraySnacks, setArraySnacks] = useState([]);
    const [arrayDrinks, setArrayDrinks] = useState([]);
    const [arrayForm, setArrayForm] = useState([])


    useEffect(() => {
        jsonContent()
    }, [])
    

    function jsonContent(){
        const newArray = JsonMenu.results.menu;
        const newArraySnacks = JsonMenuSnacks.results.snacks;
        const newArrayDrinks = JsonMenuDrinks.results.drinks;
        setArrayPizza(newArray)
        setArraySnacks(newArraySnacks)
        setArrayDrinks(newArrayDrinks)
    }

    return (
        <div className='wrapper'>
            <div className='top_header'>
                <MenuNavigation arrayBasket={arrayBasket}/>
            </div>
            <div className='content'>
                <Routes>
                    <Route path='/' element={<Home arrayPizza={arrayPizza} arrayDrinks={arrayDrinks} arraySnacks={arraySnacks} setArrayBasket={setArrayBasket} arrayBasket={arrayBasket}/>}/>
                    <Route path='/pizza' element={<Pizza arrayPizza={arrayPizza} setArrayBasket={setArrayBasket} arrayBasket={arrayBasket}/>}/>
                    <Route path='/basket' element={<Basket arrayBasket={arrayBasket} setArrayBasket={setArrayBasket} arrayForm={arrayForm} setArrayForm ={setArrayForm}/>}/>
                    <Route path='/snacks' element={<Snacks arraySnacks={arraySnacks} setArrayBasket={setArrayBasket} arrayBasket={arrayBasket}/>}/>
                    <Route path='/drinks' element={<Drinks arrayDrinks={arrayDrinks} setArrayBasket={setArrayBasket} arrayBasket={arrayBasket}/>}/>
                    <Route path='/admin' element={<Admin  arrayForm={arrayForm} setArrayForm={setArrayForm}/>}/>
                </Routes>
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
    );
};

export default Router;