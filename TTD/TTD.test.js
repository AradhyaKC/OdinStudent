import {CeaserCipher,newGameboard} from "./TTD";

test("firstTest",() =>  expect(CeaserCipher(1,'bcd')).toBe('abc'));
// test(" left wrap test (from a to z)",() =>  expect(CeaserCipher(1,'abc')).toBe('zab'));
// test("test wrap for shift values equal 26",()=> expect(CeaserCipher(26,"abc")).toBe('abc'));
// test("test wrap for shift values greater than or equal 26",()=> expect(CeaserCipher(29,"abc")).toBe('xyz'));
// test("test right wrap ()from z to a", ()=> expect(CeaserCipher(-1,'zab')).toBe('abc'));
// test("test wrap for shift values lesser than or equal negative 26",()=> expect(CeaserCipher(-29,"abc")).toBe('def'));

describe("Gameboard", function(){
    var gameboard;
    beforeEach(()=>{
        gameboard = newGameboard();
    });

    it("should have 17 occupied spots by 10 ships(Construction)",function(){ // we want as to as liltle of tests possible and fast;
        var board =gameboard.getBoard();
        var ships = gameboard.getShips().length;
        var count=0;
        for(let column of board){
            for(let rowElement of column){
                if(rowElement>=0) count++;
            }
        }
        expect([count,ships]).toBe([17,10]);
    })
    
});
