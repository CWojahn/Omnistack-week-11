const generateUniqueID = require('../../src/utils/generateUniqueId')

describe('Generate Unique Id', ()=>{
  it('should generate an unique Id', ()=>{
    const id = generateUniqueID();
    expect(id).toHaveLength(8);
  });
});