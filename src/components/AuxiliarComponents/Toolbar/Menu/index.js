import React from 'react';
import './styles.css';

const Menu = (props) => {
    return(
        <div className="Menu">
            {
                props.mode==="Projetos" ?
                    <p 
                        className="Command"
                        onClick={props.replace}
                    >
                        Adicionar Projetos
                    </p>

                : 
                    null
            }

            <p 
                className="Command"
                onClick={props.myProjects}
            >
                Meus Projetos
            </p>
        </div>
    );
}

export default Menu;