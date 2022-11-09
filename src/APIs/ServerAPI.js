export default class Server {
  constructor() {
    this.address = 'http://localhost:3000/recipes'
  }

  async fetchRecipes() {
    try {
      const request = await fetch(this.address);
      const response = await request.json()
      return response;
    } catch(error) {
      throw new Error(`ERROR. Cannot access the database. ${error}`);
    }
  }

  async addRecipe(data) {
    try {
      const response = await fetch(this.address, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      return response.json();
    } catch(error) {
      throw new Error(`ERROR. Cannot add the recipe. ${error}`);
    }
  }
  
  async removeRecipe(item) {
    try {
      fetch(`${this.address}/${item}`, { 
        method: 'DELETE' 
      })
    } catch(error) {
      throw new Error(`ERROR. Cannot delete the recipe. ${error}`);
    }
  }
}
