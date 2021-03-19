export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
  // I added a constructor to it so that we can instantiate this with a new keyword
  // and pass the arguments to the constructor
}
