# History quiz website
The goal of this project was to create a simple website that is brought to life using javascript. The hope was to create a history quiz that is easy to understand and interractible in the same style as the old wordle games, a quick and simple game that you can play during downtime. The second goal was to utilize javascript for as much as possible. This was to showcase the power and flexibility of javascript when applied to html and css.

![am i responsive picture](https://lh3.googleusercontent.com/pw/AP1GczOo0B1yWNelBdjS8gJ9kHx1szO6bNTsfHtpiM6FYARxhJ0u05rTxHuTR61nuoIsXTobZjA-pidw3lS1E148wMX1pPu2Tb_FTxbn6n4-Z3zEWz673Q0=w2400)

## Features
The website features several things going on behind the scenes. The answers are all highlighted when you move over them. Once an answer has been chosen, it not only disables the player from choosing another answer, but also shows this by changing the mouse cursor. The correct answer is highlighted in green if the player choses the correct option, and both icorrect and correct answer is shown if the player choses the wrong answer. The next button is also hidden until an answer has been chosen. If the player gets an answer correct, a point will be added and the score is showcased at the end. I have also implemented a feedback button that allows the custom modal to appear.

## Existing features
- highlights both correct, and if chosen, incorrect answers
![a photo showing both incorrect and correct answer highlighted](https://lh3.googleusercontent.com/pw/AP1GczM_w1e_6r3FBNBf23JQ9Jvg1_qmR2GXI6GfqmvXupTcWagBPgqcek7I7OXXIoiTTjAhRJGNTw7KrSLT9BtCbR_nwW6g-oF2RA1OMLnUOZFeQ_hWvqc=w2400)
- Keeps track of score, showing final score at the end of the game
![A picture showing the score at the end of the game](https://lh3.googleusercontent.com/pw/AP1GczNk6BIFcEIinSlFK9VaYMN8ybJroRcW2V5IvFhvcCSKlOAaFkHXpItJHUNSIHdP0cNzceXa4kGJKDEvNmgMIKYEhxy-XntnoOdVGyzK6w-i82XQBvs=w2400)
- Answer positions are randomized to counteract just memorising the position of the right answer. (see first feature picture to compare)
![A picture showing that the position of the answer has changed](https://lh3.googleusercontent.com/pw/AP1GczM8jCI_uSVyCqX_wo91LbF3UNyATWF-ZZRwNY-aG_LtJY1ey_caJQsJTXDnlqR1hsyJDNvdJcUjLr5yCjn1GIKPjhjXO99B9a3O_PzLky_R-Bmkz1k=w2400)
- Custom modal with textarea for leaving feedback
![A picture showing the custom modal with a feedback text area, aswell as the feedback button](https://lh3.googleusercontent.com/pw/AP1GczPOOPMDp4m6-hAhTyUrsDhgWVu7wNEOF8tGLEt0QG_Jt7C7A7JJTtWNPTI0pcFzL0rJ2cH2irVti09ClBg44MjnZifJJTxykLiyutJMqjYtYXFaVG8=w2400)

## Features left to implement
- Wanted to add more questions and create a function that randomly chose questions out of an array, but didn't have time to figure out a good solution for the function chosing the same question multiple times.
- Wanted to add a second modal that displayed hints or pictures corresponding with the questions. I couldn't decide in time which was the better option, as either one had issues with making some questions way easier than they should have been.
- I initially wanted to implement a page showing highscore, but as i couldn't figure out the random questions function, this feature had to be removed. I also couldn't find a good way to store the scores when the website was reloaded or player clicked "play again" as the highscore section was reset.

## Testing
The website was tested on several browsers to check that all the features worked. I also tested it on two mobile devices, but couldn't get ahold of anyone with a tablet. I was initialy sceptical of the modal on mobile devices, as i was worried that it would render weirdly, but this became a non issue once it was actually implemented and tested.

-HTML
  - No errors returned when ran through the [W3C validator](https://validator.w3.org)

