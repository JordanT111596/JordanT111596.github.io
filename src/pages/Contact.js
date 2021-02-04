import React, { useEffect, useState } from "react";

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    return (
        // Grid Container
        <div className="container w-auto full-page pb-5">
            <div className="row w-auto">
                <div className="col-md-1">
                    {/* Empty Space */}
                </div>
                <div className="col-md-8 mt-5 card">
                    <div className="card-body">
                        {/* "Contact" titled */}
                        <h1 className="text-primary">
                            Contact
                        </h1>
                        <form>
                            {/* A box to enter a name */}
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Name</label>
                                <input className="form-control" id="name" value={name} onChange={e => setName(e.target.value)}
                                    placeholder="Name"></input>
                            </div>
                            {/* A box to enter an email address */}
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="Email@address.com" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            {/* A box to enter a message */}
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" id="message" rows="3" value={message} onChange={e => setMessage(e.target.value)}
                                    placeholder="Message"></textarea>
                            </div>
                            {/* A button to submit the information */}
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-3">
                    {/* Blank Space */}
                </div>
            </div>
        </div>
    );
}

export default Contact;
