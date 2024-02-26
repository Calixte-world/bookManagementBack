//importer le bookModelMongo.js
// Gère la logique de traitement des requêtes HTTP et envoie les réponses appropriées. Il utilise le modèle pour les opérations de données.


const bookModelMongo = require ('../models/bookModelMongo')

const postBooks = async (req, res) =>{
    try {
        const newBook = await bookModelMongo.addBook(req.body);
        res.status(200).send({
            message: 'Données ajoutées avec succès',
            data: newBook,
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Erreur lors de l\'ajout des données', details: err.message });
    }
};

const getBooks = async (req, res) =>{
    try {
        const books = await bookModelMongo.findAllBooks(req.body);
        res.status(200).send({
            message: 'Livres récupérés avec succès',
            data: books,
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Erreur lors de la récupération des livres', details: err.message });
    }
};

const getBooksId = async (id) => {
    try{
        const books = await bookModelMongo.findById(id);
    } catch (err) {
        console.error(err);
        throw new Error ('Erreur lors de la recuparation du livre')
    }
}

//delete book by id
const deleteBook = async (req, res) => {
    try {
        const book = await bookModelMongo.deleteBookById(req.params.id);
        if (!book) {
            // Livre non trouvé, renvoyer une erreur 404
            return res.status(404).send({ error: 'Livre non trouvé' });
        }
        res.status(200).send({
            message: 'Livre supprimé avec succès',
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Erreur lors de la suppression du livre', details: err.message });
    }
}


const updateBook = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try {
        const updatedBook = await bookModelMongo.updateBook(id, newData); // Appelez la fonction updateBook du modèle de carte
        res.status(200).send({
            message: 'livres mise à jour avec succès',
            data: updatedBook,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Erreur lors de la mise à jour du livre', details: err.message });
    }
};
module.exports = {
    postBooks,
    getBooks,
    getBooksId,
    deleteBook,
    updateBook
}