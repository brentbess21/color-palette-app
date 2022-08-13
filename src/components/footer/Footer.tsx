import React from 'react';
import './Footer.scss';

interface FooterProps {
    paletteName: string;
    emoji: string;
}

const Footer : React.FC<FooterProps> = (props: FooterProps) : React.ReactElement => {
    return (
        <footer className={'paletteFooter'}>
            <p>{props.paletteName}</p>
            <p>{props.emoji}</p>
        </footer>
    )
}

export default Footer;