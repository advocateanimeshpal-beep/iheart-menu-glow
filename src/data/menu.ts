// Hot drinks
import coffeeImg from "@/assets/cafe-espresso.jpg";
import latteImg from "@/assets/dish-h2-cafe-latte.jpg";
import flatWhiteImg from "@/assets/dish-h3-flat-white.jpg";
import mochaImg from "@/assets/dish-h4-mocha.jpg";
import hotChocImg from "@/assets/dish-h5-hot-chocolate.jpg";
import chaiImg from "@/assets/dish-h6-masala-chai.jpg";

// Iced drinks
import frappeImg from "@/assets/cafe-frappe-pour.jpg";
import coldBrewImg from "@/assets/dish-i2-cold-brew.jpg";
import icedAmericanoImg from "@/assets/dish-i3-iced-americano.jpg";
import icedLatteImg from "@/assets/dish-i4-iced-latte.jpg";
import mochaFrappeImg from "@/assets/dish-i5-mocha-frappe.jpg";
import lemonTeaImg from "@/assets/dish-i6-lemon-iced-tea.jpg";

// Breakfast
import waffleImg from "@/assets/dish-chicken-waffles.jpg";
import benedictImg from "@/assets/dish-b2-eggs-benedict.jpg";
import avoToastImg from "@/assets/dish-b3-avocado-toast.jpg";
import bigBreakfastImg from "@/assets/dish-b4-big-breakfast.jpg";
import pancakesImg from "@/assets/dish-b5-pancakes.jpg";

// Burgers
import burgerImg from "@/assets/dish-burger.jpg";
import bbqChickenBurgerImg from "@/assets/dish-br2-bbq-chicken-burger.jpg";
import paneerBurgerImg from "@/assets/dish-br3-paneer-burger.jpg";
import mushroomSwissImg from "@/assets/dish-br4-mushroom-swiss-burger.jpg";

// Specialties
import truffleFriesImg from "@/assets/dish-s1-truffle-fries.jpg";
import nachosImg from "@/assets/dish-s2-loaded-nachos.jpg";
import wingsImg from "@/assets/dish-s3-bbq-wings.jpg";
import stuffedMushroomsImg from "@/assets/dish-s4-stuffed-mushrooms.jpg";

// Pasta
import arrabbiataImg from "@/assets/dish-p1-arrabbiata.jpg";
import aglioOlioImg from "@/assets/dish-p2-aglio-olio.jpg";
import alfredoImg from "@/assets/dish-p3-chicken-alfredo.jpg";
import pestoImg from "@/assets/dish-p4-pesto-penne.jpg";

// North Indian
import indianImg from "@/assets/dish-indian.jpg";
import paneerTikkaMasalaImg from "@/assets/dish-n2-paneer-tikka-masala.jpg";
import dalMakhaniImg from "@/assets/dish-n3-dal-makhani.jpg";
import biryaniImg from "@/assets/dish-n4-chicken-biryani.jpg";
import naanImg from "@/assets/dish-n5-garlic-naan.jpg";

// Desserts & Bakery
import brownieImg from "@/assets/dish-brownie.jpg";
import cookieImg from "@/assets/dish-d2-cookie-monster.jpg";
import italianCakeImg from "@/assets/dish-d3-italian-cream-cake.jpg";
import affogatoImg from "@/assets/dish-d4-affogato.jpg";
import applePieImg from "@/assets/dish-d5-apple-pie.jpg";
import cheesecakeImg from "@/assets/dish-d6-cheesecake.jpg";
import cinnamonRollImg from "@/assets/dish-d7-cinnamon-roll.jpg";
import appleMuffinImg from "@/assets/dish-d8-apple-muffin.jpg";
import truffleCakeImg from "@/assets/dish-d9-chocolate-truffle.jpg";
import teaCakeImg from "@/assets/dish-d10-russian-tea-cake.jpg";

export type DietType = "veg" | "non-veg";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  diet: DietType;
  featured?: boolean;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  tagline: string;
  icon: "coffee" | "iced" | "breakfast" | "burger" | "specialty" | "pasta" | "indian" | "dessert";
  groups: { title?: string; items: MenuItem[] }[];
}

export const categories: MenuCategory[] = [
  {
    id: "hot-drinks",
    name: "Hot Drinks",
    tagline: "Brewed slow, served warm",
    icon: "coffee",
    groups: [
      {
        items: [
          { id: "h1", name: "Cappuccino", price: 160, description: "Single shot espresso topped with steamed milk and a thick layer of velvety microfoam.", diet: "veg", image: coffeeImg },
          { id: "h2", name: "Cafe Latte", price: 170, description: "Smooth espresso pulled into silky steamed milk with a delicate layer of foam.", diet: "veg", image: latteImg },
          { id: "h3", name: "Flat White", price: 180, description: "Double ristretto shots married with finely textured milk.", diet: "veg", image: flatWhiteImg },
          { id: "h4", name: "Mocha", price: 190, description: "Espresso, steamed milk and rich Belgian dark chocolate.", diet: "veg", image: mochaImg },
          { id: "h5", name: "Hot Chocolate", price: 180, description: "House-made dark chocolate steamed into milk, finished with cocoa dust.", diet: "veg", image: hotChocImg },
          { id: "h6", name: "Masala Chai", price: 90, description: "Slow-simmered Assam tea with cardamom, ginger, clove and a hint of black pepper.", diet: "veg", image: chaiImg },
        ],
      },
    ],
  },
  {
    id: "iced-drinks",
    name: "Iced Drinks",
    tagline: "Cold-poured, hand-shaken",
    icon: "iced",
    groups: [
      {
        items: [
          { id: "i1", name: "Turtle Frappe", price: 260, description: "Our signature blend — espresso, caramel, chocolate and pecan ribbons over ice, crowned with cream.", diet: "veg", featured: true, image: frappeImg },
          { id: "i2", name: "Cold Brew", price: 200, description: "18-hour slow-steeped coffee, bottled and served over a single large cube.", diet: "veg", image: coldBrewImg },
          { id: "i3", name: "Iced Americano", price: 150, description: "Double espresso poured over chilled water and ice.", diet: "veg", image: icedAmericanoImg },
          { id: "i4", name: "Iced Latte", price: 180, description: "Espresso, cold milk and a long pour over ice.", diet: "veg", image: icedLatteImg },
          { id: "i5", name: "Mocha Frappe", price: 240, description: "Espresso blended with milk, ice and dark chocolate.", diet: "veg", image: mochaFrappeImg },
          { id: "i6", name: "Lemon Iced Tea", price: 140, description: "Black tea, fresh lemon, mint and a touch of honey.", diet: "veg", image: lemonTeaImg },
        ],
      },
    ],
  },
  {
    id: "breakfast",
    name: "Breakfast",
    tagline: "All day, every day",
    icon: "breakfast",
    groups: [
      {
        items: [
          { id: "b1", name: "Chicken & Waffles", price: 360, description: "Buttermilk-fried chicken on golden Belgian waffles, drizzled with maple-chili syrup.", diet: "non-veg", featured: true, image: waffleImg },
          { id: "b2", name: "Classic Eggs Benedict", price: 320, description: "Poached eggs on toasted brioche with house hollandaise and crispy bacon.", diet: "non-veg", image: benedictImg },
          { id: "b3", name: "Avocado Toast", price: 280, description: "Sourdough, smashed avocado, chili flakes, lemon zest and pumpkin seeds.", diet: "veg", image: avoToastImg },
          { id: "b4", name: "Big iheart Breakfast", price: 380, description: "Eggs your way, sausages, hash browns, beans, mushrooms and toast.", diet: "non-veg", image: bigBreakfastImg },
          { id: "b5", name: "Pancake Stack", price: 240, description: "Fluffy buttermilk pancakes with maple syrup and seasonal berries.", diet: "veg", image: pancakesImg },
        ],
      },
    ],
  },
  {
    id: "burgers",
    name: "Burgers",
    tagline: "Stacked, sauced, served hot",
    icon: "burger",
    groups: [
      {
        items: [
          { id: "br1", name: "iheart Classic Burger", price: 320, description: "House-ground patty, cheddar, caramelised onions, lettuce, tomato in a toasted brioche bun.", diet: "non-veg", image: burgerImg },
          { id: "br2", name: "Smoky BBQ Chicken", price: 340, description: "Grilled chicken, smoky BBQ glaze, bacon, crispy onions and slaw.", diet: "non-veg", image: bbqChickenBurgerImg },
          { id: "br3", name: "Paneer Tikka Burger", price: 280, description: "Spiced paneer patty, mint mayo, pickled onions, served with masala fries.", diet: "veg", image: paneerBurgerImg },
          { id: "br4", name: "Mushroom & Swiss", price: 290, description: "Portobello & cremini patty with melted Swiss and truffle aioli.", diet: "veg", image: mushroomSwissImg },
        ],
      },
    ],
  },
  {
    id: "specialties",
    name: "Specialties",
    tagline: "Chef's curated plates",
    icon: "specialty",
    groups: [
      {
        items: [
          { id: "s1", name: "Truffle Fries", price: 240, description: "Hand-cut potatoes tossed in truffle oil, parmesan and chives.", diet: "veg", image: truffleFriesImg },
          { id: "s2", name: "Loaded Nachos", price: 280, description: "Crisp tortillas, melted cheese, jalapeños, salsa, sour cream and guacamole.", diet: "veg", image: nachosImg },
          { id: "s3", name: "BBQ Chicken Wings", price: 320, description: "Slow-cooked wings glazed in smoky BBQ sauce, served with blue cheese dip.", diet: "non-veg", image: wingsImg },
          { id: "s4", name: "Stuffed Mushrooms", price: 260, description: "Button mushrooms baked with herbed cream cheese and breadcrumbs.", diet: "veg", image: stuffedMushroomsImg },
        ],
      },
    ],
  },
  {
    id: "pasta",
    name: "Pasta",
    tagline: "Hand-tossed Italian comfort",
    icon: "pasta",
    groups: [
      {
        items: [
          { id: "p1", name: "Penne Arrabbiata", price: 280, description: "Penne in a fiery tomato, garlic and red chili sauce, finished with basil.", diet: "veg", image: arrabbiataImg },
          { id: "p2", name: "Spaghetti Aglio e Olio", price: 260, description: "Garlic, olive oil, parsley and chili flakes — Roman simplicity.", diet: "veg", image: aglioOlioImg },
          { id: "p3", name: "Chicken Alfredo", price: 340, description: "Fettuccine in a creamy parmesan sauce with grilled chicken.", diet: "non-veg", image: alfredoImg },
          { id: "p4", name: "Pesto Penne", price: 290, description: "House-made basil pesto, sun-dried tomatoes and pine nuts.", diet: "veg", image: pestoImg },
        ],
      },
    ],
  },
  {
    id: "north-indian",
    name: "North Indian",
    tagline: "From the tandoor and the chulha",
    icon: "indian",
    groups: [
      {
        items: [
          { id: "n1", name: "Butter Chicken", price: 360, description: "Tandoor-grilled chicken in a velvety tomato, cashew and cream gravy.", diet: "non-veg", image: indianImg },
          { id: "n2", name: "Paneer Tikka Masala", price: 320, description: "Charred paneer in a rich, spiced onion-tomato gravy.", diet: "veg", image: paneerTikkaMasalaImg },
          { id: "n3", name: "Dal Makhani", price: 280, description: "Black lentils slow-cooked overnight with butter and cream.", diet: "veg", image: dalMakhaniImg },
          { id: "n4", name: "Chicken Biryani", price: 340, description: "Long-grain basmati layered with marinated chicken, saffron and fried onions.", diet: "non-veg", image: biryaniImg },
          { id: "n5", name: "Garlic Naan", price: 70, description: "Tandoor-baked leavened bread brushed with garlic butter.", diet: "veg", image: naanImg },
        ],
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts & Bakery",
    tagline: "House-baked, freshly glazed",
    icon: "dessert",
    groups: [
      {
        title: "Sweets (with Egg)",
        items: [
          { id: "d1", name: "Brownie Sundae", price: 290, description: "Warm fudge brownie under vanilla bean ice cream, hot chocolate sauce and toasted nuts.", diet: "veg", featured: true, image: brownieImg },
          { id: "d2", name: "Cookie Monster", price: 280, description: "Warm chocolate-chip cookie skillet topped with vanilla ice cream and chocolate drizzle.", diet: "veg", image: cookieImg },
          { id: "d3", name: "Italian Cream Cake", price: 240, description: "Layered sponge with cream, coconut and pecans.", diet: "veg", image: italianCakeImg },
          { id: "d4", name: "Affogato", price: 190, description: "A scoop of vanilla ice cream drowned in a hot espresso shot.", diet: "veg", image: affogatoImg },
        ],
      },
      {
        title: "Eggless Sweets",
        items: [
          { id: "d5", name: "Apple Pie with Ice Cream", price: 290, description: "Cinnamon-spiced apple pie, warm crust, served with vanilla ice cream.", diet: "veg", image: applePieImg },
          { id: "d6", name: "Eggless Cheesecake", price: 270, description: "New York-style baked cheesecake on a graham crust, berry compote.", diet: "veg", image: cheesecakeImg },
          { id: "d7", name: "Cinnamon Roll", price: 175, description: "Soft swirled bun glazed with cream cheese frosting.", diet: "veg", image: cinnamonRollImg },
        ],
      },
      {
        title: "From the Bakery",
        items: [
          { id: "d8", name: "Apple Cinnamon Jumbo Muffin", price: 185, description: "Oversized buttery muffin folded with apple chunks and cinnamon sugar.", diet: "veg", image: appleMuffinImg },
          { id: "d9", name: "Chocolate Truffle", price: 100, description: "Single-serve dark chocolate truffle slice, ganache topped.", diet: "veg", image: truffleCakeImg },
          { id: "d10", name: "Russian Tea Cake", price: 35, description: "Buttery shortbread rolled in powdered sugar.", diet: "veg", image: teaCakeImg },
        ],
      },
    ],
  },
];
