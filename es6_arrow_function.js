const names = ["Oscar", "Hugo", "Pope"];

        // Arrow function are anonymous function
        const fullName = names.map(name => `${name} Smith`); // implicit return
        console.table(fullName);

        const sayJavascript = (text) => { alert(`ES6 arrow function ${text}`)};
        sayJavascript('Javascript');

        // Implicit Return with object literal
        const race = "100m race";
        const winners = ['Usian Bold', 'Tyson Gay', 'Justin Gatlin'];
        const winner = winners.map((winner, index) => ({winner, race, place: index + 1}));
        console.table(winner)

        const ages = [23, 53, 67, 88, 92, 12, 34, 55, 66];
        const older55 = ages.filter(age => (age >= 55));
        console.log(older55);

        // Default Function Arguments
        function calculateBill(total, tax = 0.15, tip = 0.2) {
            return total + (total * tax) + (total * tip);
        }

        const totalBill = calculateBill(100, undefined, 0.25);
        console.log(`Total Bill for the meal is : £${totalBill}`);

        // ************** When not to use arrow function ************** //
        const button = document.querySelector("#push");
        /*button.addEventListener('click', () => {
            console.log(this); // this is not bound to when we use arrow function
            this.classList.toggle('on');
        }); */

        // use regular function when to access this keyword
        button.addEventListener('click', function() {
            console.log(this); 
            this.classList.toggle('on');
        });

        // when you need a method to bind to an object
        const person = {
            points: 23,
            score() {
                console.log(this);
                this.points++;
            }
        };

        // When you need to add prototype method
        class Animal {
            constructor(type, colour) {
                this.type   = type;
                this.colour = colour;
            }
        }

        const dog = new Animal('Dog', "Brown");
        const cat = new Animal('Cat', "White");

        Animal.prototype.summarize = function() {
            return `This animal is a ${this.type} and it's color is ${this.colour}`;
        };
        console.log(dog.summarize());
        console.log(cat.summarize());

        // When you need arguments object:
        const orderChildren = function() {
            const children = Array.from(arguments);
            return children.map((child, i) => {
                return `${child} was child #${i + 1}`;
            })
        };

       console.log(orderChildren("Tashi", "Nyima", "Tara"));
        // ************** When not to use arrow function ************** //