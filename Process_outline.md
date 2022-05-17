# Countdown timer exercise: Process outline

## Using the countdown timer

Access the prototype [here](http://lm-countdown-timer.herokuapp.com/).
The password id `c0untd0wn`.

The prototype is best viewed in Google Chrome, either on desktop or mobile.
It has been also tested on Edge for Mac using emulators, including:

- Pixel 5
- iPhone SE
- Samsung Galaxy S20 Ultra
- Surface Duo

## Engineering considerations

As the exercise duration was limited to 10 hours, the following considerations were made:

- I chose a framework I was familiar with, namely Vue.js 3 with TypeScript, SASS & Vite. The benefits of this choice included a modularised single file component structure with a central data store, fast hot reload times, cleaner CSS variables and typings to increase code quality.
- I used a single 3rd party library, [Vue Scroll Picker](https://github.com/wan2land/vue-scroll-picker) to provide a scrollable picker for selecting the hour, minute and second values. A custom implementation would have taken much longer to develop and be more complex for the context of this prototype.
- For the context of this experience prototype, I chose to use a very simple countdown function, where the time is decremented by second a 1 second intervals. Other, more accurate approaches to calculate time differences to the millisecond could have been used, but this was the simplest and most efficient for the context of this prototype & allowed me to focus on the core user experience.
- I chose to use CSS animations for all motion & transitions within the application as they were quick to fine tune & are handled well by the browser.
- I adopted a mobile-first approach to development, where the prototype UI is optimised for mobile devices, but is still usable on any device.

## User Experience Questions

- What types of scenarios would the timer be used for?
  - these include both positive & negative use cases, such as cooking pasta, taking medication, waiting for a Covid test result, and counting down to events like a wedding ceremony.
  - I chose to design the timer UI & color palette to be as neutral as possible, so that it can be used in a wide range of scenarios & not ellicit a strong contextually incorrect emotional response.
  - I limited the maximum selectable time to 23 hours, 59 minutes and 59 seconds, as a calendar application would be more suitable for longer time periods that span days, although research and user testing would be required to prove this hypothesis.
- How does the user set the timer?
  - I chose a simple, mobile first, and well understood pattern of scrollable pickers to set the hour, minute and second values.
  - This allows the user to easily set the time with one hand as the they may be multitasking during any of the scenarios mentioned above.
- What are all of the possible states of the timer?
  - I reduced the number of possible states to 4: `Stopped`, `Running`, `Paused` & `Finished`.
  - This limits the amount options for the user, reducing the amount of edge-cases that need to be considered & preserves the original brief functionality requirements.
- How can the user understand the current state of the timer & time remaining at a glance?
  - I employ accent colors to highlight active areas & controls, & use modified layouts for each state - all color & layout transitions are animated to provide context for the user.
  - When the timer is stopped, the analog circular display is a neutral visual state, the time adjustment controls are visible, and only the primary button is visible.
  - When the timer is running or paused, the analog circular display includes a time remaining overlay in the accent color, the time adjustment controls are hidden, and both the primary & secondary buttons are visible.
  - Also, when the timer is running, an indicator is present in the circular display & the separators in the digital display blink to reinforce the visual state.
  - When the timer is finished, the analog circular display emits a pulsing animation, both in a neutral & primary color, and the time adjustment controls are hidden, and only the primary button is visible.
- How can the user operate the timer using only one hand?
  - As mentioned above, the all inputs are mobile-first & large enough to be used with one hand.

## Next steps

Given more time, I would like to:

- Refactor the analog clock countdown animation as there is a one second delay between the digital countdown and the analog due to the CSS animation. I would like to investigate other 3rd party libraries, such as [D3.js](https://d3js.org/) & alternative timer functions, to improve the accuracy of the animation.
- Increase glancability by updating the background colour of the app to reflect the current state of the timer i.e. desaturated colours for pause, darkened tint for stopped and pulsing for finished.
- Include an audio alert on finish, with options.
- Investigate an input field for a label, which could act as a reminder for why you started the timer originally.
- Desktop layout for larger screen devices.
- Investigate other accessible design approaches, including an audio only option with voice input for no handed use, as well as neurodiverse layouts and a reduced motion alternative.
