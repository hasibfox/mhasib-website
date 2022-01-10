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
                        As the world transitions to the online platform, dozens of digital opportunities in the education, retail, banking, software, etc., sectors open up. However, this also opens up twice as many opportunities for cybercrimes to occur. Phishing refers to an email where cybercriminals try to extract important information by posing as a legitimate sender. These emails usually try to create a sense of urgency and contain multiple links. Spoofing involves cybercriminals creating fake websites to similarly guage personal details. Additionally, some websites may download dangerous malware. Both use deception, a form of social engineering, to carry out their crimes and can be extremely dangerous. These tactics have existed since the dawn of email servicing, but the growth of online presence has allowed cybercriminals to find more and more susceptible targets.
                    </p>
                    <p>
                        Some phishing emails and spoofing websites are very obvious, consisting of many silly spelling and grammar errors. Others are almost identical to their legimate counter parts. Neither should be taken lightly as even the simplest display can manipulate those unfamiliar with such crimes, particularly elders and childen (the most vulnerable groups).
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

                    }}> Disclaimer: These webpages were made strictly for educational learning and awareness purposes. Always triple check that you are on the correct site when browsing the web!</h6>
                    <h4> I chose Roblox as my test imitation for a few reasons. The first being that the <Link to="https://backlinko.com/roblox-users" target="_blank" rel="noopener noreferrer">67% of the community is under the age of 16</Link>. I personally remember hopping from website to website in hopes that one would actually deliver their promise of free Robux. It never happened. The second being that I wanted to see what type of protocols Roblox had in place against such to protect its community from such threats. I figure that potential shortcoming against a game platform like Roblox would apply to dozens upon dozens of smaller, less protected ones. <br/><br/>This experiment did not go beyond the proof concept. Once I was able to simulate that basic user information could be captured given a user's responses, I found it likely that at that point, they wouldn't second guess something like a payment page asking for card details, addresses, etc.</h4>
                    <h4>I wanted to look at three D's of Deception when trying to simulate the spoof: </h4>
                    <ol style={{marginLeft:'4vw'}} className="triple-ds">
                        <li><strong><u>Design:</u></strong> How easy is it to replicate a website's design from scratch</li>
                        <li><strong><u>Database:</u></strong> How easy is it to store a user's information</li>
                        <li><strong><u>Duplication:</u></strong> How easy is it duplicate the "feel" of a website</li>
                    </ol>
                    <div>
                        <div>
                            <h2> Design </h2>
                            <p>
                                Producing a landing page and a login page took less than a few hours (4 hours max). With most components consisting of purely text and relatively common icons, the most difficult part was simply trying to consider the functionality. For example, ensuring buttons have a hover effect or redirect to the right place. Basic CSS and HTML made these tasks relatively easy nonetheless.
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
                                The idea behind a database is to firstly store critical information, including a username, password, email. In an actual scam, cybercriminals convince users to compromise their payment details (credit/debit cards), addresses, and other personal identifiable information. Here, however, my objective was to see what type of information I could get given only a username. Using webscraping methods, it was easy to find a user's ingame, unique id and use this to extrapolate contents out of their profile. This did <i>NOT</i> require any password. It is also important to note that by the very nature of forms, they can be considered as keyloggers: mechanisms to log what is being types in an input.
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
                            <h2> Duplication </h2>
                                <p>
                                    Combining the previous Ds (Design and Database), we can successfully duplicate a seemingly authentic replica of a website. While the database information may be just some images and seemingly irrelavent numbers (friend count, follow count, etc), being able to then reproduce a replica profile page given these items has the potential to completely convince a user they are on a legitimate page. Social engineering is everything. 
                                </p>
                                <div className="figure-pics" style={{flexDirection:'column'}}> 
                                    <figure>
                                        <img src="images/phishingobby/p3.png" alt="changeduser" className="searchpic"/>
                                        <figcaption>Adapting even the navigation bar with the user's screen name and avatar icon can give the impression that they are on a legitimate page</figcaption>
                                    </figure>
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

                <section>
                    <h2>Survey Results</h2>
                    <p>In addition to reproducing a user's complete profile, I am currently collecting survey responses from everyday browser users, Roblox players, and cybersecurity professionals. I hope to use these results to not only get an idea of how effective this simulation would be in real life, but also to learn from the people themselves on how to prevent such socially engineered attacks. At the end of the day, the most difficult network layer to break is the physical layer of our brain.</p> 
                    <br/>
                </section>
            </div>
        </div>
        
    )
}

export default PhishingObby
