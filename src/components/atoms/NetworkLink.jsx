import React from 'react';

const NetworkLink = ({site, link}) => {
    const iconInfo = () => {
        const folder = "assets/icons/";
        switch (site) {
            case 'email':
                return folder + "email.svg";
            case 'github':
                return folder + "github.svg";
            case 'linkedin':
                return folder + "linkedin.svg";
            case 'itchio':
                return folder + "itchio.svg";
        }
    }

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={iconInfo()} alt={site} />
        </a>
    )
}

export {NetworkLink};