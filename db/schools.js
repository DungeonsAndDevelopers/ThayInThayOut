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
module.exports = {
    schoolTable
}