var FORM
var banner,bannerIMG;
var database;

function preload() {
    bannerIMG = loadImage("img/banner.png");
}

function setup() {
    createCanvas(600,600);

    database = firebase.database();

    form = new Form();

    banner = createSprite(300,0,10,10);
    banner.scale = 0.2
    banner.addImage(bannerIMG);
}

function draw() {

    textSize(20);
    fill(0);
    text("UID :",120,200);
    text("E-Mail/Phone :",32,250);
    text("Password :",68,300);

    textSize(20);
    stroke(0);
    // strokeWeight(2)
    text("ONLY  FOR '2'  PLAYERS",195,160);

    form.display();
    drawSprites();
}
