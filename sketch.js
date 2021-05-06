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

    banner = createSprite(300,75,10,10);
    banner.addImage(bannerIMG);
}

function draw() {

    textSize(20);
    fill(0);
    text("UID :",120,190);
    text("E-Mail/Phone :",32,240);
    text("Password :",68,290);

    textSize(20);
    stroke(0);
    // strokeWeight(2)
    text("ONLY  FOR '2'  PLAYERS",195,160);

    form.display();
    drawSprites();
}
