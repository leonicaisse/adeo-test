const { count, appendChildrenCount } = require('./count');

describe('count feature', () => {
   it('should handle unknown children target properly', () => {
      const data = {};
      expect(() => {
         appendChildrenCount(data, 'unknown');
      }).toThrow('There is no property matching the provided parameter');
   });
   it('should append children count to the name', () => {
      const data = { name: 'some name', children: [1, 2, 3, 4, 5] };
      const expected = { name: 'some name [5]', children: [1, 2, 3, 4, 5] };
      expect(appendChildrenCount(data, 'children')).toStrictEqual(expected);
   });

   it('should return the list with the counts', () => {
      const data = [
         {
            name: 'Dillauti',
            people: [
               {
                  name: 'Winifred Graham',
                  animals: [
                     { name: 'Anoa' },
                     { name: 'Duck' },
                     { name: 'Narwhal' },
                     { name: 'Badger' },
                     { name: 'Cobra' },
                     { name: 'Crow' },
                  ],
               },
               {
                  name: 'Blanche Viciani',
                  animals: [
                     { name: 'Barbet' },
                     { name: 'Rhea' },
                     { name: 'Snakes' },
                     { name: 'Antelope' },
                     { name: 'Echidna' },
                     { name: 'Crow' },
                     { name: 'Guinea Fowl' },
                     { name: 'Deer Mouse' },
                  ],
               },
            ],
         },
      ];

      const expected = [
         {
            name: 'Dillauti [2]',
            people: [
               {
                  name: 'Winifred Graham [6]',
                  animals: [
                     { name: 'Anoa' },
                     { name: 'Duck' },
                     { name: 'Narwhal' },
                     { name: 'Badger' },
                     { name: 'Cobra' },
                     { name: 'Crow' },
                  ],
               },
               {
                  name: 'Blanche Viciani [8]',
                  animals: [
                     { name: 'Barbet' },
                     { name: 'Rhea' },
                     { name: 'Snakes' },
                     { name: 'Antelope' },
                     { name: 'Echidna' },
                     { name: 'Crow' },
                     { name: 'Guinea Fowl' },
                     { name: 'Deer Mouse' },
                  ],
               },
            ],
         },
      ];

      expect(count(data)).toStrictEqual(expected);
   });
});
