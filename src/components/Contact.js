import React from "react";

export default function Contact(props) {
    return (
        <div className="widgets">
            <div className = "contact-box" style={{width: '100%', height: props.pageView === 'mob' ? '1000px' : '550px'}}>
                <div className="contact-box-heading" style = {props.pageView === 'mob' ? {marginLeft: 'auto', marginRight: 'auto', fontSize: '25px'} : {}}>
                    <h1> Fill the form, <><br></br><br></br></> It's easy. </h1>
                    {/* {props.pageView === 'web' && <><br></br><br></br></>} */}
                </div>
                <div className="contact-box-inner" style={{flexDirection: props.pageView === 'mob' ? 'column' : 'row'}}>
                    <div className="contact-box-user-details" style={{width: props.pageView === 'mob' ? '80%' : '50%'}}>
                        <form style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="input-field"
                                    style={{width: '45%'}}
                                    //onChange={refreshFirstName}
                                />
                                
                                <input
                                    type = "text"
                                    placeholder = "Last Name"
                                    className="input-field"
                                    style={{width: '45%'}}
                                    //onChange = {refreshLastName}
                                />
                            </div>

                            <input
                                    type="text"
                                    placeholder="Email"
                                    className="input-field"
                                    style={{}}
                                    //onChange={refreshFirstName}
                                />

                            <p style={{fontSize: '15px', lineHeight: '20px', fontWeight: '150', margin: '2%', marginTop: '5%'}}>
                                Please leave a message regarding your requirements. <br></br>
                                How can we help you?
                            </p>

                            <input
                                    type="text"
                                    placeholder="Feedback"
                                    className="input-field"
                                    style={{}}
                                    //onChange={refreshFirstName}
                                />
                            
                            <button className="submit-button"> Submit </button>
                        </form>
                    </div>

                    <div className="contact-box-description" style={{width: '45%'}} >
                        <h1 style={{fontSize: '30px', lineHeight: '35px', margin: '2%', marginTop: '5%'}}>
                            Need  <br></br>
                            Security? 
                        </h1>
                        <p style={{fontSize: '16px', lineHeight: '20px', fontWeight: '100', margin: '2%'}}>
                            At hackAR cove, we focus more on manual testing rather than automated testing. Ensuring that all the vulnerabilities are assessed.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}