import React from 'react';

const Card = (props) => {

    return (
        <div className="artboard">
            <div className="card">

                <div className="card__side card__side--back">
                    <div className="card__cover">
                        <h4 className="card__heading">
                            <span className="card__heading-span">{props.backHeader}</span>
                        </h4>
                    </div>
                    <div className="card__details">
                        {props.details}
                    </div>
                </div>

                <div className="card__side card__side--front">
                    <div className="card__theme">
                        <div className="card__theme-box">
                            <p className="card__subject">{props.subHeader}</p>
                            <p className="card__title">{props.header}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card;