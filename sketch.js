var FORM
var banner,bannerIMG,BG,BG_Sprite;
var database;

function preload() {
    bannerIMG = loadImage("img/banner.png");
    BG = loadImage("img/BG2.png");
}

function setup() {
    createCanvas(600,600);

    database = firebase.database();

    form = new Form();

    banner = createSprite(300,0,10,10);
    banner.scale = 0.2
    banner.addImage(bannerIMG);

    // BG_Sprite = createSprite(400,200,10,10);
    // BG_Sprite.scale = 0.2;
    // BG_Sprite.addImage(BG);
}

function draw() {

    textSize(20);
    fill(0);
    text("UID :",180,200);
    text("E-Mail/Phone :",92,250);
    text("Password :",128,300);

    textSize(20);
    stroke(0);
    // strokeWeight(2)
    text("ONLY  FOR '2'  PLAYERS",255,160);

    form.display();
    drawSprites();
}
