## Commands:

-   `npm run build` - starts build procedure
-   `npm run start` - start watching for files and open's server on localhost:3000


## About:
The project is completed as if a new game of a decent size in PIXI has to be created from scratch.
Game supports all aspect ratios and screen resolutions.
Game treats PIXI as an external IO plugin. Gameplay code is mostly free from PIXI related dependencies.

A custom dependency injection system is being used to resolve dependencies. It has also been integrated with the build system to automate the creation of container.