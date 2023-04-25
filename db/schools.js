const client = require('./client')
const schoolTable = async (name) => {
    try{
        const { row:[school] } = await client.query(`
        INSERT INTO schools(name)
        VALUE($1)
        RETURNING *;
        `,[name])
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

