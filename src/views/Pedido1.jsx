import Paotopo from '../componentes/PaoTopo'
import Hamburguer from '../componentes/Hamburguer'
import Queijo from '../componentes/Queijo'
import PaoBaixo from '../componentes/PaoBaixo'

const Pedido1 = () =>
    <div>
      <div className="pedidos">
      <h2>Pedido 1</h2>
      <p>X-burguer Tradicional</p>
      </div>
      <Paotopo/>
      <Queijo/>
      <Hamburguer/>
      <PaoBaixo/>
    </div>
export default Pedido1;