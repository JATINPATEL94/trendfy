import ProductContext from "./productContext";
import { useState } from "react";

const ProductState = (props) => {
  // view product Functionality
  const [viewProductData, isViewProductData] = useState("");

  // Function to get a random subset of products
  const getRandomProducts = (count) => {
    const shuffledProducts = products.sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, count);
  };

  // Cart items
  const [cart, setCart] = useState([]);

  // All Products
  const products = [
    {
      image: "vgkto97up3w1doo4o47m",
      name: "Cartoon Astronaut Shirts",
      companyName: "Puma",
      rating: 4,
      price: 799,
      description:
        "These Cartoon Astronaut Shirts by Puma are crafted with high-quality cotton for exceptional comfort. The unique design featuring cartoon astronauts adds a playful and creative touch to your wardrobe. Perfect for casual outings and everyday wear, these shirts are a must-have for those who appreciate style with a hint of fun.",
    },
    {
      image: "o8dkzpruoe2hduuvauft",
      name: "Stylish Casual Shirt",
      companyName: "Puma",
      rating: 3,
      price: 679,
      description:
        "Elevate your fashion game with this Stylish Casual Shirt from Puma. Made from a blend of cotton and polyester, this shirt combines comfort with a trendy design. The carefully tailored fit makes it ideal for a night out with friends or a casual day at the office. Stay stylish and comfortable all day long.",
    },
    {
      image: "bzxqraf9ylwtzhnvp8ft",
      name: "Summer Men's Shirt",
      companyName: "Adidas",
      rating: 5,
      price: 1024,
      description:
        "Embrace the summer vibes with this Men's Shirt from Adidas. Crafted with lightweight and breathable fabric, this shirt is designed to keep you cool during the warmer months. The vibrant colors and modern design make it a perfect choice for casual summer gatherings or a day at the beach. Stay cool and stylish with Adidas.",
    },
    {
      image: "uwftq0hichymaas4xdbv",
      name: "Cool Men's Shirt",
      companyName: "Reebok",
      rating: 4,
      price: 899,
      description:
        "Stay cool and confident with this Cool Men's Shirt from Reebok. The moisture-wicking fabric ensures you stay dry and comfortable throughout the day, making it ideal for workouts or casual outings. The sleek design and breathable material make it a versatile addition to your wardrobe. Elevate your style with Reebok.",
    },
    {
      image: "gbj1exd5x6djv9ahyd3z",
      name: "Men's Winter Shirt",
      companyName: "Under Armour",
      rating: 4,
      price: 1199,
      description:
        "Conquer the winter chill with this Men's Winter Shirt from Under Armour. Designed for warmth and comfort, the shirt is made from a blend of fleece and cotton, providing insulation without sacrificing style. Whether you're heading outdoors or just staying cozy indoors, this shirt is a winter essential.",
    },
    {
      image: "mev6xrwm8nnk3agirrqr",
      name: "Classic Men's Polo",
      companyName: "Lacoste",
      rating: 5,
      price: 899,
      description:
        "Experience timeless elegance with this Classic Men's Polo from Lacoste. The iconic crocodile logo and high-quality cotton construction make this polo a symbol of refined style. Suitable for both casual and semi-formal occasions, this shirt is a wardrobe staple for the modern gentleman.",
    },
    {
      image: "uspfpsrewdluqypb0cyl",
      name: "Women's Denim Shorts",
      companyName: "Puma",
      rating: 3,
      price: 599,
      description:
        "Step out in style with these Women's Denim Shorts from Puma. The high-quality denim fabric provides both durability and comfort, while the trendy design adds a touch of flair to your summer wardrobe. Perfect for casual outings, these shorts are a versatile and fashionable choice for the modern woman.",
    },
    {
      image: "z797ybnv6lz7l0luwc0r",
      name: "Men's Casual Shirts",
      companyName: "Adidas",
      rating: 4,
      price: 699,
      description:
        "Elevate your casual wardrobe with these Men's Casual Shirts from Adidas. The breathable cotton blend ensures comfort, while the modern design adds a contemporary touch. Whether you're meeting friends or running errands, these shirts provide a stylish and laid-back look for any occasion.",
    },
    {
      image: "i2g9n6ejh6jggsk5wvzi",
      name: "Women's Formal",
      companyName: "North Face",
      rating: 5,
      price: 1299,
      description:
        "Make a statement with this Women's Formal Shirt from North Face. The sophisticated design and high-quality fabric make it suitable for formal occasions, ensuring you look elegant and polished. Whether it's a business meeting or a special event, this shirt is a perfect choice for the modern and confident woman.",
    },
    {
      image: "bm1blt4mc2tdlrywaxur",
      name: "Women's Denim",
      companyName: "Levi's",
      rating: 3,
      price: 549,
      description:
        "Stay on trend with these Women's Denim Pants from Levi's. The classic denim fabric and versatile design make these pants a go-to choice for casual days. Whether you're pairing them with a T-shirt or a blouse, these denim pants effortlessly combine style and comfort for a laid-back yet fashionable look.",
    },
    {
      image: "cschm2aiihr7mb1h9rwh",
      name: "Boy's White Shirt",
      companyName: "Reebok",
      rating: 4,
      price: 699,
      description:
        "Dress your little one in style with this Boy's White Shirt from Reebok. The comfortable cotton fabric and classic design make it suitable for both casual and semi-formal occasions. Whether it's a family gathering or a school event, this shirt ensures your young gentleman looks smart and stylish.",
    },
    {
      image: "aaq8ixze9ubzegieqnbx",
      name: "Boy's Sports Shirt",
      companyName: "Adidas",
      rating: 5,
      price: 599,
      description:
        "Encourage an active lifestyle with this Boy's Sports Shirt from Adidas. The moisture-wicking fabric and sporty design make it ideal for various physical activities, from playing sports to outdoor adventures. Keep your little athlete comfortable and stylish with this versatile sports shirt.",
    },
    {
      image: "qsejqpcw5y9of2oeewbj",
      name: "Men's Classic Shirt",
      companyName: "Tommy Hilfiger",
      rating: 4,
      price: 899,
      description:
        "Achieve a timeless look with this Men's Classic Shirt from Tommy Hilfiger. The premium cotton fabric and meticulous craftsmanship reflect the brand's commitment to quality. Whether you're dressing up for a special occasion or adding sophistication to your everyday style, this classic shirt is a wardrobe essential.",
    },
    {
      image: "klatzd2mhxef1gomq1oi",
      name: "Men's Brown Shirt ",
      companyName: "Calvin Klein",
      rating: 3,
      price: 799,
      description:
        "Add a touch of sophistication to your wardrobe with this Men's Brown Shirt from Calvin Klein. The rich brown color and modern design make it a versatile choice for various occasions. Whether you're heading to the office or a casual gathering, this shirt ensures you look polished and on-trend.",
    },
    {
      image: "vtaouexsscjmi1cfj9fu",
      name: "Men's Active Shorts",
      companyName: "Under Armour",
      rating: 4,
      price: 849,
      description:
        "Stay active and comfortable with these Men's Active Shorts from Under Armour. The moisture-wicking fabric and breathable design make them perfect for workouts and outdoor activities. Whether you're hitting the gym or going for a run, these active shorts provide the flexibility and style you need for an active lifestyle.",
    },
    {
      image: "kojc786ha26ao6whxk1r",
      name: "Man's Simple Shirt",
      companyName: "Zara",
      rating: 5,
      price: 1199,
      description:
        "Discover simplicity and versatility with this Man's Simple Shirt from Zara. The clean and minimalistic design makes it a perfect wardrobe staple for various occasions. Made from high-quality fabric, this shirt ensures comfort and style go hand in hand. Whether you're dressing up or keeping it casual, this simple shirt is a timeless choice.",
    },
  ];

  return (
    <ProductContext.Provider
      value={{
        viewProductData,
        isViewProductData,
        getRandomProducts,
        cart,
        setCart,
        products,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
