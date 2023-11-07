const { db } = require('../config/firebase')

const {collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc,} = require('firebase/firestore');


// Create Products
exports.createProduct = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, 'products'), data);
    res.status(200).send('product created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Get all products
exports.getProducts = async (req, res, next) => {
    try {
      const products = await getDocs(collection(db, 'products'));
      const productArray = [];
  
      if (products.empty) {
        res.status(400).send('No Products found');
      } else {
        products.forEach((doc) => {
          const product = new Product(
            doc.id,
            doc.data().name,
            doc.data().price,
            doc.data().retailer,
            doc.data().amountInStock,
          );
          productArray.push(product);
        });
  
        res.status(200).send(productArray);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
};

//Get product by id
exports.getProduct = async (req, res, next) => {
    try {
      const id = req.params.id;
      const product = doc(db, 'products', id);
      const data = await getDoc(product);
      if (data.exists()) {
        res.status(200).send(data.data());
      } else {
        res.status(404).send('product not found');
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
};

//Update product by id
exports.updateProduct = async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const product = doc(db, 'products', id);
      await updateDoc(product, data);
      res.status(200).send('product updated successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
};

// And finally, the delete product function
exports.deleteProduct = async (req, res, next) => {
    try {
      const id = req.params.id;
      await deleteDoc(doc(db, 'products', id));
      res.status(200).send('product deleted successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

exports.getAllProducts = (req, res)=>{
    res.status(200).json({message : "Route is working fine!"})
}