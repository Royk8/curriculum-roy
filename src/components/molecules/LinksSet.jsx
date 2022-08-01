import React from 'react';
import { NetworkLink } from 'components/atoms/NetworkLink';

const LinksSet = () => {
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

  const networkLinks = icons.map((icon) => (
    <NetworkLink key={icon.site} site={icon.site} link={icon.link} />
  ));

  return (
    <div className='flex flex-wrap justify-center space-x-5'>
      {networkLinks}
    </div>
  );
};

export { LinksSet };
