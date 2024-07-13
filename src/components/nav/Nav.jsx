import React from 'react'
import './Nav.css'
import Icon from '../../img/icon.svg'
import Icon2 from '../../img/icon2.svg'
import Logo from '../../img/logo.svg'
import Promotion from '../../img/promotion.svg'
import Shipping from '../../img/shipping.svg'
import Refund from '../../img/refunt.svg'
import Support from '../../img/support.svg'
import Rate from '../../img/rate.svg'
import Facebook from '../../img/facebook.svg'
import Twitter from '../../img/twitter.svg'
import Western from '../../img/western.svg'
import Mastercard from '../../img/mastercard.svg'
import Paypal from '../../img/paypal.svg'
import Visa from '../../img/visa.svg'

const Nav = () => {
  return (
    <nav>
      <div className='container nav__container'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <a className='nav__link' href="/">
              <img className='nav__icon' src={Icon2} alt="" />My profile</a>
          </li>
          <li className='nav__item'>
            <img className='nav__logo' src={Logo} alt="" />
            <h1 className='nav__title'>E-Comm</h1>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href="/register">Register</a>
            <a className='nav__link ' href="/login">Login</a>
            <a className='nav__link' href="/card">
              <img src={Icon} alt="" />
            </a>
          </li>
        </ul>
      </div>

      <section className='hero'>
        <img src={Promotion} alt="" />
      </section>

      <section className='products'>
        <div className='container products__container'>
          <h2 className='products__title'>ALL PRODUCTS</h2>
        </div>
      </section>

      <section className='men'>
        <div className='container men__container'>
          <div className='men__content'>
            <h2 className='men__title'>Adidas Men Running
              Sneakers</h2>
            <p className='men__text'>Performance and design. Taken right to the edge.</p>
            <h3 className='men__sub-title'>SHOP NOW</h3>
            <span></span>
          </div>
          <img className='men__image' src="https://s3-alpha-sig.figma.com/img/af3b/d991/ca08635dbdf9c0400408400496803559?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aGM6EzJ6WFG2ZatODoWWv6f1NsFLvsilmgv~dIBAVivMM4w6JpfUVqXEl3XgvG3QMvnqIsM0C82geJ4yMatGTBkuylu0WhQvI87Xn~KCaqdZeYviuKGa-xznKM1XNdzMR-7FyaD0uZiOjE9f35XWRZpaAJNXrcd3TxluMw0y76VNS-5BmS8Kqbmo6~kr3OTuiI2SmFfqDfz83Ik3ZQ622Pg0ZYc1To1mQoLuZh5DkV7ofQrfqs~mNL-d7PJLztODYtIs0IP0cJn0-pZAZ~FYdBiuHfnSTQ7qh3Hm75WZaDNtGO5PavsjqPk2IO570zUCx1YkBuG0ClmevcllJxtPlQ__" alt="" />
        </div>
      </section>

      <section className='support'>
        <div className='container support__container'>
          <div className='support__content'>
            <div className='support__card'>
              <img className='support__image' src={Shipping} alt="" />
              <h2 className='support__title'>FREE SHIPPING</h2>
              <p className='support__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className='support__card'>
              <img className='support__image' src={Refund} alt="" />
              <h2 className='support__title'>100% REFUND</h2>
              <p className='support__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className='support__card'>
              <img className='support__image' src={Support} alt="" />
              <h2 className='support__title'>SUPPORT 24/7</h2>
              <p className='support__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='most'>
        <div className='container most__container'>
          <h2 className='most__title'>MOST TOP RATED PRODUCTS</h2>
          <div className='most__content'>
            <div className='most__card'>
              <img className='most__image' src="https://s3-alpha-sig.figma.com/img/bb31/833d/a9239a65fd298cd776f516434570a968?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SlDeqWlc~JVWsicXbXTNsj36VDeXp3rkPQdPXuhASN7grh6s5Hfg-yaEt5JieMR9Bi3U2e5wXXpz4RvS-7RXWXI36LWnfBae3fNKdVcjsF3lk3-JYFGCabRY03Rsl40MdcEwDXheWRHkyhVqEYrKVqndSCmBrMMDGsQQg9Cka~pu5TgdR09dZDaG9pkywJvKTaGg-gUlHv7Ow2DW7pWFCxc5SmAO0AQseif6vQtRDAaYMaCaznlgLrIZ1CViy6qTW-KGEK-IKKgoE07teiy6wdcqzHnwSplTVkmxm4zalmgJMdn~5Ny9SG08rDBZvSdvH2cAIPDrGZTjzjA98qEPKQ__" alt="" />
              <div className='most__box'>
                <h3 className='most__sub-title'>Blue Swade Nike Sneakers</h3>
                <img className='most__img' src={Rate} alt="" />
                <div className='most__number'>
                  <p className='most__dollar'>$499</p>
                  <p className='most__dollars'>$599</p>
                </div>
              </div>
            </div>
            <div className='most__card'>
              <img className='most__image' src="https://s3-alpha-sig.figma.com/img/bb31/833d/a9239a65fd298cd776f516434570a968?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SlDeqWlc~JVWsicXbXTNsj36VDeXp3rkPQdPXuhASN7grh6s5Hfg-yaEt5JieMR9Bi3U2e5wXXpz4RvS-7RXWXI36LWnfBae3fNKdVcjsF3lk3-JYFGCabRY03Rsl40MdcEwDXheWRHkyhVqEYrKVqndSCmBrMMDGsQQg9Cka~pu5TgdR09dZDaG9pkywJvKTaGg-gUlHv7Ow2DW7pWFCxc5SmAO0AQseif6vQtRDAaYMaCaznlgLrIZ1CViy6qTW-KGEK-IKKgoE07teiy6wdcqzHnwSplTVkmxm4zalmgJMdn~5Ny9SG08rDBZvSdvH2cAIPDrGZTjzjA98qEPKQ__" alt="" />
              <div className='most__box'>
                <h3 className='most__sub-title'>Blue Swade Nike Sneakers</h3>
                <img className='most__img' src={Rate} alt="" />
                <div className='most__number'>
                  <p className='most__dollar'>$499</p>
                  <p className='most__dollars'>$599</p>
                </div>
              </div>
            </div>
            <div className='most__card'>
              <img className='most__image' src="https://s3-alpha-sig.figma.com/img/bb31/833d/a9239a65fd298cd776f516434570a968?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SlDeqWlc~JVWsicXbXTNsj36VDeXp3rkPQdPXuhASN7grh6s5Hfg-yaEt5JieMR9Bi3U2e5wXXpz4RvS-7RXWXI36LWnfBae3fNKdVcjsF3lk3-JYFGCabRY03Rsl40MdcEwDXheWRHkyhVqEYrKVqndSCmBrMMDGsQQg9Cka~pu5TgdR09dZDaG9pkywJvKTaGg-gUlHv7Ow2DW7pWFCxc5SmAO0AQseif6vQtRDAaYMaCaznlgLrIZ1CViy6qTW-KGEK-IKKgoE07teiy6wdcqzHnwSplTVkmxm4zalmgJMdn~5Ny9SG08rDBZvSdvH2cAIPDrGZTjzjA98qEPKQ__" alt="" />
              <div className='most__box'>
                <h3 className='most__sub-title'>Blue Swade Nike Sneakers</h3>
                <img className='most__img' src={Rate} alt="" />
                <div className='most__number'>
                  <p className='most__dollar'>$499</p>
                  <p className='most__dollars'>$599</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className='footer'>
        <div className='container footer__container'>
          <ul className='footer__list'>
            <li className='footer__item'>
              <div className='footer__box'>
                <img className='footer__logo' src={Logo} alt="" />
                <a className='footer__link' href="#">E-Comm</a>
              </div>
              <p className='footer__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
            </li>
            <li className='footer__item'>
              <a className='footer__link' href="#">Follow Us</a>
              <p className='footer__text'>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
              <i className='footer__box'>
                <img className='footer__image' src={Facebook} alt="" />
                <img className='footer__image' src={Twitter} alt="" />
              </i>
            </li>
            <li className='footer__item'>
              <a className='footer__link' href="#">Contact Us</a>
              <p className='footer__text'>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
            </li>
          </ul>
          <div className='footer__content'>
            <h2 className='footer__title'>© 2018 Ecommerce theme by www.bisenbaev.com</h2>
            <i className='footer__boxs'>
              <img className='footer__img' src={Western} alt="" />
              <img className='footer__img' src={Mastercard} alt="" />
              <img className='footer__img' src={Paypal} alt="" />
              <img className='footer__img' src={Visa} alt="" />
            </i>
          </div>
        </div>
      </footer>
    </nav>
  )
}

export default Nav
