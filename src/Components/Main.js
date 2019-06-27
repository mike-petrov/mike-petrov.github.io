import React from 'react';
import { Link } from 'react-router-dom'


class Main extends React.Component {
    render() {
        return (
            <div className='about table'>
                <div className='table-cell'>
                    <div className='content color0'>
                        <div className='title'>
                            Mike Petrov
                        </div>
                        <img src="/img/mike.png"/>
                        <div className='status'>
                            Reactman
                        </div>
                        <div className='social'>
                            <ul>
                                <li><a className="social-link" href="https://vk.com/mike_petrov"><i class="fab fa-vk"></i></a></li>
                                <li><a className="social-link" href="https://t.me/mike_petrov"><i class="fab fa-telegram-plane"></i></a></li>
                                <li><a className="social-link" href="mailto:mis5116@yandex.ru"><i class="fas fa-envelope"></i></a></li>
                                <li><a className="social-link" href="https://github.com/mike-petrov"><i class="fab fa-github"></i></a></li>
                            </ul>
                        </div>
                        <div className='hackathons'>
                            <ul>
                                <li><Link to="/cv" className="social-link">CV</Link></li>
                                <li><Link to="/portfolio" className="social-link">Portfolio</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
