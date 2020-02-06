import React from 'react';
import './styles.css';

const toolbar = (props) => {
    const {
        showMenu,
        logout
    } = props;

    return(
        <header className="Header">
            <div className="SiteName">
                {
                    props.mode !==undefined ? 
                        <p 
                            className="Command"
                            onClick={showMenu}
                        >
                            . . .
                        </p> 
                    : null
                }
                <p>Project Manager</p>
                {
                    props.mode !==undefined ? 
                        <p 
                            onClick={logout}
                            className="Command" 
                        >
                            Logout
                        </p> 
                    : null
                }
            </div>
        </header>
    );
}

export default toolbar;