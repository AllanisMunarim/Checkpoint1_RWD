import lampAcesa from '../img/lampada_acessa.jpg'
import lamApagada from '../img/lampada-apagada.jpg'

export default function Lampada() {
    return(
        <>
        <div className='divImagem'>
            <img src={lamApagada} alt="imagem" />
            <button className='botao' id='botaoLigar'>Ligar</button>
            
        </div>
        </>
    )
    
}