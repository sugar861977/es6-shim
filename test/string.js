describe('String', function() {
  describe('#repeat()', function() {
    it('should work', function() {
      expect('test'.repeat(3)).to.eql('testtesttest');
    });
  });

  describe('#startsWith()', function() {
    it('should be truthy on correct results', function() {
      expect('test'.startsWith('te')).to.be.ok;
      expect('test'.startsWith('st')).to.not.be.ok;
      expect(''.startsWith('/')).to.not.be.ok;
      expect('#'.startsWith('/')).to.not.be.ok;
      expect('##'.startsWith('///')).to.not.be.ok;

      expect('abc'.startsWith('abc')).to.be.ok;
      expect('abcd'.startsWith('abc')).to.be.ok;
      expect('abc'.startsWith('a')).to.be.ok;
      expect('abc'.startsWith('abcd')).to.not.be.ok;
      expect('abc'.startsWith('bcde')).to.not.be.ok;
      expect('abc'.startsWith('b')).to.not.be.ok;
      expect('abc'.startsWith('abc', 0)).to.be.ok;
      expect('abc'.startsWith('bc', 0)).to.not.be.ok;
      expect('abc'.startsWith('bc', 1)).to.be.ok;
      expect('abc'.startsWith('c', 1)).to.not.be.ok;
      expect('abc'.startsWith('abc', 1)).to.not.be.ok;
      expect('abc'.startsWith('c', 2)).to.be.ok;
      expect('abc'.startsWith('d', 2)).to.not.be.ok;
      expect('abc'.startsWith('dcd', 2)).to.not.be.ok;
      expect('abc'.startsWith('a', 42)).to.not.be.ok;
      expect('abc'.startsWith('a', Infinity)).to.not.be.ok;
      expect('abc'.startsWith('a', NaN)).to.be.ok;
      expect('abc'.startsWith('b', NaN)).to.not.be.ok;
      expect('abc'.startsWith('ab', -43)).to.be.ok;
      expect('abc'.startsWith('ab', -Infinity)).to.be.ok;
      expect('abc'.startsWith('bc', -42)).to.not.be.ok;
      expect('abc'.startsWith('bc', -Infinity)).to.not.be.ok;
      var myobj = {
        toString: function() {return 'abc';},
        startsWith: String.prototype.startsWith
      };
      expect(myobj.startsWith('abc')).to.be.ok;
      expect(myobj.startsWith('bc')).to.not.be.ok;

      var gotStr = false, gotPos = false;

      myobj = {
        toString: function() {
          expect(gotPos).to.not.be.ok;
          gotStr = true;
          return 'xyz';
        },
        startsWith: String.prototype.startsWith
      };
      var idx = {
        valueOf: function() {
          expect(gotStr).to.be.ok;
          gotPos = true;
          return 42;
        }
      };
      myobj.startsWith('elephant', idx);
      expect(gotPos).to.be.ok;
    });
  });

  describe('#endsWith()', function() {
    it('should be truthy on correct results', function() {
      expect('test'.endsWith('st')).to.be.ok;
      expect('test'.endsWith('te')).to.not.be.ok;
      expect(''.endsWith('/')).to.not.be.ok;
      expect('#'.endsWith('/')).to.not.be.ok;
      expect('##'.endsWith('///')).to.not.be.ok;

      expect('abc'.endsWith('abc')).to.be.ok;
      expect('abcd'.endsWith('bcd')).to.be.ok;
      expect('abc'.endsWith('c')).to.be.ok;
      expect('abc'.endsWith('abcd')).to.not.be.ok;
      expect('abc'.endsWith('bbc')).to.not.be.ok;
      expect('abc'.endsWith('b')).to.not.be.ok;
      expect('abc'.endsWith('abc', 3)).to.be.ok;
      expect('abc'.endsWith('bc', 3)).to.be.ok;
      expect('abc'.endsWith('a', 3)).to.not.be.ok;
      expect('abc'.endsWith('bc', 3)).to.be.ok;
      expect('abc'.endsWith('a', 1)).to.be.ok;
      expect('abc'.endsWith('abc', 1)).to.not.be.ok;
      expect('abc'.endsWith('b', 2)).to.be.ok;
      expect('abc'.endsWith('d', 2)).to.not.be.ok;
      expect('abc'.endsWith('dcd', 2)).to.not.be.ok;
      expect('abc'.endsWith('a', 42)).to.not.be.ok;
      expect('abc'.endsWith('bc', Infinity)).to.be.ok;
      expect('abc'.endsWith('a', Infinity)).to.not.be.ok;
      expect('abc'.endsWith('bc', undefined)).to.be.ok;
      expect('abc'.endsWith('bc', -43)).to.not.be.ok;
      expect('abc'.endsWith('bc', -Infinity)).to.not.be.ok;
      expect('abc'.endsWith('bc', NaN)).to.not.be.ok;

      var myobj = {
        toString: function() {return 'abc'},
        endsWith: String.prototype.endsWith
      };
      expect(myobj.endsWith('abc')).to.be.ok;
      expect(myobj.endsWith('ab')).to.not.be.ok;
      var gotStr = false, gotPos = false;

      myobj = {
        toString: function() {
          expect(gotPos).to.not.be.ok;
          gotStr = true;
          return 'xyz';
        },
        endsWith : String.prototype.endsWith
      };
      var idx = {
        valueOf: function () {
          expect(gotStr).to.be.ok;
          gotPos = true;
          return 42;
        }
      };
      myobj.endsWith('elephant', idx);
      expect(gotPos).to.be.ok;
    });
  });

  describe('#contains()', function() {
    it('should be truthy on correct results', function() {
      expect('test'.contains('es')).to.be.ok;
      expect('abc'.contains('a')).to.be.ok;
      expect('abc'.contains('b')).to.be.ok;
      expect('abc'.contains('abc')).to.be.ok;
      expect('abc'.contains('bc')).to.be.ok;
      expect('abc'.contains('d')).to.not.be.ok;
      expect('abc'.contains('abcd')).to.not.be.ok;
      expect('abc'.contains('ac')).to.not.be.ok;
      expect('abc'.contains('abc', 0)).to.be.ok;
      expect('abc'.contains('bc', 0)).to.be.ok;
      expect('abc'.contains('de', 0)).to.not.be.ok;
      expect('abc'.contains('bc', 1)).to.be.ok;
      expect('abc'.contains('c', 1)).to.be.ok;
      expect('abc'.contains('a', 1)).to.not.be.ok;
      expect('abc'.contains('abc', 1)).to.not.be.ok;
      expect('abc'.contains('c', 2)).to.be.ok;
      expect('abc'.contains('d', 2)).to.not.be.ok;
      expect('abc'.contains('dcd', 2)).to.not.be.ok;
      expect('abc'.contains('a', 42)).to.not.be.ok;
      expect('abc'.contains('a', Infinity)).to.not.be.ok;
      expect('abc'.contains('ab', -43)).to.be.ok;
      expect('abc'.contains('cd', -42)).to.not.be.ok;
      expect('abc'.contains('ab', -Infinity)).to.be.ok;
      expect('abc'.contains('cd', -Infinity)).to.not.be.ok;
      expect('abc'.contains('ab', NaN)).to.be.ok;
      expect('abc'.contains('cd', NaN)).to.not.be.ok;

      var myobj = {
        toString: function() {return 'abc';},
        contains: String.prototype.contains
      };

      expect(myobj.contains('abc')).to.be.ok;
      expect(myobj.contains('cd')).to.not.be.ok;

      var gotStr = false, gotPos = false;

      myobj = {
        toString: function() {
          expect(gotPos).to.not.be.ok;
          gotStr = true;
          return 'xyz';
        },

        contains: String.prototype.contains
      };

      var idx = {
        valueOf: function() {
          expect(gotStr).to.be.ok;
          gotPos = true;
          return 42;
        }
      };

      myobj.contains('elephant', idx);
      expect(gotPos).to.be.ok;
    });

    it('should be falsy on incorrect results', function() {
      expect('test'.contains('1290')).to.not.be.ok;
    });
  });
});
