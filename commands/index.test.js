const main = require('./index');

describe('main function', () => {
   const originalArgv = process.argv;

   beforeEach(() => {
      console.log = jest.fn();
   });

   afterEach(() => {
      process.argv = originalArgv;
      jest.clearAllMocks();
   });

   it('should log filtered countries when "filter" command is provided', () => {
      process.argv = ['node', 'app.js', '--filter=ry'];
      main();
      expect(console.log).toHaveBeenCalled();
   });

   it('should log countries with children count when "count" command is provided', () => {
      process.argv = ['node', 'app.js', '--count'];
      main();
      expect(console.log).toHaveBeenCalled();
   });

   it('should throw an error if specified command is unknown', () => {
      process.argv = ['node', 'app.js', '--unknown'];
      expect(() => {
         main();
      }).toThrow();
   });
});
