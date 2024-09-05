const { getArgumentValue, serializeArguments } = require('./utils');

describe('utils', () => {
   describe('serializeArguments', () => {
      it('should throw an error if arguments list is empty', () => {
         const args = [];
         expect(() => {
            serializeArguments(args);
         }).toThrow(
            'Please provide arguments, such as --count or --filter=<pattern>'
         );
      });
      it('should serialize arguments list', () => {
         const args = ['--filter=ry', '--test=toto', '--toast'];
         const serializedArgs = [
            { name: 'filter', value: 'ry' },
            { name: 'test', value: 'toto' },
            { name: 'toast' },
         ];
         expect(serializeArguments(args)).toStrictEqual(serializedArgs);
      });
   });

   describe('getArgumentValue', () => {
      it('should throw an error if no value is provided for the argument', () => {
         expect(() => {
            getArgumentValue('noval');
         }).toThrow('There is no value for the provided argument');
      });

      it('should return the value of an argument', () => {
         const args = [
            { name: 'filter', value: 'ry' },
            { name: 'test', value: 'toto' },
            { name: 'toast', value: 'titi' },
         ];
         const value = 'ry';
         expect(getArgumentValue('filter', args)).toBe(value);
      });
   });
});
