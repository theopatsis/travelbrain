# TravelBrain

Developed as a project for LA HACKS 2023. Check out our Devpost submission [here.](https://devpost.com/software/travelbrain-7k2nfu)

## Inspiration
People plan short day trips all the time. In our day and age, most people rely on a Google search to find recommended attractions, restaurants and coffee shops. However, the information online is abundant and not well-organised and it becomes increasingly difficult to plan ahead and visit as much as one wants. Most users end up spending many hours on their phones to find directions to the next place or new suggestions and lose a big part of their day, resulting in frustration. 
## What it does
TravelBrain is a travel assistant that provides personalised day itineraries to travellers exploring a foreign country or a new city. It generates customised plans based on an initial survey consisting of predefined questions used to identify one's travel preferences. After registering an account and submitting the initial survey, a user can generate an itinerary along with a list of suggested places that are also simultaneously plotted in an embedded map.
## How we built it
We built TravelBrain using the MERN (MongoDB, Express, React, Node.js) stack. MongoDB stores user data: username, email, password, and the results of the initial survey. Every time a new plan is generated, we access the survey results from Mongo to incorporate the personal preferences into the plan. We use React on the frontend and Express in the middleware to make calls to other APIs.
## Challenges we ran into
The main challenge we faced was figuring out how to format the output received by OpenAI API in order to be able to output it a visually pleasing manner (i.e. outputting a list of suggested places, putting every activity on a new line, etc). Furthermore, managing version control in a team of four people was challenging.
## Accomplishments that we're proud of
We are proud of implementing the "Plan my trip" page so that an embedded map is being updated simultaneously with the generation of a new travel plan. Moreover, we are proud that we have implemented a project that can tailor a travel plan to the preferences of a specific user.
## What we learned
Since it was the first time developing a website for most of us, we have learned a great deal about using React, connecting to an external database and storing data in it, as well as about meaningful usage of Git.
## What's next for TravelBrain
We would love to continue developing TravelBrain even after the end of LA Hacks 2023. Our next step would be to implement a user profile page, where users could display their saved itineraries and rate trips they have already taken in order to make future suggestions even more accurate. We have also noticed that there are not many social media platforms for sharing travel experiences. We could make our website a social media platform where users can export, share and comment on the suggested itineraries. We are also considering extending our idea into a mobile application.
## Installation
To run TravelBrain locally, follow these steps:
```bash
   git clone https://github.com/theopatsis/travelbrain.git
   cd travelbrain
To activate our backend: 

