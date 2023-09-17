// Sample product data
const products = [
    { name: 'Smartwatch', description: 'Beautiful Smartwatch', price: 19.99, imageUrl: 'Image/product1.webp' },

    { name: 'Premium Headphone', description: 'Orange Earphone premium quality.', price: 29.99, imageUrl: 'Image/product2.webp' },

    { name: 'Black Sunglass', description: 'Black sunglasses for men. UV protected.', price: 39.99, imageUrl: 'Image/product3.webp' },
    { name: 'Casual Headphone', description: 'Headphone made for girls', price: 49.99, imageUrl: 'Image/product4.webp' },
    { name: 'RC Car', description: 'Remote Control car. Age: 4-14', price: 54.99, imageUrl: 'Image/product5.webp' },
    { name: 'Premium Watch', description: 'Premium Classic watch for men', price: 69.99, imageUrl: 'Image/product6.webp' },
    { name: 'Laptop', description: 'Core i-9 laptop with 32gb ram and 1TB SSD', price: 1579.99, imageUrl: 'Image/product7.webp' },
    { name: 'Sneakers', description: 'Stylish sneakers at good price', price: 89.99, imageUrl: 'Image/product8.webp' },
    // Add more products as needed
];

// Function to create a product card
function createProductCard(product) {
    const productCard = document.createElement('section');
    productCard.classList.add('product');

    const image = document.createElement('img');
    image.src = product.imageUrl;
    image.alt = product.name;

    const productName = document.createElement('h2');
    productName.textContent = product.name;

    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;

    const productPrice = document.createElement('p');
    productPrice.textContent = `Price: $${product.price.toFixed(2)}`;

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';

    productCard.appendChild(image);
    productCard.appendChild(productName);
    productCard.appendChild(productDescription);
    productCard.appendChild(productPrice);
    productCard.appendChild(addToCartButton);

    return productCard;
}

// Function to populate products
function populateProducts() {
    const productContainer = document.querySelector('.product-container');

    products.forEach(product => {
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
    });
}

// Populate products when the page loads
populateProducts();
