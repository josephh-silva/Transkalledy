import { useState } from 'react'
import './index.css'
import Logo from '../../assets/logo-nav.jpg'
import Arrow from '../../assets/arrow-f.svg'
import Map from '../../assets/map.svg'
import Phne from '../../assets/phone-f.svg'
import Email from '../../assets/email.svg'

import { Link } from 'react-router-dom'
import Formm from '../Form'


function Footer() {
    return (


        <section className="container-fluid container-f">
            <div className="one-f">
                <div className="img-logo">
                    <img src={Logo} alt="img" />
                </div>
                <p className='text-one'>O melhor do transporte para você</p>
            </div> 
            <div className='linkss '>
                <span>Links Rapidos </span>
                <div className="links-a">
                    <div className="set">
                        <img src={Arrow} alt="" />
                        <a href="#span-one" className="link">Sobre nós</a>
                    </div>
                    <div>
                        <img src={Arrow} alt="" />
                        <a href="#frot" className="link">Frota</a>
                    </div>
                    <div>
                        <img src={Arrow} alt="" />
                        <a href="#solutions" className="link">Soluções</a>
                    </div>
                </div>
            </div>
            <div className="contacts">
                <div className="infos">
                    <div className='box'>
                        <img src={Map} alt=""  className='icon'/>
                        <span className='texxt'>
                            Passagem Amazonas, <br />
                            Conj. Júlia Seffer/ Ananindeua, <br />
                            Número 55
                        </span>
                    </div>
                    <div className="phone">
                        <img src={Phne} alt="" className='icon' />
                        <span className='texxt'>(91) 98108-4728</span>
                    </div>
                    <div className="email">
                        <img src={Email} alt="" className='icon' />
                        <a className='texxt' href="/form" target="_blank" rel="noopener noreferrer">
                        Mande a sua dúvida aqui
                    </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer