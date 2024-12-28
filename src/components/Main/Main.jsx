import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import img1 from '../../img/1.png';
import img2 from '../../img/2.png';
import img3 from '../../img/3.png';

import './Main.scss';

const Main = () => {

    const imagens = [
        {
            id: 1,
            img: `${img1}`,
            title: 'Ferrari',
            p: 'Único dono',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi et beatae accusantium molestiae eligendi ducimus dolores id ipsum velit aliquam, similique'
        },
        {
            id: 2,
            img: `${img2}`,
            title: 'BMW',
            p: 'Único dono',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi et beatae accusantium molestiae eligendi ducimus dolores id ipsum velit aliquam, similique'
        },
        {   
            id: 3,
            img: `${img3}`,
            title: 'Cruze LTZ',
            p: 'Único dono',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi et beatae accusantium molestiae eligendi ducimus dolores id ipsum velit aliquam, similique'
        }
    ];
    

    const [carro, setCarro] = useState(0);

    function prevCarro() {
        setCarro((carro - 1 + imagens.length) % imagens.length);
    }

    function nextCarro() {
        setCarro((carro + 1) % imagens.length);
    }

    return (
        <div className='container'>
            <div className="semi-container">
                <div className="carro-img">
                    <img src={imagens[carro].img} />
                </div>

                <div className="content ativo">
                    <p>{imagens[carro].p}</p>
                    <h1>{imagens[carro].title}</h1>
                    <p>{imagens[carro].descricao}</p>
                    <button>comprar</button>
                </div>
            </div>

            <div className="btn">
                <button className="lef" onClick={prevCarro}><FaArrowLeft  /></button>
                <button className="direita" onClick={nextCarro} ><FaArrowRight /></button>
            </div>

        </div>
    )
}

export default Main
