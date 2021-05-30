## Bitfari.org - Public Website
 
Bitfari is a Secure and Decentralized Network for Peer-to-Peer Citizen Advertising

by Jordhy Ledesma - jv@jordhy.com

# Abstract
Bitcoin has notably demonstrated a blockchain enabled store of value which offers the unbanked an alternative with cryptographically-secured transactions and high utility. Bitfari sits atop Bitcoin to create a civil network where users can publish, collaborate, self-organize, and pool resources all while acting anonymously.

# 1. Introduction

Consider a system that ties all the screens in a city: screens from smartphones, desktop computers, electronic billboards, smart TVs, laptops, tablets, etc. This system is a new kind of social network that connects needs with solutions. An information brokerage system that dynamically feeds a potential solution to interested parties. Such a system could solve one of our most pressing problems: the world in which we live constantly requires our adaptation. How lovely would it be to have the world adapt to us? Surely it would feel like a heavenly breeze.

Bitfari is a system that deploys the concept of an adaptive matrix of blockchain connected screens to display contextual real-world ads and information systems at the command of the citizens. With Bitfari installed on your iPhone you could press a button and translate the entire city to your native language, for example. You could also block political ads, see relevant products without entering any store and, perhaps most importantly, place your own ads and calls for action allowing you to start a movement or recruit locals that can help you.

Most readers will naturally think about “Minority Report” ads, but Bitfari is exactly the opposite: ads placed by regular citizens, that don’t scan your face, don’t know your identity and don’t sell you stuff you don’t want. Bitfari connects you to other citizens by showing only the ads that you want to see, coming from people who share your interests. Blockchain technology makes this possible today and not ten years from now.

# 2. Background

Bitfari was originally called Tellfari. The first prototype was shown at the University of Virginia in 2012. Subsequent research about adaptable cities was published that year in the paper “Best Buy: Investing in Language Learning”. That paper explored the economic

benefits of providing personalized service in Spanish for Latino immigrants. Bitfari was later prototyped using blockchain technology and will be launched as an open-source layer to enhance online and offline communications now that scaling solutions make it feasible.

# 3. Network Elements: Screens, Alter Egos, Channels, Social Oracles, Style Sets, Variables and Disclosure Matrix

Alter Ego is a private login where the account identifier, a public key assigned to a publisher, maps to a set containing a pseudonym, an avatar, a color, a hashed password and a place of origin. For example:

alterEgo1 = {publicKey, ‘Batman’, ‘avatar15’, ‘Red’, ‘eeb7048c69b088739908f5f5144cd1f5’, ‘New York’ }

When displaying this user’s identity in the ad space we can expect to see something along the lines of:

BoyGenius of New York we have 30% OFF Coupon for you! – and so on. Instead of a photo, the user gets to choose an avatar from a library. A color is also

chosen to map the ad space that is targeting the use to his/her smartphone.

Channels include categories such as politics, shopping, food, erotica, religion, etc. This allows users to filter which ads they don’t want to see.

Style Sets include pre approved fonts, vector images and photos that make possible the fast approval of basic ads. More complex ads go through the social oracle approval process.

Social Oracles can either be people or machines. A set of social oracles are chosen at random to evaluate an ad’s fitness for publication within a time-space-location. The number of social oracles chosen depends on the size, duration, channel and distribution of the ad.

Variables contain the essential elements for ad programmability. They can contain the alter ego, city, location, date, interests, likes, keywords and exploration lists of the user. Variables also store information regarding the weather, language of the ad, etc. A sample ad created with variables could look like:

Hey BoyGenius of New York it’s raining, do you have an umbrella?

The Disclosure Matrix is a little bit more complicated. This structure stores an array of arrays of varying sizes containing the variables associated with the elements a user is comfortable disclosing for a particular Alter Ego.

# 4. Network Operation

The steps to run the network are as follows:

1) Screen dApp: Screens rotate ads and apps as their rotation shows.

2) User dApp/Validation Section: Ad placement is filtered by oracles for consensus.

3) Ad performance dApp: Ad performance metrics are broadcasted to its owners.

4) Ad creator dApp: Ads are created using SVG, IPFS and will undergo social approval. 5) Screen operators are paid as the duration of the ad comes to an end.

6) Screen dApp: Screen operators can choose to include apps or pause their screens.

# 5. Contextual Ads and Apps

Bitfari always displays the most appropriate ad according to the disclosed interests of pedestrians. Concretely, the summation of interests S contains the union set of interest keywords while SA contains the union set of scheduled ads for the screen in question.

Contextual Apps are shown according to location, as selected by publishers, or interest match. To illustrate further, contextual apps include the likes of cryptocurrency ATMs, directories, and schedules. These apps are primarily controlled thru the user’s smartphone, thru some of them could be manipulated thru a touch screen.

# 6. Consensus for Language and Images

A machine oracle contains a list of negative words and phrases for a given language. The ad-miner will configure a probability of consensus α . Please note this can vary due to many factors: political climate, governmental regime, ad space location, etc. The algorithm will simply reject proposed ads until the piece contains no negative words or phrases and a sample of oracles has cleared the ad with a probability higher than or equal to α.

Images are immutably stored on IPFS or a similar system. They can also come from a preapproved set. In the case of new images social oracles will review it as in point 5.

# 7. Placement and Other Fees

Fees are calculated using foot traffic figures for a given season, transaction fees and network maintenance fees.

# 8. Human Review

While ads are placed automatically, social oracles are selected at random from a pool of application users in the area. These users will determine whether an ad is appropriate for their areas. The human mining portion of the transaction fee will be disbursed to them automatically. This human review process includes ad auditors, pre-auditors and screen reviewers. The review process occurs 24/7 with paid reviews occurring multiple times per day for each user. Pre-auditors check ads and stock images before they are published and after machine review has cleared, auditing happens after the ad has been published but not widely distributed and screen review occurs after initial screen setup and after a screen issue is reported by any auditor or customer. Auditing carries a cost and could require the deployment of thousands of auditors to review a single ad due to cultural, or geopolitical issues. For additional reference regarding fraud prevention, please refer to our Fraud Prevention Whitepaper. 

# 9. Ad Cancellation

At the discretion of the storefront or screen owner, an ad can be cancelled if it enters into conflict with the owner’s religion, personal convictions or if it’s considered detrimental in any way to his business or the immediate surroundings. Ad owners will be refunded the placement fees for the remainder of the duration in the ad’s schedule.

# 10. Adspace Donation

The network will allocate a percentage of space time in order to provide free ad space to social interest causes as chosen by the governance polls. Screen operators shall be paid in full for these showings.

# 11. Conclusion

We have proposed a system for decentralized global ad display and management. The solution will always work as long as there is at least one honest social actor among the reviewers. Which eventually is found after a series of revisions.

Screens work all at once with little coordination. Ad owners do not need to be identified, since they are judged on the basis of the quality of the message they want to broadcast.

# References

(1) Brand, J., Clarification of citizen advertising

(2) W. Feller, “An introduction to probability theory and its applications” 

(3) Satoshi Nakamoto, Bitcoin: A Peer-to-peer Electronic Cash System. https:// bitcoin.org/bitcoin.pdf

(4) Nick Szabo, Formalizing and Securing Relationships on Public Networks https://nakamotoinstitute.org/formalizing-securing- relationships/

(5) Gonçalo Pestana and others, THEMIS: Towards a Decentralized Ad Platform with Reporting Integrity (Part 1) https://brave.com/themis/

(6) Thorsten Holz and others, The Dark Alleys of Madison Avenue: Understanding Malicious Advertisements https://dl.acm.org/doi/10.1145/2663716.2663719

(7) Brave Software, Basic Attention Token (BAT) Whitepaper – Blockchain Based Digital Advertising https://bit.ly/3yc4lW2

(8) Jordhy Ledesma, How Bitfari Prevents Ad Fraud https://bit.ly/3hrODQD
