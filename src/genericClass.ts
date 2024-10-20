interface Database {
  connection: string;
  username: string;
  password: string;
}

function another<T, U extends Database>(valueOne: T, valueTwo: U): object {
  return { valueOne, valueTwo };
}

interface Quiz {
  name: string;
  type: string;
}
interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }
}
const quizCart = new Sellable<Quiz>();
quizCart.addToCart({ name: "Math Quiz", type: "Multiple Choice" });

const courseCart = new Sellable<Course>();
courseCart.addToCart({
  name: "Introduction to TypeScript",
  author: "John Doe",
  subject: "Programming",
});
