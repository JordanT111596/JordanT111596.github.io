import React, { useState } from "react";

function Contact() {

    //Using hooks for all things submitted to the form
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleFormSubmit(e) {

        //prevents the page from refresh
        e.preventDefault();

        //Creates a link that takes the form info from the state and prefills out an email message, waiting to be sent to me!
        var link = "mailto:JordanT111596@gmail.com"
            + "?subject=" + encodeURIComponent(subject)
            + "&body=" + encodeURIComponent(message + "\n\nPlease contact me back via email at " + email + "\n\nThis message was sent from " + name + " using the React portfolio contact page!");
        window.location.href = link;

        console.log(link);
    }


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
                        <form onSubmit={handleFormSubmit}>
                            {/* A box to enter a name */}
                            <div className="form-group">
                                <label htmlFor="Name">Name</label>
                                <input className="form-control" id="name" value={name} onChange={e => setName(e.target.value)}
                                    placeholder="Name"></input>
                            </div>
                            {/* A box to enter a subject */}
                            <div className="form-group">
                                <label htmlFor="Subject">Subject</label>
                                <input className="form-control" id="Subject" value={subject} onChange={e => setSubject(e.target.value)}
                                    placeholder="Subject"></input>
                            </div>
                            {/* A box to enter an email address */}
                            <div className="form-group">
                                <label htmlFor="Email">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="Email@address.com" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            {/* A box to enter a message */}
                            <div className="form-group">
                                <label htmlFor="Message">Message</label>
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
