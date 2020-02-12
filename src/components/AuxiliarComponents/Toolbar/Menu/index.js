import React from 'react';
import './styles.css';

const Menu = (props) => {
    return(
        <div className="Menu">
            {
                <p 
                    className="Command"
                    onClick={props.replace}
                >
                    Adicionar {props.mode}
                </p>
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