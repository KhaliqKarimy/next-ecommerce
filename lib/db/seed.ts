import data from "@/lib/data";
import { connectToDatabase } from ".";
import Product from "./models/product.model";
import { cwd } from 'process';
import { loadEnvConfig } from "@next/env";


const main = async () => {
    try{
        const { products }  = data
        await connectToDatabase()
        await Product.deleteMany()
        const createdProduct = await Product.insertMany(products)
        console.log({createdProduct, message:'Seeded database successfully'})
        process.exit(0)
    }catch(error){
        console.error(error)
        throw new Error ("Failed to seed database")
    }

}

main()