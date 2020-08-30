const tail = require('../tail');
const chai = require ('chai');  
const assert = chai.assert;

describe('tail', () => {
    it("returns 6 for [5,6,7]", () => {
      assert.strictEqual(tail([5,6,7])[0], 6);
    });
  
    it("returns Lighthouse , Labs for ['Hello', 'Lighthouse', 'Labs']", () => {
        const result = tail(["Hello", "Lighthouse", "Labs"]);
       
      assert.strictEqual(result[1],"Labs"); 
    });
  
    it("returns 3 as length for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
        const result = tail(["Yo Yo", "Lighthouse", "Labs"]);
      assert.strictEqual(result.length, 2); 
    });
  });

