const Book = require ('../schema/books');

const addBook = (bookData) => {
    const newBook = new Book(bookData);
    return newBook.save();
}

const findAllBooks = async () => {
    try{
        return await Book.find();
    } catch (err) {
        console.log(err);
        throw new Error ('Erreur lors de la récupération des livres')
    }
};

const getBooksById = async (id) => {
    try{
        return await Book.findById(id)
    }catch (err) {
        console.error(err);
        throw new Error('Erreur lors de la récupération du livre');
    }
};

const deleteBookById = async (id) => {
    try{
        return await Book.findByIdAndDelete(id);

    } catch (err){
        console.error(err);
        throw new Error('Erreur lors de la suppression du livre');
    }
}

const updateBook = async (id, bookData) => {
    try {
        //new renvoie le nouveau changement
        return await Book.findByIdAndUpdate(id, bookData, { new: true }); // Utilisez la méthode findByIdAndUpdate pour mettre à jour le livre par son ID
    } catch (err) {
        console.error(err);
        throw new Error('Erreur lors de la mise à jour du livre');
    }
};

module.exports = {
    addBook,
    findAllBooks,
    getBooksById,
    deleteBookById,
    updateBook
}