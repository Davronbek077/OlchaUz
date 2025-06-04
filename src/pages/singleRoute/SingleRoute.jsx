import React from 'react'
import { data } from '../../mock/datamock'
import { useParams } from 'react-router-dom'
import { IoMdCheckmark } from "react-icons/io";
import { BsBagCheck } from "react-icons/bs";
import { RiTruckLine } from "react-icons/ri";
import './SingleRoute.css'


const SingleRoute = () => {
    const params = useParams();

    const data = Data.find((item) => item.id == params.id);
    console.log(data);

    

  return (
    <div className='single-route'>
        <div className="single-img">
            <h2>{data.title} </h2>
            <img src={data.url[0]} alt="" />
        </div>

        <div className="single-text-container">

            <div className="single-form">
                <h2>{data.price} so'm </h2>
                <div className="delivery-info">
                    <p id='title'>Yetkazib berish to'g'risida ma'lumot:</p>
                    <div className="delivery-title">
                    <RiTruckLine id='truck' />
                    <p>Standart yetkazib berish</p>
                    </div>
                    <div className="delivery-text">
                        <p>Manzilga qarab 4 soatdan 5 ish kunigacha yetkazib beriladi</p>
                    </div>
                </div>

                <div className="form-purchase">
                    <div className="form-purchase-click">
                    <button id='basket'>Savatchaga qo'shish</button>
                    </div>
                    <button id='purchase'>Bir klikda sotib olish</button>
                </div>

                <div className="form-purchase-info">
                    <div className="form-check">
                    <div className="check"><IoMdCheckmark id='check'/></div>
                    <p> 5 dona xarid qilish mumkin </p>
                    </div>
                    <div className="form-bagCheck">
                        <div className="bagCheck"><BsBagCheck id='bagCheck'/></div>
                        <p>Bu haftada 48 kishi sotib oldi</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default SingleRoute
