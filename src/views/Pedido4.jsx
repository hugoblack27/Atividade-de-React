import Paotopo from '../componentes/PaoTopo'
import Alface from '../componentes/Aface'
import Tomate from '../componentes/Tomate'
import Hamburguer from '../componentes/Hamburguer'
import Queijo from '../componentes/Queijo'
import PaoBaixo from '../componentes/PaoBaixo'
import Cebola from '../componentes/Cebola'
import Bacon from '../componentes/Bacon'

const Pedido4 = () =>
    <div>
        <div className="pedidos">
        <h2>Pedido 4</h2>
        <p>X-Bacon Duplo</p>
        </div>
        <Paotopo/>
        <Queijo/>
        <Hamburguer/>
        <Bacon/>
        <Queijo/>
        <Hamburguer/>
        <PaoBaixo/>
    </div>
export default Pedido4