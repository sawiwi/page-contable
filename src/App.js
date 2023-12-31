import { Fragment } from 'react';
import Layout from './Layout/Layout';
import Hero from './Pages/Hero/index';
import About from './Pages/About/index';
import Services from './Pages/Services/index';
import OurClients from './Pages/OurClients/index';

function App() {
  return (
    <Fragment>
      <Layout>
        <Hero/>
        <About/>
        <Services/>
        <OurClients/>
      </Layout>
    </Fragment>
  );
}

export default App;
