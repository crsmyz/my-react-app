import React from 'react';

const NewComp = ({props}) => {
    return <div>
        <header>
            <h4>New Comp</h4>
        </header>
        <section>
            <p>This is the data!</p>
            {JSON.stringify(props.data)}
        </section>
    </div>
}

export default NewComp;