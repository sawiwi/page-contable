import { Fragment } from 'react';
import Layout from './Layout/Layout';
import Hero from './Pages/Hero/index';
import About from './Pages/About/index';
import Services from './Pages/Services/index';
import OurClients from './Pages/OurClients/index';

function App() {
  return (
    <Fragment>
      <div class="absolute h-full bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
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
