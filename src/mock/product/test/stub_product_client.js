class StubProductClient {
  async fetchItems() {
    return [
      { item: 'Milk', available: false },
      { item: 'Banana', available: true },
    ]
  }
}

module.exports = StubProductClient;