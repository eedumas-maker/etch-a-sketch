Just a little app that will be challenging but fun to make. The goals are at (https://www.theodinproject.com/lessons/foundations-etch-a-sketch).

My side goals include organizing the grid not as squares, but as nested circles, with a little fun math that makes sure they never touch.

Let's try:

- creating 16 rows of divs, and then creating 16 square divs within each row
- rows could be any size really, nice! ideally same height as squares

Lesson Learned:

- that didn't work, because it assigned a temp name to each box, but only the last one could be referenced to add an event handler, the others had no associated variable, not good.
- I still like the row then boxes style, just need a way to reference them, I'm thinking an array would be best (with x and y coords)
