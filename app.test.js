const { main } = require('./app')

describe('main', () => {
    it('should export main function', () => {
        expect(main).toBeDefined()
    })
})
