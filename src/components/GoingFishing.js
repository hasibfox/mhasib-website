import React from 'react'

const PhishingObby = () => {
    return (
        <div className="page-container">
            <div className="article-container">
                <h1>Spoofing Obby</h1>
                <h2> A dive into the mind of a cybercriminal</h2>
                <img className="header-pic" src="images/phishingobby/p1.png" alt="Robruhx"/>
                
                <section>
                    <h2>A brief overview of Phishing and Spoofing</h2>
                    <p>
                        As the world transitions to the online platform, dozens of digital opportunities open up, from education to shopping to banking. However, this also enables more cybercrimes to occur. Phishing refers to an email where cybercriminals try to extract important information by posing as a legitimate sender. These emails usually try to create a sense of urgency and contain multiple links. Spoofing involves cybercriminals creating fake websites to similarly guage personal details. Additionally, some websites may download dangerous malware. Both use deception, a form of social engineering, to carry out their crimes and can be extremely dangerous.
                    </p>
                    <p>
                        Some phishing emails and spoofing websites are very obvious, consisting of silly spelling and grammar errors. Others are almost identical to their legimate counter parts. Neither should be taken lightly as even the simplest display can manipulate those unfamiliar with such crimes, particularly elders and childen (the most vulnerable groups).
                    </p>
                    <div className="figure-pics"> 
                        <figure>
                            <img src="https://i.redd.it/tta709a1q1yz.png" alt="phishemail"/>
                            <figcaption>A classic phishing email</figcaption>
                        </figure>
                        
                        <figure>
                            <img src="https://blog.roblox.com/wp-content/uploads/2016/12/phishing.png"  alt="phishweb"/>
                            <figcaption>A classic spoofing site</figcaption>
                        </figure>
                    </div>
                </section>

                <section>
                    <h2> Simulating a Spoof: Robruhx (Roblox Imitation) </h2>
                    <h6 style={{
                        color:'red',
                        fontWeight: 'bolder',
                        textDecoration:'underline',
                        textAlign:'center',
                        paddingRight:'50px',
                        paddingLeft:'50px'

                    }}> Disclaimer: These webpages were made strictly for educational learning and awareness purposes. Always triple check that you are on the correct site when handling personal website!</h6>
                    <h4> I chose Roblox as my test imitation for a few reasons. The first being that the <a>67% of the community is under the age of 16</a>. I personally remember hopping from website to website in hopes that one would actually deliver their promise of free Robux. It never happened. The second being that I wanted to see what type of protocols Roblox had in place against such to protect its community from such threats. I figure that potential shortcoming against a game platform like Roblox would apply to dozens upon dozens of smaller, less protected ones. <br/><br/>This experiment did not go beyond the proof concept. Once I was able to simulate that basic user information could be captured given a user's responses, I found it likely that at that point, they wouldn't second guess something like a payment page.</h4>
                    <h4>I wanted to look at three big aspects when trying to simulate the spoof: </h4>
                    <ol style={{marginLeft:'4vw'}}>
                        <li>Design: How easy is it to replicate a website's design from scratch</li>
                        <li>Database: How easy is it to store a user's information</li>
                        <li>Deception: How easy is it convince others they're on the right site</li>
                    </ol>
                    <div>
                        <h2> Design </h2>
                        <p>
                            Producing a landing page and a login page took less than a few hours. With most components consisting of purely text and relatively common icons, the hardest part was simply trying to consider the functionality. For example, ensuring buttons have a hover effect or redirect to the right place. For an expert web designer, I believe that creating these replicas would be no trouble at all.
                        </p>
                        <div className="figure-pics"> 
                            <figure>
                                <img src="images/phishingobby/p1.png" alt="landing"/>
                                <figcaption>A mock landing page</figcaption>
                            </figure>
                            
                            <figure>
                                <img src="images/phishingobby/p2.png"  alt="login"/>
                                <figcaption>A mock login page</figcaption>
                            </figure>
                        </div>
                    </div>

                    <div>
                    <h2> Database </h2>
                        <p>
                            Producing a landing page and a login page took less than a few hours. With most components consisting of purely text and relatively common icons, the hardest part was simply trying to consider the functionality. For example, ensuring buttons have a hover effect or redirect to the right place. For an expert web designer, I believe that creating these replicas would be no trouble at all.
                        </p>
                        <div className="figure-pics"> 
                            <figure>
                                <img src="images/phishingobby/p1.png" alt="landing"/>
                                <figcaption>A mock landing page</figcaption>
                            </figure>
                            
                            <figure>
                                <img src="images/phishingobby/p2.png"  alt="login"/>
                                <figcaption>A mock login page</figcaption>
                            </figure>
                        </div>
                    </div>
                    
                    
                </section>
            </div>
        </div>
        
    )
}

export default PhishingObby
