import React from 'react';
import { Link } from 'react-router-dom';

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
                    <h4> I chose Roblox as my test imitation for a few reasons. The first being that the <Link to="https://backlinko.com/roblox-users" target="_blank" rel="noopener noreferrer">67% of the community is under the age of 16</Link>. I personally remember hopping from website to website in hopes that one would actually deliver their promise of free Robux. It never happened. The second being that I wanted to see what type of protocols Roblox had in place against such to protect its community from such threats. I figure that potential shortcoming against a game platform like Roblox would apply to dozens upon dozens of smaller, less protected ones. <br/><br/>This experiment did not go beyond the proof concept. Once I was able to simulate that basic user information could be captured given a user's responses, I found it likely that at that point, they wouldn't second guess something like a payment page.</h4>
                    <h4>I wanted to look at three big aspects when trying to simulate the spoof: </h4>
                    <ol style={{marginLeft:'4vw'}}>
                        <li>Design: How easy is it to replicate a website's design from scratch</li>
                        <li>Database: How easy is it to store a user's information</li>
                        <li>Deception: How easy is it convince others they're on the right site</li>
                    </ol>
                    <div>
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
                                The idea behind a database is to firstly store critical information, including a username, password, email. In an actual scam, these all amount to the payment methods and details. Here, however, my objective was to see what type of information I could get given simply a username. Using webscraping methods, it was easy to find a user's ingame id and use this to extrapolate contents out of their profile.  
                            </p>
                            <div className="figure-pics" > 

                                <figure>
                                    <img src="images/phishingobby/p6.png"  alt="jsondata"/>
                                    <figcaption>Some information scraped given a username</figcaption>
                                </figure>

                                <figure>
                                    <img src="images/phishingobby/p5.png" alt="changeduser"/>
                                    <figcaption>Response of successful database addition. </figcaption>
                                </figure>
                                
                                <figure>
                                    <img style={{height:'40vh'}} src="https://tr.rbxcdn.com/4c65975a66433d442946ab1efd019331/352/352/Avatar/Png"  alt="jsondata"/>
                                    <figcaption>My avatar photo extracted through a simple web scrape</figcaption>
                                </figure>
                            </div>
                        </div>
                        <div>
                            <h2> Deception </h2>
                                <p>
                                    Using webscraping methods, it was easy to find a user's ingame id and use this to extrapolate contents out of their profile. While this may be just some images and seemingly irrelavent numbers (friend count, follow count, etc), being able to then reproduce a replica profile page given these items has the potential to completely convince a user they are on a legitimate page. Social engineering is everything. 
                                </p>
                                <div className="figure-pics" style={{flexDirection:'column'}}> 
                                    <figure>
                                        <img src="images/phishingobby/p3.png" alt="changeduser" className="searchpic"/>
                                        <figcaption>Adapting even the navigation bar with the user's screen name and avatar icon can give the impression that they are on a legitimate page</figcaption>
                                    </figure>
                                    
                                    {/* <figure>
                                        <img src="images/phishingobby/p5.png"  alt="jsondata"/>
                                        <figcaption>Some information scraped given a username</figcaption>
                                    </figure> */}
                                </div>
                            </div>
                        </div>
                </section>
                <section>
                    <h2>Conclusion</h2>
                    <p>
                        Through the small simulation, I discovered that webscraping and a lightweight database can easily allow for general information gathering (comparable to reconnaissance). While these may be just some seemingly irrelavent images and numbers (friend count, follow count, etc), being able to then reproduce a replica profile page given these items has the potential to completely convince a user they are on a legitimate page. Again, social engineering shows immense dangerous potential. For this reason alone, it is even more important that we can distinguish between what is real and not.
                    </p> <br/>
                </section>
            </div>
        </div>
        
    )
}

export default PhishingObby
