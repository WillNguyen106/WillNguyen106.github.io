
window.onload = function()
{
    // Making the canvas
    const snakeboard = document.getElementById("gameCanvas");
    const snakeboard_ctx = gameCanvas.getContext("2d");

    /* Making the snake
    Create a horizontal snake in the middle of the canvas
    List the co-ordinate of each body part of the snake.
    */
    // y-coordinate for all parts is always 200.
    // x-coordinate is at decrements of 10 to represent different parts of snake's body.
    let snake = [{x: 200,y: 200}, {x: 190, y: 200}, {x:180, y:200}, {x:170, y:200}, {x:160, y:200}];

    // Write a function to display snake on the canvas
    function drawSnakePart(snakePart)
    {
        snakeboard_ctx.fillStyle = 'lightblue';
        snakeboard_ctx.strokestyle = 'darkblue';
        snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
        snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
    }

    /* Function that prints the part*/
    function drawSnake()
    {
        snake.forEach(drawSnakePart);
    }
}