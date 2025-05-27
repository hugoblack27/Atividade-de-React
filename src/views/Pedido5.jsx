import Paotopo from '../componentes/PaoTopo'
import Alface from '../componentes/Aface'
import Tomate from '../componentes/Tomate'
import Hamburguer from '../componentes/Hamburguer'
import Queijo from '../componentes/Queijo'
import PaoBaixo from '../componentes/PaoBaixo'
import Cebola from '../componentes/Cebola'


const Pedido5 = () =>
    <div>
        <div className='pedidos'>
        <h2>Pedido 5</h2>
        <p>Veggie Burguer</p>
        </div>
        <Paotopo/>
        <Queijo/>
        <Cebola/>
        <Tomate/>
        <Alface/>
        <PaoBaixo/>
    </div>
export default Pedido5;