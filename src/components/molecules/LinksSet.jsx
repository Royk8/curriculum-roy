import React from 'react';
import { NetworkLink } from 'components/atoms/NetworkLink';

const LinksSet = () => {
  /**
   * Create a set of 4 icons with links to github, linkedin, email and itchio
   */
  const icons = [
    {
      site: 'email',
      link: 'mailto:roy.maestre@udea.edu.co',
    },
    {
      site: 'github',
      link: 'https://github.com/Royk8',
    },
    {
      site: 'linkedin',
      link: 'https://www.linkedin.com/in/roy-k-maestre-ruda-5557b2126/',
    },
    {
      site: 'itchio',
      link: 'https://royk.itch.io',
    },
  ];

  const networkLinks = icons.map((icon, index) => {
    return <NetworkLink key={index} site={icon.site} link={icon.link} />;
  });

  return <div className='flex flex-wrap justify-center space-x-5'>{networkLinks}</div>;
};

export { LinksSet };
