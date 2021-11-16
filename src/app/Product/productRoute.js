module.exports = function (app) {
    const product = require("./productController");
    const jwtMiddleware = require("../../../config/jwtMiddleware");

    // 5. Upload a product
    app.post("/app/products", jwtMiddleware, product.postProduct);

    // 6. Get products in range
    app.get("/app/products", jwtMiddleware, product.getProducts);

    // 7. Update the product
    app.patch("/app/products/:productIdx", jwtMiddleware, product.patchProduct);

    // 8. Get the product info
    app.get("/app/products/:productIdx", jwtMiddleware, product.getProduct);

    // 9. Get product categories
    app.get("/app/product-categories", product.getProductCategories);

    // 10. Get products in the category
    app.get("/app/products/categories/:categoryIdx", jwtMiddleware, product.getCategoryProducts);
};
