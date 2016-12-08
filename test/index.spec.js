import { expect } from 'chai';
import { createConstants,createReducer } from '../index';

describe('createReducer', () => {
  it('判断创建的reducer是否正常', () => {
    var state = undefined;

    var hanlder = {
      ['a'](state,action){
        return state
      }
    };

    var reducers = createReducer(state,hanlder);
    var a = reducers({"a":1,"b":2},{type:"a",state:"n"});

    expect(a).to.be.deep.equal({"a":1,"b":2});
  });
});