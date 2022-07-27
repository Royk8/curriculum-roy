import { React } from 'react';
import { Link } from 'react-router-dom';

const IndexPage = () => (
  <main>
    <div>
      <h1 className='text-red-500'>Hola Mundo</h1>
      <Link to='/pagina2'>Ir a la página 2</Link>
    </div>
  </main>
);

export { IndexPage };
