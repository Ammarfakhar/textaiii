import React from 'react'

export default function About() {
    let mystyle={
        color: 'white',
        backgroundColor: '#1d3e45',
                 
    }
   
    return (
        <div>
    
            <div className='container my-3 'style={mystyle} >
                <h3>About us</h3>
                <div class="accordion" id="accordionExample"style={mystyle}>
                    <div class="accordion-item"style={mystyle}>
                        <h2 class="accordion-header">
                            <button class="accordion-button"style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>What it Works</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>Welcome to Textin,<br/></strong>Whether you need to convert text to uppercase, lowercase,  Textin provides an easy and intuitive interface to get the job done quickly.It is an free of cost as the user has no need to puurchase any kind of source code.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item"style={mystyle}>
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" style={mystyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>What it do</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Uppercase of the text<br/>
                                Lowercase of the text<br/>
                                Copying of the text<br/>
                                Removing extra-spacing in a text<br/>
                                Deleting of the Text<br/>



                                
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item"style={mystyle}>
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Summary tasks</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                It tells the user about:<br/>
                                <ol>
                                    <li>How many words in the text.<br/></li>
                                    <li>How many characters in a text.<br/></li>
                                    <li>How much average time does a human requires for a text to read.<br/></li>

                                </ol>
                             </div>                              
                        </div>
                    </div>
                </div>
               

            </div>

        </div>
    );
}