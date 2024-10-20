interface Cercle {
  kind: "cercle";
  radius: number;
}
interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  lenght: number;
  width: number;
}

type Shape = Cercle | Square | Rectangle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "cercle":
      return Math.PI * shape.radius;
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.lenght * shape.width;
    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}
