import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div className='about table'>
                <div className='table-cell'>
                    <div className='content color0'>
                        <div className='title'>
                            Mike Petrov
                        </div>
                        <img src="https://avatars0.githubusercontent.com/u/32885629"/>
                        <div className='status'>
                            Reactman
                        </div>
                        <div className='social'>
                            <ul>
                                <li><a className="social-link" href="https://vk.com/mike_petrov">VK</a></li>
                                <li><a className="social-link" href="https://t.me/mike_petrov">Telegramm</a></li>
                                <li><a className="social-link" href="mailto:mis5116@yandex.ru">Email</a></li>
                                <li><a className="social-link" href="https://github.com/mike-petrov">GitHub</a></li>
                            </ul>
                        </div>
                        <div className='hackathons'>
                            <ul>
                                <li><a className="social-link" href="/cv">CV</a></li>
                                <li><a className="social-link" href="https://github.com/mike-petrov/Hackathons">Hackathons</a></li>
                                <li><a className="social-link" href="/portfolio">Portfolio</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
