import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name:'Marc',
            email: 'marcjeanb@template.com',
            password: bcrypt.hashSync('123456', 8),
            isAdmin: true,
            isSeller: true,
            seller: {
                name: 'Puma',
                logo: '/images/logo1.png',
                description: 'best seller',
                rating: 4.5,
                numReviews: 120,
            },
        },
        {
            name:'John',
            email: 'john@template.com',
            password: bcrypt.hashSync('123456', 8),
            isAdmin: false,
        }
    ],
    products:[
        {
            name:'Nike Slim T-Shirt',
            category: "Shirts",
            image: '/images/d1.jpg',
            price: 120, countInStock: 10,
            brand: 'Nike',
            rating: 3,
            numReviews: 10,
            description: 'high quality products',
        },
        {
            name:'Nike Shirt',
            category: "Shirts",
            image: '/images/d1.jpg',
            price: 120, countInStock: 20,
            brand: 'Nike',
            rating: 2,
            numReviews: 10,
            description: 'high quality products',
        },
        {
            name:'Nike Short',
            category: "Shirts",
            image: '/images/d1.jpg',
            price: 120, countInStock: 30,
            brand: 'Nike',
            rating: 3.5,
            numReviews: 10,
            description: 'high quality products',
        },
        {
            name:'Adidas Slim Shirt',
            category: "Shirts",
            image: '/images/d1.jpg',
            price: 120, countInStock: 25,
            brand: 'Nike',
            rating: 4,
            numReviews: 10,
            description: 'high quality products',
        },
        {
            name:'Nike shoes',
            category: "Shirts",
            image: '/images/d1.jpg',
            price: 120, countInStock:0,
            brand: 'Nike',
            rating: 5,
            numReviews: 10,
            description: 'high quality products',
        },
    ],
};
export default data;
