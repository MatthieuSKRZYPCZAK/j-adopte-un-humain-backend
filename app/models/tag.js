const Core = require('./core');
const client = require('../service/dbClient');

class Tag extends Core {
    static tableName = 'tag';

    constructor(obj){
        super(obj);
        this.id = obj.id;
        this.name = obj.name;
    }
    // Permet de vérifier si ca existe
    async checkTag() {
        const sqlQuery = "SELECT * FROM \"tag\" WHERE name=$1";
        const values = [this.name];
        const response = await client.query(sqlQuery, values);
        // si j'ai une réponse c'est que l'utilisateur a été trouvé en BDD
        if (response.rows.length == 1) {
            return true;
        }
        else {
            return false;
        }
    }
}

module.exports = Tag;