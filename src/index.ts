class User {
  //   public email: string;
  //   private name: string;
  protected _courseCount = 1;
  private readonly city: string = "";
  //   constructor(email: string, name: string) {
  //     this.email = email;
  //     this.name = name;
  //   }

  constructor(public email: string, private name: string) {}
  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }
  get courseCount(): number {
    return this.courseCount;
  }
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course Count should be more then 1 ");
    }
    this._courseCount = courseNum;
  }

  private deleteToken() {
    console.log("Token deleted");
  }
}
class SubUser extends User {
  isFamilty: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}
const alae = new User("ccccc@gmail.com", "TTT");
alae.courseCount = 3;
