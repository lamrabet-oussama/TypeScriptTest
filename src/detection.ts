function detectType(val: number | string) {
  if (typeof val === "string") return val.toLowerCase();
  return val + 3;
}

function provideID(id: string | null) {
  if (!id) {
    console.log("No ID");
    return;
  }
  id.toLowerCase();
}

interface User {
  FullName: string;
  email: string;
}

interface Admin {
  FullName: string;
  email: string;
  isAdmin: boolean;
}

function isAdmin(account: User | Admin): boolean {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
  return false;
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

interface Fish {
  swim: () => void;
}
type Bird = {
  fly: () => void;
};
//retournera true si pet est un Fish, et false sinon.
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird): string {
  if (isFish(pet)) {
    pet; //Fish
    return "fish food";
  } else {
    return "bird food";
  }
}
