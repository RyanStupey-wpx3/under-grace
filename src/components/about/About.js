import React, { Component } from 'react';
// import ImageCrsl from '../carousel/Carousel'
import '../main.css'
import './about.css'
import Nav from '../navBar/Nav'

export default class About extends Component {
    render() {
        return (
            <div className="body">
                <Nav/>
                <div className="hero"></div>
                <div className="contentBody">
                <div className="bibleVerseDiv">
                    <h2 className="bibleVerseTitle">Jeremiah 29:11</h2>
                    <p>For I know the plans I have for you,” declares the Lord,
“plans to prosper you and not to harm you,
plans to give you a hope and a future.</p>
                </div>
                <div className="kathiPictureDiv">
                    <img className="kathiPicture" src={require("../../images/Kathi.JPG")}/> 
                </div>
                    <h2 className="AboutTheAuthorH2"> this is me</h2>
                
                    <p> I was born in Anacortes, Washington the only girl in a family of four boys. Many of my Mom’s siblings
also lived in Anacortes so I was fortunate to grow up with cousins as my best friends. After the death of
one of my brothers my family moved to the Arlington/Marysville area in Snohomish County, where I
lived and worked until I retired and moved to Arizona. </p>

                    <p>I was brought up in the church because it was our grandfather’s expectation. We stopped going after
my brother died. In the following years my parents divorced, my brothers went to college, and I went
into law enforcement. I found myself married and divorced in a short amount of time. I remarried a few
years later and had a baby girl in 1995. That marriage too, fell apart. Shortly after a coworker saw my
pain and led me to Christ. In 2004 I married a wonderful man, also a believer, and we have a blended
family of four kids and three grandchildren.</p>

                    <p>My law enforcement career began at 21 years old as a Police Dispatcher. At 30 I was hired as a Deputy
by the Snohomish County Sheriff’s Office. I don’t know how I did that job without Christ. As I look back I
see clearly how Jeremiah 29:11 applied to me, even though I wasn’t a believer. </p>
                    <p>In 2014 it was as if the gates of hell opened where I lived. At the beginning of 2014 I lost one of my best
friends and my mother in law to cancer, and a co-worker to a heart attack.</p>
                    <p>In 2014 it was as if the gates of hell opened where I lived. At the beginning of 2014 I lost one of my best
friends and my mother in law to cancer, and a co-worker to a heart attack.</p>
                    <p>In March a mountain fell in Oso, a small community within the boundaries of my precinct just a few
miles from Arlington. A whole neighborhood was wiped out, killing 43 people. I had close ties with 12 of
them. Through the tears, prayers, and tragedy I witnessed incredible courage and strength</p>
                    <p>Seven months later a man drove through three different towns in my county shooting at police
departments, patrol cars, ultimately shooting a police officer. The man stopped only when he was shot.
That same night, a Sergeant who worked for me had a medical event that caused him to crash on the
freeway. Thankfully, no other cars were involved, but he was severely injured. I spent the night at the
hospital with him and his family and saw the remarkable power of a family responding to crisis.</p>
                    <p>Two weeks later came the radio call everyone dreads – a school shooting. As one of the first responders
on scene, I was incident commander. A 15-year-old boy had invited his friends to sit with him at lunch,
and then shot five of them before shooting and killing himself. Of the five kids he shot, one lived. I saw
the undeniable courage and compassion of the first responders who ran into the school to protect kids
and teachers.</p>
                    <p>I was also in the middle of a law suit with my employer over retaliatory actions towards me for pointing
out areas of gender bias and discrimination at work. While I refused to acknowledge it, I was crumbling
under the stress of tragic circumstances of natural and man-made disasters in my community, loss of life
in my circle, difficulties in my personal life, along with legal issues with work.</p>
                    <p>This is the story I want to share. It took a while, but I got “me” back. I found JOY in God, I found JOY in
life, I found I had grace under fire, and I found I had grace after fire.</p>
                    <p>I will share more on these circumstances, what I saw, experienced, and learned. I’ll share how Christ
walked with me as I journeyed back to JOY. My prayer is my experiences might help you.</p>
                    <p></p>
                        
                </div>
                <footer>
                    <div></div>
                </footer>
            </div>
        );
    }
}