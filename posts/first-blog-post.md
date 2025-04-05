---
title: This is a sumin's blog post!
published_at: 2025-05-03
snippet: Creating a Grid of Squares Using Nested For Loops in p5.js
In p5.js, one of the most fundamental and visually impactful things you can do is draw a grid of shapes. This is particularly useful for creating patterns, backgrounds, or even game boards. Here, we'll explore how to create a grid of squares using nested for loops, which is an efficient way to manage repeating elements across the two-dimensional canvas space.
Setup Function
The setup() function in p5.js is used to initialize and set the basic properties of your canvas. In our case, we're creating a 400 by 400 pixels canvas:
javascript
function setup() {
createCanvas(400, 400);
}
Defining Variables
Inside the setup() function, after initializing the canvas, we define a variable called size. This variable will determine the size of each square in our grid:
javascript
Copy
let size = 40; // Size of each square
Drawing the Grid
To draw the grid, we use two nested for loops. The outer loop runs horizontally, and the inner loop runs vertically. This setup allows us to cover every coordinate point on the canvas where a square should be drawn:
javascript
Copy
for (let x = 0; x < width; x += size) {
for (let y = 0; y < height; y += size) {
rect(x, y, size, size);
}
}

- Outer Loop: The outer loop starts with x = 0 and increases by size after every iteration, continuing until it reaches the canvas's width (width). Here, x represents the horizontal position of each square.
- Inner Loop: Inside the outer loop, the inner loop starts with y = 0 and also increases by size each time, but it runs until it reaches the canvas's height (height). Here, y represents the vertical position of each square.
- Drawing a Rectangle: Within the inner loop, the rect(x, y, size, size) function is called. This function draws a rectangle at position (x, y) with a width and height of size.
  Visual Output
  The result of this code is a neat grid of squares that fills the entire canvas. Each square has an equal size, determined by the size variable, ensuring a uniform appearance. The grid structure is useful for a variety of projects, such as creating pixel art, designing patterns, or even making simple games like tic-tac-toe or minesweeper.

Adding Color Variation
To make the grid more visually interesting, we can add color variation dependent on the square's position.

Dynamic Color Fill
We adjust our setup function to include color mode settings and modify the rect() function to fill each square with a unique color:
javascript
Copy
function setup() {
createCanvas(400, 400);
colorMode(HSB, width, height, 100); // Using HSB color mode for more vibrant colors
noStroke(); // Removing the stroke for a cleaner look
let size = 40;

for (let x = 0; x < width; x += size) {
for (let y = 0; y < height; y += size) {
fill(x, y, 100); // Fill color varies by position
rect(x, y, size, size);
}
}
}

Interactive Mouse Response
Adding interactivity, we make the squares react when the mouse hovers over them.
Changing Colors and Effects on Mouseover
We modify the drawing function to check if the mouse is over a square and change its color and possibly its size:
javascript
Copy
function draw() {
background(240);
let size = 40;

for (let x = 0; x < width; x += size) {
for (let y = 0; y < height; y += size) {
if (mouseX > x && mouseX < x + size && mouseY > y && mouseY < y + size) {
fill(255, 0, 0); // Red color on mouseover
} else {
fill(180); // Default color
}
rect(x, y, size, size);
}
}
}

Adding Animation
Finally, to bring life to the grid, we introduce an animation that changes the colors of the squares over time.
Continuous Color Shift
Using the draw() function, we implement a color shift that cycles over time, giving the appearance of a living, breathing grid:
javascript
Copy
function setup() {
createCanvas(400, 400);
colorMode(HSB, 360, 100, 100);
noStroke();
}

function draw() {
background(255);
let size = 40;

for (let x = 0; x < width; x += size) {
for (let y = 0; y < height; y += size) {
fill((frameCount + x + y) % 360, 80, 100); // Cycling through colors
rect(x, y, size, size);
}
}
}

# This is h1

![a drippy lemon](logo.svg)

^ images are written like this: `![description](file_path/file_name.png)`

## This is h2

_This is italic._[^1]

[^1]: This is a footnote, _which can also be italic_.

**This is bold.**

Hyperlinks can be written like this: `[text](https://URL)`

You can find a markdown cheat-sheet [here](https://www.markdownguide.org/cheat-sheet/).

## Maths:

... which can be written inline, like this: $\{ x, y, z \} \in \N$

... or block, like this:

$$ x^2 + y^2 = z^2 $$

Visit [ $\KaTeX$ ](https://katex.org/docs/supported#fractions-and-binomials) for more information about writing maths.

## Embedding video:

<iframe id="coding_train_video" src="https://www.youtube.com/embed/rI_y2GAlQFM?si=RDgjkpunxk1mQzMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<script type="module">

    console.log (`hello world! 🚀`)

    const iframe  = document.getElementById (`coding_train_video`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16

</script>

## Embedding p5 sketches:

<iframe id="falling_falling" src="https://editor.p5js.org/capogreco/full/Fkg05m7aA"></iframe>

<script type="module">

    const iframe  = document.getElementById (`falling_falling`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

## Canvas API

<canvas id="canvas_example"></canvas>

<script type="module">
    const cnv = document.getElementById (`canvas_example`)
    cnv.width = cnv.parentNode.scrollWidth
    cnv.height = cnv.width * 9 / 16

    const ctx = cnv.getContext (`2d`)
    const pos = {
        x: -100,
        y: cnv.height / 2 - 50
    }
    
    function draw_frame () {
        ctx.fillStyle = `turquoise`
        ctx.fillRect (0, 0, cnv.width, cnv.height)

        ctx.fillStyle = `hotpink`
        ctx.fillRect (pos.x, pos.y, 100, 100)

        pos.x += 2

        if (pos.x > cnv.width) {
            pos.x = -100
        }

        requestAnimationFrame (draw_frame)
    }

    draw_frame ()
</script>

disable_html_sanitization: true
allow_math: true
---

Creating a Grid of Squares Using Nested For Loops in p5.js
In p5.js, one of the most fundamental and visually impactful things you can do is draw a grid of shapes. This is particularly useful for creating patterns, backgrounds, or even game boards. Here, we'll explore how to create a grid of squares using nested for loops, which is an efficient way to manage repeating elements across the two-dimensional canvas space.
Setup Function
The setup() function in p5.js is used to initialize and set the basic properties of your canvas. In our case, we're creating a 400 by 400 pixels canvas:
javascript
Copy
function setup() {
createCanvas(400, 400);
}
Defining Variables
Inside the setup() function, after initializing the canvas, we define a variable called size. This variable will determine the size of each square in our grid:
javascript
Copy
let size = 40; // Size of each square
Drawing the Grid
To draw the grid, we use two nested for loops. The outer loop runs horizontally, and the inner loop runs vertically. This setup allows us to cover every coordinate point on the canvas where a square should be drawn:
javascript
Copy
for (let x = 0; x < width; x += size) {
for (let y = 0; y < height; y += size) {
rect(x, y, size, size);
}
}

- Outer Loop: The outer loop starts with x = 0 and increases by size after every iteration, continuing until it reaches the canvas's width (width). Here, x represents the horizontal position of each square.
- Inner Loop: Inside the outer loop, the inner loop starts with y = 0 and also increases by size each time, but it runs until it reaches the canvas's height (height). Here, y represents the vertical position of each square.
- Drawing a Rectangle: Within the inner loop, the rect(x, y, size, size) function is called. This function draws a rectangle at position (x, y) with a width and height of size.
  Visual Output
  The result of this code is a neat grid of squares that fills the entire canvas. Each square has an equal size, determined by the size variable, ensuring a uniform appearance. The grid structure is useful for a variety of projects, such as creating pixel art, designing patterns, or even making simple games like tic-tac-toe or minesweeper.

Adding Color Variation
To make the grid more visually interesting, we can add color variation dependent on the square's position.

Dynamic Color Fill
We adjust our setup function to include color mode settings and modify the rect() function to fill each square with a unique color:
javascript
Copy
function setup() {
createCanvas(400, 400);
colorMode(HSB, width, height, 100); // Using HSB color mode for more vibrant colors
noStroke(); // Removing the stroke for a cleaner look
let size = 40;

for (let x = 0; x < width; x += size) {
for (let y = 0; y < height; y += size) {
fill(x, y, 100); // Fill color varies by position
rect(x, y, size, size);
}
}
}

Interactive Mouse Response
Adding interactivity, we make the squares react when the mouse hovers over them.
Changing Colors and Effects on Mouseover
We modify the drawing function to check if the mouse is over a square and change its color and possibly its size:
javascript
Copy
function draw() {
background(240);
let size = 40;

for (let x = 0; x < width; x += size) {
for (let y = 0; y < height; y += size) {
if (mouseX > x && mouseX < x + size && mouseY > y && mouseY < y + size) {
fill(255, 0, 0); // Red color on mouseover
} else {
fill(180); // Default color
}
rect(x, y, size, size);
}
}
}

Adding Animation
Finally, to bring life to the grid, we introduce an animation that changes the colors of the squares over time.
Continuous Color Shift
Using the draw() function, we implement a color shift that cycles over time, giving the appearance of a living, breathing grid:
javascript
Copy
function setup() {
createCanvas(400, 400);
colorMode(HSB, 360, 100, 100);
noStroke();
}

function draw() {
background(255);
let size = 40;

for (let x = 0; x < width; x += size) {
for (let y = 0; y < height; y += size) {
fill((frameCount + x + y) % 360, 80, 100); // Cycling through colors
rect(x, y, size, size);
}
}
}

# This is h1

![a drippy lemon](logo.svg)

^ images are written like this: `![description](file_path/file_name.png)`

## This is h2

_This is italic._[^1]

[^1]: This is a footnote, _which can also be italic_.

**This is bold.**

Hyperlinks can be written like this: `[text](https://URL)`

You can find a markdown cheat-sheet [here](https://www.markdownguide.org/cheat-sheet/).

## Maths:

... which can be written inline, like this: $\{ x, y, z \} \in \N$

... or block, like this:

$$ x^2 + y^2 = z^2 $$

Visit [ $\KaTeX$ ](https://katex.org/docs/supported#fractions-and-binomials) for more information about writing maths.

## Embedding video:

<iframe id="coding_train_video" src="https://www.youtube.com/embed/rI_y2GAlQFM?si=RDgjkpunxk1mQzMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<script type="module">

    console.log (`hello world! 🚀`)

    const iframe  = document.getElementById (`coding_train_video`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16

</script>

## Embedding p5 sketches:

<iframe id="falling_falling" src="https://editor.p5js.org/capogreco/full/Fkg05m7aA"></iframe>

<script type="module">

    const iframe  = document.getElementById (`falling_falling`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

## Canvas API

<canvas id="canvas_example"></canvas>

<script type="module">
    const cnv = document.getElementById (`canvas_example`)
    cnv.width = cnv.parentNode.scrollWidth
    cnv.height = cnv.width * 9 / 16

    const ctx = cnv.getContext (`2d`)
    const pos = {
        x: -100,
        y: cnv.height / 2 - 50
    }
    
    function draw_frame () {
        ctx.fillStyle = `turquoise`
        ctx.fillRect (0, 0, cnv.width, cnv.height)

        ctx.fillStyle = `hotpink`
        ctx.fillRect (pos.x, pos.y, 100, 100)

        pos.x += 2

        if (pos.x > cnv.width) {
            pos.x = -100
        }

        requestAnimationFrame (draw_frame)
    }

    draw_frame ()
</script>
