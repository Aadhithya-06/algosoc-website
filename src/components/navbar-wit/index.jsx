import React, {useEffect, useState} from 'react'
import './style.css'

function NavbarWiT() {

    const [selected, setSelected] = useState(0)
    const [width, setWidth] = useState(window.innerWidth)
    const [showNav, setShowNav] = useState(false)

    const options = [
        {
            id: 0,
            name: 'OUR VISION',
            href: '#about-us'
        },
        {
            id: 1,
            name: 'EVENTS',
            href: '#events'
        },
    ]

    function updateWidth() {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', updateWidth)
    })

    function getClassNames(currentId) {
        if (selected === currentId) {
            return 'navbar-option-selected navbar-option'
        }
        return 'navbar-option'
    }

    return (
        <div className={'navbar'}>
            <h4 className={'navbar-title'}>
                <img className={'wit-logo'} src={process.env.PUBLIC_URL + '/img/wit-logo-cropped.png'} alt={'Women in Trading'} />
            </h4>
            <div className={'navbar-options'}>
                { width >= 768 ?
                    options.map((e) =>
                        <a
                            key={e.id}
                            onClick={() => {
                                setSelected(e.id)
                                return false
                            }}
                            className={getClassNames(e.id)}
                            href={e.href}
                        >
                            {e.name}
                        </a>
                    ) : <img src={process.env.PUBLIC_URL + '/img/menu.svg'} alt={'menu'}
                             onClick={() => setShowNav(!showNav)}/>
                }
            </div>
            {width < 768 && showNav && <div className={'navbar-mobile'}>
                <div className={'navbar-close-icon'}>
                    <img src={process.env.PUBLIC_URL + '/img/cross.svg'} alt={'cross'}
                         onClick={() => setShowNav(!showNav)}/>
                </div>
                <div className={'navbar-mobile-options'}>
                    {
                        options.map((e) =>
                            <a
                                key={e.id}
                                onClick={() => {
                                    setSelected(e.id)
                                    return false
                                }}
                                className={getClassNames(e.id)}
                                href={e.href}
                            >
                                {e.name}
                            </a>
                        )
                    }
                </div>
            </div>}

        </div>
    );

}

export default NavbarWiT
