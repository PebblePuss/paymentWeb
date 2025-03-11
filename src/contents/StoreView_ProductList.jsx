import StoreViewProductInfo from "../components/StoreView_Product_Info";

const StoreViewProductList = () => {
    const products = [
        { name: "test", price: "9999999999" },
        { name: "test2", price: "9999999999" },
        { name: "test3", price: "9999999999" },
        { name: "test4", price: "9999999999" },
    ]
    return (
        <section>
            {products.map((product) => <StoreViewProductInfo name={product.name} price={product.price} />)}
        </section>
    );
}

export default StoreViewProductList;