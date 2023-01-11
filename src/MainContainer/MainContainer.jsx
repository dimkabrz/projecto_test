import React, {useEffect, useState} from 'react';
import classes from "./MainContainer.module.css";

const MainContainer = () => {

    const products = [
        {id: 1, name: 'Часы', date : 22052020, amount: 13560, phone_number: 89522214578},
        {id: 2, name: 'Футболка', date : 22052020, amount: 13560, phone_number: 89522214578},
        {id: 3, name: 'Картина', date : 22052020, amount: 13560, phone_number: 89522214578},
        {id: 4, name: 'Геймпад', date : 22052020, amount: 13560, phone_number: 89522214578},
        {id: 5, name: 'Велосипед', date : 22052020, amount: 13560, phone_number: 89522214578},
        {id: 6, name: 'Автомобиль', date : 22052020, amount: 13560, phone_number: 89522214578},
        {id: 7, name: 'Кабель', date : 22052020, amount: 13560, phone_number: 89522214578},
        {id: 8, name: 'Шина', date : 22052020, amount: 13560, phone_number: 89522214578},
        {id: 9, name: 'Стул', date : 22052020, amount: 13560, phone_number: 89522214578},
        {id: 10, name: 'Смартфон', date : 22052020, amount: 13560, phone_number: 89522214578},
        {id: 11, name: 'Клавиатура', date : 22052020, amount: 13560, phone_number: 89522214578},
        {id: 12, name: 'Гитара', date : 22052020, amount: 13560, phone_number: 89522214578},
        {id: 13, name: 'Тетрадь', date : 22052020, amount: 13560, phone_number: 89522214578},
        {id: 14, name: 'Салфетка', date : 22052020, amount: 13560, phone_number: 89522214578},
        {id: 15, name: 'Пианино', date : 22052020, amount: 13560, phone_number: 89522214578},
        {id: 16, name: 'Молоток', date : 22052020, amount: 13560, phone_number: 89522214578},
        {id: 18, name: 'Плед', date : 22052020, amount: 13560, phone_number: 89522214578},
        {id: 17, name: 'Клей', date : 22052020, amount: 13560, phone_number: 89522214578},
    ]

    const [sortingProducts, setSortingProduct] = useState([])



    const sortedProducts = () => {
        setSortingProduct([...products].sort((a, b) => a.name.localeCompare(b.name)))
    }

    useEffect(()=> sortedProducts(), [])

    return (
        <div>

            <div className={classes.navBar}>
                <span className={classes.navBar_titles}>Название</span>
                <span className={classes.navBar_titles}>Дата</span>
                <span className={classes.navBar_titles}> Стоимость</span>
                <span className={classes.navBar_titles}> телефон</span>
            </div>
            {sortingProducts.map(product=>
                <div key={product.id+1} className={classes.product_card}>
                <div className={classes.product_property}>{product.name}</div>
                <div className={classes.product_property}>{product.date}</div>
                <div className={classes.product_property}>{product.amount}</div>
                <div className={classes.product_property}>{product.phone_number}</div>
                </div>
            )}
        </div>
    );
};

export default MainContainer;