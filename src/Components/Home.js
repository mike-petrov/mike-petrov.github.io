import React from 'react';


class Home extends React.Component {
    render() {
        return (
            <div className='card'>
                <div className='card_header'>
                    <img src="/img/cover.png" alt="" />
                </div>
                <div className='card_content'>
                    <div className='social'>
                        <ul>
                            <li>
                                <a className="social-link" href="https://vk.com/mike_petrov">
                                    <i className="fab fa-vk" />
                                </a>
                            </li>
                            <li>
                                <a className="social-link" href="https://t.me/mike_petrov">
                                    <i className="fab fa-telegram-plane" />
                                </a>
                            </li>
                            <li>
                                <a className="social-link" href="mailto:mis5116@yandex.ru">
                                    <i className="fas fa-envelope" />
                                </a>
                            </li>
                            <li>
                                <a className="social-link" href="https://github.com/mike-petrov">
                                    <i className="fab fa-github" />
                                </a>
                            </li>
                            <li>
                                <a className="social-link" href="https://www.linkedin.com/in/mike-petrov">
                                    <i className="fab fa-linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
