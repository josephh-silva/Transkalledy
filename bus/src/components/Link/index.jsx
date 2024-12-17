import Link from "../../assets/starlink.jpg"
import './index.css'
function Linkk(){
    return(
        <>
        <section className="container-fluid container-link">
            <img src={Link} alt="links" className="imgg" />
            <p>Nossa frota conta com o que há de mais moderno em tecnologia. <br />
               <span className="span-one"> A internet Starlink</span> funciona via satélite e proporciona  <br /> conexão em qualquer lugar do mundo. <br />
            <span className="span-2">Escolha ser conectado, escolha Transkalledy!</span> </p>
        </section>
        </>
    )
}
export default Linkk