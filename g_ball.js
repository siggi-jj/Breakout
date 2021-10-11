// ==========
// BALL STUFF
// ==========

// BALL STUFF

var g_ball = {
    cx: 50,
    cy: 200,
    radius: 10,

    xVel: 5,
    yVel: 4
};

g_ball.update = function (du) {
    // Remember my previous position
    var prevX = this.cx;
    var prevY = this.cy;
    
    // Compute my provisional new position (barring collisions)
    var nextX = prevX + this.xVel;
    var nextY = prevY + this.yVel;

    // Bounce off the paddles
    if (g_paddle1.collidesWith(prevX, prevY, nextX, nextY, this.radius))
    {
        this.yVel *= -1;
    }





    // Bounce off top and bottom edges
    if (nextY < 0 || nextY > g_canvas.height) {               // bottom edge
        this.yVel *= -1;
    }

    //Instead of resetting we make the ball 
    //bounce off left or right edges

    if (nextX < 0 ||
        nextX > g_canvas.width) {
        this.xVel *= -1;
  }


    if(nextY  > g_canvas.height) {
        this._isGameOver = true;
    }



    // *Actually* update my position 
    // ...using whatever velocity I've ended up with
    //
    this.cx += this.xVel;
    this.cy += this.yVel;
};


   




g_ball.render = function (ctx) {
    fillCircle(ctx, this.cx, this.cy, this.radius);
};