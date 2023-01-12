import React, {useEffect, useState} from 'react';
import classes from "./MainContainer.module.css";

const MainContainer = () => {

    const products = [
        {id: 1, name: 'Часы', date : '2002.05.04', amount: '13560', phone_number: '89522216565'},
        {id: 2, name: 'Футболка', date : '2002.05.01', amount: '24164', phone_number: '89529874578'},
        {id: 3, name: 'Картина', date : '1980.01.01', amount: '24164', phone_number: '89522212378'},
        {id: 4, name: 'Геймпад', date : '2021.05.04', amount: '11541', phone_number: '89522214224'},
        {id: 5, name: 'Велосипед', date : '2021.05.04', amount: '3560', phone_number: '89522278954'},
        {id: 6, name: 'Автомобиль', date : '1980.12.12', amount: '5415356', phone_number: '849522214578'},
        {id: 7, name: 'Кабель', date : '2020.01.07', amount: '1350', phone_number: '89522217848'},
        {id: 8, name: 'Шина', date : '2005.12.07', amount: '1560', phone_number: '89522265654'},
        {id: 9, name: 'Стул', date : '2007.05.04', amount: '1360', phone_number: '89522221354'},
        {id: 10, name: 'Смартфон', date : '2020.05.22', amount: '43560', phone_number: '89522456478'},
        {id: 11, name: 'Клавиатура', date : '2020.22.05', amount: '3567', phone_number: '89522474578'},
        {id: 12, name: 'Гитара', date : '2000.14.07', amount: '11454', phone_number: '88522214578'},
        {id: 13, name: 'Тетрадь', date : '2022.08.04', amount: '74', phone_number: '89522214578'},
        {id: 14, name: 'Салфетка', date : '2009.04.04', amount: '15', phone_number: '89522214578'},
        {id: 15, name: 'Пианино', date : '2015.12.15', amount: '741258', phone_number: '89522555555'},
        {id: 16, name: 'Смартфон', date : '2008.07.08', amount: '41547', phone_number: '87472214578'},
        {id: 18, name: 'Плед', date : '2018.11.18', amount: '800', phone_number: '89522214454'},
        {id: 17, name: 'Клей', date : '2018.11.18', amount: '150', phone_number: '89522214578'},
    ]

    const [sortingProducts, setSortingProduct] = useState([])

    const [productValue, setProductValue] = useState('asc')

    const [sortingValue, setSortingValue] = useState('name')
    const [newSortingValue, setNewSortingValue] = useState({name:false, date: false, amount:false, phone_number:false})

    const testPhoneFilter = () => {
        if(productValue === 'asc'){
            setSortingProduct([...products].sort((a, b) =>  a[sortingValue]-b[sortingValue]))
        }
        else if(productValue === 'desc'){
            setSortingProduct([...products].sort((a, b) => b[sortingValue]-a[sortingValue]) )
        }
        else if(productValue === ''){
            setSortingProduct(products.sort(() => Math.random() - 0.5))
        }
    }


    const productSortHandler = (value) => {
        setSortingValue(value)
        if(productValue === 'asc'){
            setProductValue('desc')
        }
        else if(productValue === 'desc'){
            setProductValue('')
            setSortingProduct(products)
        }
        else if(productValue === ''){
            setProductValue('asc')
        }
    }

    const sortedProducts = () => {
        if(productValue === 'asc'){
            setSortingProduct([...products].sort((a, b) => a[sortingValue].localeCompare(b[sortingValue])))
        //    a[sortingValue]-b[sortingValue]
        }
        else if(productValue === 'desc'){
            setSortingProduct([...products].sort((a, b) => a[sortingValue].localeCompare(b[sortingValue])).reverse())
        }
        else if(productValue === ''){
            setSortingProduct(products.sort(() => Math.random() - 0.5))
        }
    }

    useEffect(()=> sortedProducts(), [productValue])

    return (
        <div>

            <div className={classes.navBar}>
                <span className={classes.navBar_titles} onClick={()=>productSortHandler('name')}>
                    Название
                </span>
                <span className={classes.navBar_titles} onClick={()=>productSortHandler('date')}>
                    Дата
                </span>
                <span className={classes.navBar_titles} onClick={()=>productSortHandler('amount')}>
                    Стоимость
                </span>
                <span className={classes.navBar_titles} onClick={()=>setNewSortingValue({...newSortingValue, phone_number:true})}>
                    телефон
                </span>
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