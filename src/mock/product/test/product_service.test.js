const ProductService = require('../product_service.js')
const StubProductClient = require('./stub_product_client.js');

describe('ProductSerivce - Stub', () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  })

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items).toEqual([{ item: 'Banana', available: true }])
    expect(items.length).toBe(1)
  })
})