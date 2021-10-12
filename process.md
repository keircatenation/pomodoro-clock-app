# Resources and Thoughts on Progress

## Resources
For the timer: [a StackOverflow post about making timers with pause functions](https://stackoverflow.com/questions/45522240/js-countdown-timer-pause-function)
useInterval hook: [Jamie's hooks-todo demo app](https://github.com/JamieVaughn/hooks-todo/tree/main/src/hooks)

## Thoughts

### 12 Oct 2021
While I based my initial timer on the SO post, I realized that I didn't want to create timers in a function the way the post details. Instead, I wanted to use a `useInterval` that my bootcamp teacher showed us, which wouldn't be able to be called inside a function. Because of the multiple variables I'm keeping track of (the length of both the session and the break, the name of the counter currently going, whether or not the counter is paused, and what the current time is), I ended up expanding quite a bit beyond my initial basis.

I set the `useInterval` hook up inside my main `App.jsx` file so that if there's a count going on, it will decrement the `counter` variable each second, and if `counter` reaches zero, it will switch between session and break. I decided to use a `switch` statement because I knew exactly what the values would be, with an error notification in the `default` case.

The use case of "the timer reaches zero and immedately restarts" was where I decided that I needed to keep track of the status of the counter. When I first referenced `(counter == 0)` without keeping track of status, that meant that any time I paused the timer, it would switch over to the next timer. By keeping track of status, I could pause the timer but still restart the counter when it reached zero while still counting.

My main file is also where I set up all of my `useState` hooks, because the data is needed in both the `Labels` component and the `Controls` component. Due to all the data I ended up passing down into both components, I considered putting everything into one file, but I wanted to separate out the functional controls from both the labels and the main app file.

I created variables in the `Labels` component to translate the count in seconds into minutes and seconds, because the in-line chained ternary operators crowded up the JSX incredibly. That was the simpler component, and only needed data passed down as props.

The `Controls` component was more complex, necessitated by the controls aspect! I initially wanted a `handleDecrement` and a `handleIncrement` function, but when I realized that I needed to set the `currentTime` as well as just the session or break time, I divided them out into four functions. A better way to do it might be to bundle it back up into two functions - but this time have it `handleSession` and `handleBreak`.

The `handleStartStop` function is actually simpler here than it was in my original countdown basis, since I just need to set the counter and set the status of the counter, instead of creating/destroying the `setInterval`. The `handleReset` is likewise simple - it resets everything to the default values, stops the counter, and changes the status to "paused" (something I forgot to do at first until I started checking the FCC tests!).

I still need to hook up the beeping sound, but after playin with playing sounds for the Drumkit project I think that will be fairly simple to do.