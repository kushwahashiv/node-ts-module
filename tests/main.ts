import { expect } from 'chai';
import { Library } from '../src';

describe('Library', () => {
  describe('Class library details', () => {
    it('sanity check', () => {
      expect(1).to.be.ok;
      expect(false).not.to.be.true;
      expect(true).to.be.true;
    });

    it('should return a name test', () => {
      const lib = new Library();
      const name = lib.name;

      expect(name).to.be.equal('test');
    });
  });
});
