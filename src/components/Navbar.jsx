import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className="bg-neutral-950 text-white font-mono">
            <div className="">
                <div className="flex md:justify-between items-center p-2 ">
                    {/* Logo / Title */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-xl font-bold">
                            {props.title}
                        </Link>
                    </div>

                   
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
};
