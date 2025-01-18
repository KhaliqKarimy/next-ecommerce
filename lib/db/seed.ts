import data from "@/lib/data";
import { connectToDatabase } from ".";
import Product from "./models/product.model";
// import { cwd } from 'process';
// import { loadEnvConfig } from "@next/env";
import User from "./models/user.model";

const main = async () => {
  try {
    const { products, users } = data;
    await connectToDatabase();

    await User.deleteMany();
    const createdUser = await User.insertMany(users);

    await Product.deleteMany();
    const createdProduct = await Product.insertMany(products);

    console.log({
        createdUser,
        createdProduct,
         message: "Seeded database successfully" });
    process.exit(0);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

main();
