import React from 'react'
import './Mandater.scss'
import Header from './../../Header/Header'

const data = [
    {
        logoPath: './pictures/logos/Venstre.png',
        parti: 'Venstre',
        mandater: 35,
    },
    {
        logoPath: './pictures/logos/Socialdemokratiet.png',
        parti: 'Socialdemokratiet',
        mandater: 33,
    },
    {
        logoPath: './pictures/logos/DetKonservativeFolkeparti.png',
        parti: 'Den Konservative Folkeparti',
        mandater: 16,
    },
    {
        logoPath: './pictures/logos/RadikaleVenstre.png',
        parti: 'Radikale Venstre',
        mandater: 15,
    },
    {
        logoPath: './pictures/logos/SF.png',
        parti: 'Socialistisk Folkeparti',
        mandater: 14,
    },
    {
        logoPath: './pictures/logos/enhedslisten.png',
        parti: 'Enhedslisten',
        mandater: 14,
    },
    {
        logoPath: './pictures/logos/Danmarksdemokraterne.png',
        parti: 'Danmarksdemokraterne',
        mandater: 9,
    },
    {
        logoPath: './pictures/logos/NyeBorgerlige.png',
        parti: 'Nye Borgerlige',
        mandater: 7,
    },
    {
        logoPath: './pictures/logos/Moderaterne.png',
        parti: 'Moderaterne',
        mandater: 7,
    },
    {
        logoPath: './pictures/logos/DF.png',
        parti: 'Dansk Folkeparti',
        mandater: 6,
    },
    {
        logoPath: './pictures/logos/Alternativet.png',
        parti: 'Alternativet',
        mandater: 6,
    },
    {
        logoPath: './pictures/logos/LiberalAlliance.png',
        parti: 'Liberal Alliance',
        mandater: 5,
    },
    {
        logoPath: './pictures/logos/Frie Grønne.png',
        parti: 'Frie Grønne',
        mandater: 5,
    },
    {
        logoPath: './pictures/logos/grønland.png',
        parti: 'Grønlandske mandater',
        mandater: 4,
    },
    {
        logoPath: './pictures/logos/Færøske.jpeg',
        parti: 'Færøske mandater',
        mandater: 3,
    },
]

export default function Mandater() {
    return (
        <div className="Mandater">
            <Header />
            <div className="mainContent">
                <table>
                    <tr>
                        <th>Logo</th>
                        <th>Parti</th>
                        <th>Mandater</th>
                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>
                                    <img src={val.logoPath} alt="" width={50} />
                                </td>
                                <td>{val.parti}</td>
                                <td>{val.mandater}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}
