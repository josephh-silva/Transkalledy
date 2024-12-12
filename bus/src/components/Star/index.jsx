import Starlink from '../../assets/StarLink_Logo.svg'
import './index.css'

function Star() {
    return (
        <section className="container-fluid container-s">
            <img src={Starlink} alt="starlink" />
            <div>
                <p>Com a internet da Starlink na nossa frota de ônibus, oferecemos uma experiência de viagem inovadora e conectada para nossos passageiros! <br />
                    A conexão rápida e confiável garante que todos, sejam eles passageiros em trânsito ou equipe de operação, estejam sempre online, até nas regiões mais remotas. <br />
                    A tecnologia de satélites de órbita baixa elimina a necessidade de infraestrutura terrestre complexa, o que resulta em menor custo de manutenção e instalação. <br />
                    Além disso, podemos monitorar nossa frota em tempo real, garantindo maior segurança e eficiência operacional. <br />
                    Com a Starlink, nossa frota se torna mais moderna, ágil e conectada, trazendo mais conforto e inovação para quem viaja conosco!
                </p>

            </div>
        </section>
    )
} 
export default Star