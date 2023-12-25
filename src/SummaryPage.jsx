import React from "react";
import "./Summary.css";


import Choose__item from "./choose-module/choose-module__item";

import img1 from "./Group.svg";
import img2 from "./arrow.svg";


import {  useCustomization } from './contexts/Customization';

import { Link } from "react-router-dom";

const SummaryPage = () => {
  const { handle, setHandle, front, setFront, back, setBack } = useCustomization();

  const option1Options = [
    { label: "Закругленная", value: "Закругленная" },
    { label: "КвадратМеталл", value: "КвадратМеталл" },
    { label: "КвадратТемноСерая", value: "КвадратТемноСерая" },
    { label: "КруглоКвадратная", value: "КруглоКвадратная" },
    { label: "ТрапецияЗолото", value: "ТрапецияЗолото" },
    { label: "КвадратЧерная", value: "КвадратЧерная" },
   ];
   const option2Options = [
    { label: "Эконом", value: "Эконом" },
    { label: "Термодверь", value: "Термодверь" },
    { label: "Трио", value: "Трио" },
    { label: "Бастион", value: "Бастион" },
    { label: "Альба", value: "Альба" },
    { label: "Кельт", value: "Кельт" },
    { label: "Вельс", value: "Вельс" },
    { label: "Швед", value: "Швед" },
    { label: "ПортоМуар", value: "ПортоМуар" },
   ];
   const option3Options = [
    { label: "Эконом", value: "Эконом" },
    { label: "Термодверь", value: "Термодверь" },
    { label: "Трио", value: "Трио" },
    { label: "Бастион", value: "Бастион" },
    { label: "Альба", value: "Альба" },
    { label: "Кельт", value: "Кельт" },
    { label: "Вельс", value: "Вельс" },
    { label: "Швед", value: "Швед" },
    { label: "ПортоМуар", value: "ПортоМуар" },
   ];
   console.log("Summary", handle);
  return (

      <div className="container">
          

          
          <div className="option-right__wrapper">
            <div className="option-right">
              <div className="choose__item">
                <Choose__item></Choose__item>
              </div>
                <div className="handle">
                  <h3 className="option__title">Ручка</h3>
                    <div className="option__choose">
                      <div
                        className={`item ${handle === "Закругленная" ? "item-active" : ""}`}
                        onClick={() => setHandle("Закругленная")}
                      >
                        <div className="item__label">Закругленная</div>
                      </div>
                      <div
                        className={`item ${handle === "КвадратМеталл" ? "item-active" : ""}`}
                        onClick={() => setHandle("КвадратМеталл")}
                      >
                        <div className="item__label">КвадратМеталл</div>
                      </div>
                      
                      <div
                        className={`item ${handle === "КвадратТемноСерая" ? "item-active" : ""}`}
                        onClick={() => setHandle("КвадратТемноСерая")}
                      >
                        <div className="item__label">КвадратТемноСерая</div>
                      </div>
                      <div
                        className={`item ${handle === "КруглоКвадратная" ? "item-active" : ""}`}
                        onClick={() => setHandle("КруглоКвадратная")}
                      >
                        <div className="item__label">КруглоКвадратная</div>
                      </div>
                      <div
                        className={`item ${handle === "ТрапецияЗолото" ? "item-active" : ""}`}
                        onClick={() => setHandle("ТрапецияЗолото")}
                      >
                        <div className="item__label">ТрапецияЗолото</div>
                      </div>
                      <div
                        className={`item ${handle === "КвадратЧерная" ? "item-active" : ""}`}
                        onClick={() => setHandle("КвадратЧерная")}
                      >
                        <div className="item__label">КвадратЧерная</div>
                      </div>
                    </div>
                </div>
                    
                  
                <div className="front">
                  <h3 className="option__title">Передняя часть</h3>
                  <div className="option__choose">
                    <div
                      className={`item ${front === "Эконом" ? "item-active" : ""}`}
                      onClick={() => setFront("Эконом")}
                    >
                      <div className="item__label">Эконом</div>
                    </div>
                    <div
                      className={`item ${front === "Термодверь" ? "item-active" : ""}`}
                      onClick={() => setFront("Термодверь")}
                    >
                      <div className="item__label">Термодверь</div>
                    </div>
                    <div
                      className={`item ${front === "Трио" ? "item-active" : ""}`}
                      onClick={() => setFront("Трио")}
                    >
                      <div className="item__label">Трио</div>
                    </div>
                    <div
                      className={`item ${front === "Бастион" ? "item-active" : ""}`}
                      onClick={() => setFront("Бастион")}
                    >
                      <div className="item__label">Бастион</div>
                    </div>
                    <div
                      className={`item ${front === "Альба" ? "item-active" : ""}`}
                      onClick={() => setFront("Альба")}
                    >
                      <div className="item__label">Альба</div>
                    </div>
                    <div
                      className={`item ${front === "Кельт" ? "item-active" : ""}`}
                      onClick={() => setFront("Кельт")}
                    >
                      <div className="item__label">Кельт</div>
                    </div>
                    <div
                      className={`item ${front === "Вельс" ? "item-active" : ""}`}
                      onClick={() => setFront("Вельс")}
                    >
                      <div className="item__label">Вельс</div>
                    </div>
                    <div
                      className={`item ${front === "Швед" ? "item-active" : ""}`}
                      onClick={() => setFront("Швед")}
                    >
                      <div className="item__label">Швед</div>
                    </div>
                    <div
                      className={`item ${front === "ПортоМуар" ? "item-active" : ""}`}
                      onClick={() => setFront("ПортоМуар")}
                    >
                      <div className="item__label">ПортоМуар</div>
                    </div>
                  </div>
                </div>

                <div className="back"> 
                  <h3 className="option__title">Задняя часть</h3>  
                  <div className="option__choose">
                    <div
                      className={`item ${back === "Эконом" ? "item-active" : ""}`}
                      onClick={() => setBack("Эконом")}
                    >
                      <div className="item__label">Эконом</div>
                    </div>
                    <div
                      className={`item ${back === "Термодверь" ? "item-active" : ""}`}
                      onClick={() => setBack("Термодверь")}
                    >
                      <div className="item__label">Термодверь</div>
                    </div>
                    <div
                      className={`item ${back === "Трио" ? "item-active" : ""}`}
                      onClick={() => setBack("Трио")}
                    >
                      <div className="item__label">Трио</div>
                    </div>
                    <div
                      className={`item ${back === "Бастион" ? "item-active" : ""}`}
                      onClick={() => setBack("Бастион")}
                    >
                      <div className="item__label">Бастион</div>
                    </div>
                    <div
                      className={`item ${back === "Альба" ? "item-active" : ""}`}
                      onClick={() => setBack("Альба")}
                    >
                      <div className="item__label">Альба</div>
                    </div>
                    <div
                      className={`item ${back === "Кельт" ? "item-active" : ""}`}
                      onClick={() => setBack("Кельт")}
                    >
                      <div className="item__label">Кельт</div>
                    </div>
                    <div
                      className={`item ${back === "Вельс" ? "item-active" : ""}`}
                      onClick={() => setBack("Вельс")}
                    >
                      <div className="item__label">Вельс</div>
                    </div>
                    <div
                      className={`item ${back === "Швед" ? "item-active" : ""}`}
                      onClick={() => setBack("Швед")}
                    >
                      <div className="item__label">Швед</div>
                    </div>
                    <div
                      className={`item ${back === "ПортоМуар" ? "item-active" : ""}`}
                      onClick={() => setBack("ПортоМуар")}
                    >
                      <div className="item__label">ПортоМуар</div>
                    </div>
                  </div>
                </div>
              </div>
              
              
            
              <footer>
                <div className="mainfooter">
                  <Link to="/">
                    <button className="back__btn">
                      <div className="footer-btn__div">
                        <span>
                          <img src={img2} alt="" className="arrow" />
                        </span>
                        <span id="back-btn__item">Назад</span>
                      </div>
                    </button>
                  </Link>
                  <Link to="/cart">
                    <button className="footer__btn1">
                      <div className="footer-btn__div">
                        <span id="zakaz">34 500₽ Оформить</span>
                        <span>
                          <img src={img1} alt="" className="cart" />
                        </span>
                      </div>
                    </button>
                  </Link>
                </div>
              </footer>

            </div>
          </div>

  );
}

export default SummaryPage;
