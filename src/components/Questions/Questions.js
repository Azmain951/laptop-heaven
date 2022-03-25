import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='qna'>
            <h2 className='qna-header'>Questions & Answers</h2>
            <ul>
                <li>
                    <h3>Props vs State</h3>
                    <p>
                        Props is the short form of Properties. Props are used to send data from one component to another. Props data are immutable. It is read only and cannot be modified.
                    </p>
                    <p>
                        State can be changed. It is mutable. Multiple state can be declared in one component.
                    </p>
                </li>
                <li>
                    <h3>How useState works?</h3>
                    <p>useState is a React hook that returns a stateful value and a function to update it. We pass an initial value through the useState and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
                </li>
                <li>
                    <h3>How React works?</h3>
                    <p>
                        Instead of making changes directly on the actual dom, react create a copy of the actual dom known as virtual dom. If any state changes React creates another virtual dom, then it compares the new dom with the pervious virtual dom using the diff algorithms and identifies the changes. Then finally updates the changes on the actual dom.
                    </p>
                </li>
            </ul>

        </div>
    );
};

export default Questions;