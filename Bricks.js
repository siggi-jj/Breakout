function Bricks(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}


Bricks.prototype.render = function (ctx){
    var bricks = [];
    for(var c=0; c<this.brickCC; c++) {
        bricks[c] = [];
        for(var r=0; r<this.brickRC; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 1 };
        }
    }

for(var c=0; c<this.brickCC; c++) {
    for(var r=0; r<this.brickRC; r++) {
        if(bricks[c][r].status === 1) {
            var brickX = (c * (this.brickW + this.brickP)) + this.brickOL;
            var brickY = (r*(this.brickH + this.brickP)) + this.brickOT;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.fillRect(brickX, brickY, this.brickW, this.brickH);
        }
    }
    }
}

/* Bricks.prototype.collidesWith = function(prevX, prevY, 
    nextX, nextY, 
    radius){
        for(var c=0; c<this.brickCC; c++){
            for(var r=0; r<this.brickRC; r++){
                var b = this.bricks[c][r];
                if ((nextX - radius < b && prevX - radius >= b) ||
                    (nextX + radius > b && prevX + radius <= b)) {
                    if (nextY + radius >= b  &&
                        nextY - radius <= b ) {
                            this.brick[c][r].status = 0;
                            return true;
                }
        }
        else return false;
            }
        }
        
    } */


     
