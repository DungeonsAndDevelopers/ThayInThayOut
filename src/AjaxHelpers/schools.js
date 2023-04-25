const fetchAllSchools = async (setter) => {
    try {
        const response = fetch('/api/schools');
        const result = await response.json();
        setter(result);
        
    } catch (error) {
        throw error;
    }
}

export default fetchAllSchools;