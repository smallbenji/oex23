import React from 'react'
import './MainPage.scss'

export default function MainPage() {
    return (
        <div className="MainPage">
            <div className="Article" onClick={() => handleClick('./mandater')}>
                <div className="left">
                    <strong>BREAKING</strong>
                    <h1>Mandater nu udgivet</h1>
                </div>
            </div>
            <div
                className="Article blueA"
                onClick={() => handleClick('./gudekompleks')}
            >
                <div className="left">
                    <h1>
                        Har formand for <br /> Alternativet et <br />{' '}
                        Gudekompleks?
                    </h1>
                </div>
                <div className="right">
                    <img src="./pictures/August.jpg" alt="AUGUST" />
                </div>
            </div>
            <div className="Article" onClick={() => handleClick('./hemmeligt')}>
                <div className="left">
                    <strong>GIGA BREAKING:</strong>
                    <h1>
                        RADIKALE TIL <br />
                        HEMMELIGT MØDE?!
                    </h1>
                </div>
            </div>
            <div
                className="Article"
                onClick={() => handleClick('./lydoptagelse')}
            >
                <div className="left">
                    <strong>BREAKING:</strong>
                    <h1>
                        LYDOPTAGELSE AF <br /> PARTIFORMAND <br /> ÆNDRER ALT!
                    </h1>
                </div>
                <div className="right">
                    <img src="./pictures/Gorm.jpeg" alt="GORM" />
                </div>
            </div>
            <div className="Article" onClick={() => handleClick('./overhaand')}>
                <div className="left">
                    <strong>BREAKING:</strong>
                    <h1>
                        SMÅ PARTIER <br />
                        STÅR MED
                        <br /> OVERHÅNDEN?
                    </h1>
                </div>
            </div>
            <div className="Article" onClick={() => handleClick('./poolitik')}>
                <div className="left">
                    <strong>BREAKING:</strong>
                    <h1>Poolitik??</h1>
                </div>
                <div className="right">
                    <img src="./pictures/Oliver.jpg" alt="OLIVER" />
                </div>
            </div>
            <div
                className="Article blueA"
                onClick={() => handleClick('./soevn')}
            >
                <div className="left">
                    <h1>
                        Keder de <br />
                        andre partier
                        <br /> Enhedslisten?
                    </h1>
                </div>
                <div className="right">
                    <img src="./pictures/Willow.jpg" alt="WILLOW" />
                </div>
            </div>
            <div
                className="Article"
                onClick={() => handleClick('./Kvindehaderne')}
            >
                <div className="left">
                    <strong>BREAKING:</strong>
                    <h1>
                        Hader Det <br /> Konservative <br /> Folkeparti <br />{' '}
                        kvinder?
                    </h1>
                </div>
                <div className="right">
                    <img src="./pictures/Magne.jpg" alt="MAGNE" />
                </div>
            </div>
            <div
                className="Article"
                onClick={() => handleClick('./BlueScandal')}
            >
                <div className="left">
                    <h1>
                        Skandale på <h1 className="blue">blå</h1> blok
                    </h1>
                </div>
                <div className="right">
                    <img src="./pictures/Kasper.jpg" alt="KASPER" />
                </div>
            </div>
            <div
                className="Article blueA"
                onClick={() => handleClick('./Paedo')}
            >
                <div className="left">
                    <h1>
                        Står Danmarks <br /> demokraterne <br /> inde for
                        Pædofili?
                    </h1>
                </div>
                <div className="right">
                    <img src="./pictures/Mika.jpg" alt="MIKA" />
                </div>
            </div>
        </div>
    )
}

function handleClick(url) {
    window.location.href = url
}
