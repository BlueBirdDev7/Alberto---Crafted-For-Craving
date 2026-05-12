import inferno from "@/assets/inferno-burger.jpg";
import pepperoni from "@/assets/pepperoni-pizza.jpg";
import cornDog from "@/assets/corn-dog.jpg";
import bbq from "@/assets/bbq-burger.jpg";
import mango from "@/assets/mango-smoothie.jpg";
import berry from "@/assets/berry-shake.jpg";
import mojito from "@/assets/mojito.jpg";
import lava from "@/assets/lava-cake.jpg";
import redVelvet from "@/assets/red-velvet.jpg";
import cheesecake from "@/assets/cheesecake.jpg";
import churros from "@/assets/churros.jpg";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export const signatureDishes = {
  featured: { name: "Inferno Stack Burger", description: "Double flame-grilled patties, molten pepper jack, jalapeño confit & smoked chipotle drizzle on a glazed brioche.", price: "$18", image: inferno },
  items: [
    { name: "Royal Pepperoni Pizza", description: "Hand-stretched sourdough, San Marzano sugo, aged mozzarella & spicy crowned pepperoni.", price: "$16", image: pepperoni },
    { name: "Crispy Volcano Corn Dog", description: "Golden cornbread crust, melted mozzarella core, brushed with sweet-fire glaze.", price: "$9", image: cornDog },
    { name: "Smoky BBQ Burger", description: "Bourbon BBQ, applewood bacon and caramelised onions stacked on a buttered bun.", price: "$15", image: bbq },
  ] as MenuItem[],
};

export const signatureDrinks = {
  featured: { name: "Mango Sunset Smoothie", description: "Velvety Alphonso mango layered with cold pressed orange and a whisper of vanilla cream.", price: "$8", image: mango },
  items: [
    { name: "Berry Velvet Shake", description: "Wild berries blended with creamy gelato, crowned with whipped silk.", price: "$8", image: berry },
    { name: "Citrus Spark Mojito", description: "Crisp lime, sugarcane and bruised mint over hand-cracked ice.", price: "$7", image: mojito },
  ] as MenuItem[],
};

export const signatureDesserts = {
  featured: { name: "Chocolate Lava Dream", description: "Warm dark chocolate cake with a flowing molten heart, vanilla bean gelato.", price: "$10", image: lava },
  items: [
    { name: "Red Velvet Bliss", description: "Cocoa-kissed sponge layered with whipped cream cheese frosting.", price: "$9", image: redVelvet },
    { name: "Lotus Crunch Cheesecake", description: "Silky cheesecake on a buttery biscoff base, finished with caramel.", price: "$9", image: cheesecake },
    { name: "Golden Churro Bites", description: "Cinnamon-sugar churros served with a pool of dark chocolate.", price: "$7", image: churros },
  ] as MenuItem[],
};

export const fullMenu = [
  {
    category: "Signature Burgers",
    items: [
      { name: "Inferno Stack Burger", description: "Double patty, pepper jack, chipotle drizzle.", price: "$18", image: inferno },
      { name: "Smoky BBQ Burger", description: "Bourbon BBQ, bacon, caramelised onion.", price: "$15", image: bbq },
    ],
  },
  {
    category: "Wood-Fired Pizzas",
    items: [
      { name: "Royal Pepperoni", description: "Spicy pepperoni, aged mozzarella, basil.", price: "$16", image: pepperoni },
    ],
  },
  {
    category: "Street Cravings",
    items: [
      { name: "Crispy Volcano Corn Dog", description: "Cornbread crust, mozzarella core, sweet-fire glaze.", price: "$9", image: cornDog },
    ],
  },
  {
    category: "Drinks",
    items: [
      { name: "Mango Sunset Smoothie", description: "Alphonso mango, vanilla cream.", price: "$8", image: mango },
      { name: "Berry Velvet Shake", description: "Wild berries, gelato, whipped silk.", price: "$8", image: berry },
      { name: "Citrus Spark Mojito", description: "Lime, sugarcane, bruised mint.", price: "$7", image: mojito },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Chocolate Lava Dream", description: "Molten dark chocolate, vanilla gelato.", price: "$10", image: lava },
      { name: "Red Velvet Bliss", description: "Cream cheese frosting layered sponge.", price: "$9", image: redVelvet },
      { name: "Lotus Crunch Cheesecake", description: "Biscoff base, caramel finish.", price: "$9", image: cheesecake },
      { name: "Golden Churro Bites", description: "Cinnamon sugar, dark chocolate dip.", price: "$7", image: churros },
    ],
  },
];
