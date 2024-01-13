/*

1. **Library Catalog:** Create a library catalog system that manages books, their titles, authors, and availability.

*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var LibraryCatalog = /** @class */ (function () {
    function LibraryCatalog(bookName, title, authors, available) {
        this.bookName = bookName;
        this.title = title;
        this.authors = authors;
        this.available = available;
        this.bookName = bookName;
        this.title = title;
        this.authors = authors;
        this.available = available;
    }
    LibraryCatalog.prototype.getBookInfo = function () {
        console.log("This Books (".concat(this.bookName, ") author name is ").concat(this.authors, " ."));
    };
    return LibraryCatalog;
}());
/*
2. **Geometry Calculator:** Build a class to calculate area and perimeter for various shapes like squares, circles, triangles, etc.
*/
var AreaCalculator = /** @class */ (function () {
    function AreaCalculator() {
    }
    AreaCalculator.prototype.squares = function (side) {
        return Math.pow(side, 2);
    };
    AreaCalculator.prototype.circles = function (radius) {
        return +(Math.PI * Math.pow(radius, 2)).toFixed(2);
    };
    AreaCalculator.prototype.triangles = function (base, height) {
        var HALF = 1 / 2;
        return HALF * base * height;
    };
    return AreaCalculator;
}());
var UserSocialMediaProfile = /** @class */ (function () {
    function UserSocialMediaProfile(username, followers, posts) {
        this.username = "";
        this.followers = 0;
        this.posts = [];
        this.followers = followers;
        this.username = username;
        this.posts = posts;
    }
    UserSocialMediaProfile.prototype.newPost = function (post) {
        this.posts.push(post);
    };
    return UserSocialMediaProfile;
}());
var InventoryManagement = /** @class */ (function () {
    function InventoryManagement(item, items) {
        this.item = { id: 0, price: 0, title: "" };
        this.items = [];
        this.item = item;
        this.items = items;
    }
    InventoryManagement.prototype.addItem = function (item) {
        this.items.push(item);
    };
    InventoryManagement.prototype.deleteItem = function (itemID) {
        var itemIndex = this.items.findIndex(function (item) { return item.id === itemID; });
        if (itemIndex === -1) {
            throw new Error("Item Not Found");
        }
        this.items.splice(itemIndex, 1);
    };
    InventoryManagement.prototype.updateItem = function (itemID, title, price) {
        var modified = this.items.map(function (item) {
            if (title) {
                return item.id === itemID ? __assign(__assign({}, item), { title: title }) : item;
            }
            else if (price) {
                return item.id === itemID ? __assign(__assign({}, item), { price: price }) : item;
            }
            else {
                return item;
            }
        });
        this.items = modified;
    };
    return InventoryManagement;
}());
var item = new InventoryManagement({
    id: 1,
    price: 100,
    title: "Hello World"
}, [
    {
        id: 2,
        price: 100,
        title: "Hello World"
    },
]);
// console.log(item);
item.addItem({
    id: 3,
    price: 23904,
    title: "Hello bangladesh"
});
// console.log(item);
// item.deleteItem(3);
// console.log(item);
// item.updateItem(2, "AMi Mobin");
// item.updateItem(2, undefined, 5000);
// console.log(item);
/*
5. **School Management System:** Develop a class to handle student records, courses, grades, and attendance.
*/
var SchoolManagement = /** @class */ (function () {
    function SchoolManagement() {
    }
    return SchoolManagement;
}());
/*
6. **Employee Directory:** Build a class to manage employee information such as name, position, salary, and department.
  
7. **Vehicle Rental Service:** Design a class system to manage vehicles available for rent, their types, availability, and rental details.
  
8. **Banking Transactions:** Create a class to handle banking transactions such as deposits, withdrawals, transfers, and account balances.
  
9. **Online Shopping Cart:** Build a class to manage a shopping cart, adding items, removing items, calculating totals, and applying discounts.
  
10. **Weather App:** Design a class to fetch and display weather information, including temperature, humidity, and forecasts for different locations.

These problems cover a range of scenarios where using TypeScript classes can help structure and manage data effectively. They provide ample opportunities to practice implementing classes, properties, methods, and interactions between different class instances.

*/
