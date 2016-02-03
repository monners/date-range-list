Date Range List
===============

##A Word or Two (◔ᴗ◔)
* The boilerplate for this project comes from https://github.com/gaearon/react-hot-boilerplate - I most certainly did not start from scratch.
* Obviously we're handling state locally.  For selections to persist we'd want to include something like local storage or a database.
* Also, we don't have any mechanism for global state (because this is *tiny*) - I'd recommend redux for something that requires a bit more oomph.
* Styles are pretty bare - Let's call it *minimalism*
* I've opted to make the dates a bit more human-readable, which wasn't in the spec.  Sorry.
* Also not in the spec (which I haven't addressed) is a condition preventing duplicate ranges from being added to the list.  Just an observation, but that's probably not desired (and a missed opportunity to use JavaScript sets!)

##Structure and Style ಠ_ಠ
I like to group components and their styles together.  I also like to group components by either role, location, or functionality, such as `/common /shared /master /accountManagement /etc`, but for something this size I've been a bit lazy.

Speaking of lazy. Linting!  Yeah, I probably could have foregone the setup of an `.editorconfig` and `.eslintrc`, but I'm lazy.  This helps me not be that when it comes to consistency.  Mostly...

##Room for Improvement (┛◉Д◉)┛彡┻━┻
I'm not entirely happy with how I've handled the parsing of the DateRange objects.  This just screams for a helper function that can be properly unit tested, but I didn't want to go *too* hardcore on the boilerplate.  At the very least there's the propType check to make sure we're not passing in anything *too* silly.

Also, the styles and container markup.  As is, it's not exactly a firm foundation to build on.  My approach for *real* builds is to start with typography and standard content, then nail the master container styles, *then* start the components.  In the interests of time, I opted not to do that.

So, guess how much I love working with poorly-documented components?!  Yeah, no.  We made do, but boy do I appreciate some well-written docs (Seriously though, it's a cool component.  **Mad props** ༼ つ ◕_◕ ༽つ.)

##Gett'r Done
```
npm install
npm start
```
Then check out the project at: `http://localhost:3000`
