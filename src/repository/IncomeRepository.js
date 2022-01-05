import http from 'http';

const API_BASE_URL = 'http://localhost:3000';

class IncomeRepository {
  async makeRequest(url) {
    const request = new Promise((resolve, reject) => {
      let chunks = []
      http.get(url, response => {
        response.on("data", data => {
            chunks.push(data)
        })
        response.on("error", reject)

        response.on("end", () => {
            const data = Buffer.concat(chunks)
            resolve(JSON.parse(data))
        })
      })
    })
    return request
  }

  async getConversions() {
    const response = await this.makeRequest(`${API_BASE_URL}/convert`)
    return response.results;
  }
}

export default IncomeRepository;
