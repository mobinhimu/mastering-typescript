/*

1. **Library Catalog:** Create a library catalog system that manages books, their titles, authors, and availability.

*/

interface LibraryCatalogType {
  bookName: string;
  title: string;
  authors: string;
  available: boolean;
}

class LibraryCatalog implements LibraryCatalogType {
  constructor(
    public bookName: string,
    public title: string,
    public authors: string,
    public available: boolean
  ) {
    this.bookName = bookName;
    this.title = title;
    this.authors = authors;
    this.available = available;
  }

  getBookInfo(): void {
    console.log(
      `This Books (${this.bookName}) author name is ${this.authors} .`
    );
  }
}

/*
2. **Geometry Calculator:** Build a class to calculate area and perimeter for various shapes like squares, circles, triangles, etc.
*/

class AreaCalculator {
  squares(side: number): number {
    return Math.pow(side, 2);
  }

  circles(radius: number): number {
    return +(Math.PI * Math.pow(radius, 2)).toFixed(2);
  }

  triangles(base: number, height: number) {
    const HALF = 1 / 2;
    return HALF * base * height;
  }
}

// const area = new AreaCalculator();
// console.log(area.squares(10));
// console.log(area.circles(10));
// console.log(area.triangles(10, 50));

/*
3. **Social Media Profile:** Design a class to represent a user's social media profile with properties like username, followers, posts, etc.
*/

interface Post {
  title: string;
  numberOfReaction: number;
}

class UserSocialMediaProfile {
  username: string = "";
  followers: number = 0;
  posts: Post[] = [];

  constructor(username: string, followers: number, posts: Post[]) {
    this.followers = followers;
    this.username = username;
    this.posts = posts;
  }

  newPost(post: Post) {
    this.posts.push(post);
  }
}

// const mobin = new UserSocialMediaProfile("Mobin", 10, [
//   { title: "Hello World", numberOfReaction: 50 },
// ]);
// mobin.newPost({ numberOfReaction: 50, title: "Hello Bangladesh" });
// console.log(mobin);
// mobin.newPost({ numberOfReaction: 5540, title: "Hello sdfgasdfasdfasdf" });
// console.log(mobin);

/*
4. **Inventory Management:** Create a class to manage product inventory, including adding, removing, and updating items.
*/

interface Item {
  id: number;
  title: string;
  price: number;
}

class InventoryManagement {
  item: Item = { id: 0, price: 0, title: "" };
  items: Item[] = [];

  constructor(item: Item, items: Item[]) {
    this.item = item;
    this.items = items;
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  deleteItem(itemID: number) {
    const itemIndex = this.items.findIndex((item) => item.id === itemID);

    if (itemIndex === -1) {
      throw new Error("Item Not Found");
    }

    this.items.splice(itemIndex, 1);
  }

  updateItem(itemID: number, title?: string, price?: number) {
    const modified = this.items.map((item) => {
      if (title) {
        return item.id === itemID ? { ...item, title: title } : item;
      } else if (price) {
        return item.id === itemID ? { ...item, price: price } : item;
      } else {
        return item;
      }
    });

    this.items = modified;
  }
}

const item = new InventoryManagement(
  {
    id: 1,
    price: 100,
    title: "Hello World",
  },
  [
    {
      id: 2,
      price: 100,
      title: "Hello World",
    },
  ]
);

// console.log(item);

item.addItem({
  id: 3,
  price: 23904,
  title: "Hello bangladesh",
});
// console.log(item);
// item.deleteItem(3);
// console.log(item);
// item.updateItem(2, "AMi Mobin");
// item.updateItem(2, undefined, 5000);
// console.log(item);
