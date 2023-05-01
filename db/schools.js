const client = require('./client')
const schoolTable = async (name, imageURL) => {
    try{
        const { row:[school] } = await client.query(`
        INSERT INTO schools(name, image)
        VALUE($1, $2)
        RETURNING *;
        `,[name, imageURL])
        return school
    }catch(err){
        throw err;
    }
}

const getAllSchools = async () => {
    const { rows } = await client.query(`
        SELECT * FROM schools;
    `);
    return rows;
}

module.exports = {
    schoolTable,
    getAllSchools
}

