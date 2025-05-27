import Paotopo from '../componentes/PaoTopo'
import Alface from '../componentes/Aface'
import Tomate from '../componentes/Tomate'
import Hamburguer from '../componentes/Hamburguer'
import Queijo from '../componentes/Queijo'
import PaoBaixo from '../componentes/PaoBaixo'
import Cebola from '../componentes/Cebola'

const Pedido3 = () => 
<div>
<div className="pedidos">
<h2>Pedido 3</h2>
<p>X-Burguer Duplo</p>
</div>
<Paotopo/>    
<Queijo/>
<Hamburguer/>
<Hamburguer/>
<PaoBaixo/>
</div>
export default Pedido3;