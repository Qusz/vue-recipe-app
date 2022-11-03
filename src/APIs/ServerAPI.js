export default class Server {
  constructor() {
    this.address = 'http://localhost:3000/recipes'
  }

  async fetchRecipes() {
    const request = await fetch(this.address);
    const response = await request.json()
    return response;
  }

  async addRecipe(data) {
    const response = await fetch(this.address, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return response.json();
  }
  
  async removeRecipe(item) {
    fetch(`${this.address}/${item}`, { 
      method: 'DELETE' 
    })
  }
}
