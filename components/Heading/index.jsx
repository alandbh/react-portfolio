import React from 'react';

// import { Container } from './styles';

function Heading({as, children, className, id}) {

    if(as === 'h1') {
        return <h1 className={className} id={id}>{children}</h1>

    } else if (as === 'h2') {
        return <h2 className={className} id={id}>{children}</h2>

    } else if (as === 'h3') {
        return <h3 className={className} id={id}>{children}</h3>

    } else if (as === 'h4') {
        return <h4 className={className} id={id}>{children}</h4>

    }
}

export default Heading;