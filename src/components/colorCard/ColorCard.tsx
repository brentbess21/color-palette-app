import React, {useState} from 'react';
import './ColorCard.scss';
import classNames from "classnames";

interface ColorCardProps {
    color: Model.Color;
}

const timeDelay = 1200

const ColorCard : React.FC<ColorCardProps> = (props: ColorCardProps) => {
    const [copied, setCopied] = useState<boolean>(false);

    async function handleClick() : Promise<void> {
       await navigator.clipboard.writeText(props.color.color);
       setCopied(true);
       setTimeout(()=>{
           setCopied(false)
       }, timeDelay)
    }
    return (
        <div className={'colorCard'} style={{backgroundColor: props.color.color, border: `4px solid ${props.color.color}`}}>
            <div style={{backgroundColor: props.color.color}} className={classNames({
                    copyOverlay: true,
                    active: copied
                })}
            />
            <div className={classNames({
                copyMessage: true,
                active: copied
            })}>
                <h1>Copied</h1>
                <p>{props.color.color}</p>
            </div>
            <div className={'copyContainer'}>
                <div className={'cardContent'}>
                    <span>{props.color.name}</span>
                </div>
                <button onClick={handleClick} className={'copyButton'}>Copy</button>
            </div>
            <span className={'moreInfo'}>More</span>
        </div>
    )
}

export default ColorCard;