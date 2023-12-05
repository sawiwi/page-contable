import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HeadPage = ({children}) => {
    return(
        <HelmetProvider>
            <Helmet>
                {children}
                <meta name="description" content="Página contable" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="contador, contabilidad, outsourcing, contable, empresa, crecimiento, clientes" />
                <link rel="icon" href="/favicon.ico" />
        
            </Helmet>
        </HelmetProvider>
    )
}

export default HeadPage