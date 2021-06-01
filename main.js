var canvas=new fabric.Canvas("myCanvas");
block_imgWidth= 30;
block_imgHeight= 30;
player_x= 10;
player_y= 10;
var player_object="";
function player_update(){
fabric.Image.fromURL("player.png",function (Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(150);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);

});
 }
 function new_img(get_Img){
    fabric.Image.fromURL(get_Img,function (Img){
        block_imgObject=Img;
        block_imgObject.scaleToWidth(block_imgWidth);
        block_imgObject.scaleToHeight(block_imgHeight);
        block_imgObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_imgObject);
        
    });
     }

     if (keyPressed == "38") {
        up()
        console.log("up");
    }
    if (keyPressed == "40") {
        down();
        console.log("down");
    }
    if (keyPressed == "37") {
        left();
        console.log("left");
    }
    if (keyPressed == "39") {
        right();
        console.log("right")
    }
    if (keyPressed == "70") {
        new_image('https://drive.google.com/file/d/1RjtrVFlLkNwDUGwQHSjY2WAJOEFjMjsE/view?usp=sharing');
        console.log("f");
    }
    if (keyPressed == "66") {
        new_image('https://drive.google.com/file/d/16q60eulWvkIUXqtdIHYVf-WzL1PnprWo/view?usp=sharing');
        console.log("b");
    }
    if (keyPressed == "76") {
        new_image('https://drive.google.com/file/d/18gAM21-K2XuvAwY5O-UZkfccGtupEZAA/view?usp=sharing');
        console.log("l");
    }
    if (keyPressed == "69") {
        new_image('https://drive.google.com/file/d/18gAM21-K2XuvAwY5O-UZkfccGtupEZAA/view?usp=sharing');
        console.log("left hand");
    }
    if (keyPressed == "72") {
        new_image('https://drive.google.com/file/d/1hNsjZZWyHXhN0f4yOLjqRNlcB0YpiyNi/view?usp=sharing');
        console.log("right hand");
    }

    function up() {
        if (player_y >= 0) {
            player_y = player_y - block_image_height;
            console.log("block image height = " + block_image_height);
            console.log("When up arrow is pressed,X = " + player_x + ",Y = " + player_y);
            canvas.remove(player_object);
            Player_Update();
        }
    }

    function down() {
        if (player_y <= 500) {
            player_y = player_y + block_image_height;
            console.log("block image height = " + block_image_height);
            console.log("When Down arrow key is pressed,X = " + player_x + ",Y = " + player_y);
            canvas.remove(player_object);
            Player_Update();
        }
    }


function right() {
    if (player_x <= 700) {
        player_x = player_x + block_image_width;
        console.log("block image width =  " + block_image_width);
        console.log("When right arrow key is pressed, X = " + player_x + ",Y = " + player_y);
        canvas.remove(player_object);
        Player_Update();
    }
}

function left() {
    if (player_x > 0) {
        player_x = player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When left arrow key is pressed, X = " + player_x + ",Y = " + player_y);
        canvas.remove(player_object);
        Player_Update();
    }
}
