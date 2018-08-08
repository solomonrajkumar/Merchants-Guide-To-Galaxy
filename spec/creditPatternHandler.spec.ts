// import { expect } from 'chai';
// import { CreditPatternHandler } from '../src/handlers/creditPatternHandler';
<<<<<<< HEAD
// import { Config } from '../src/config/config';
=======
// import { Context } from '../src/config/context';
>>>>>>> 3104c03026cb53a4f32cfb4086e284de9fbbf094

// let testInput1 = 'glob glob Silver is 34 Credits';
// let expectedOutput1 = "";
// let expectedOutput2 = 1;

// let testInput2 = 'pish pish Iron is 3910 Credits';
// let expectedOutput3 = 2;

// let expectedOutput4 = {
//   'Silver': 17,
//   'Iron': 195.5
// };

// describe("Credit Pattern Handler", () => {
//     describe("handle Credit Pattern Input passed", () => {
//         let creditPatternHandler = new CreditPatternHandler();

//         it("should return \"\" when Credit Pattern String is passed", () => {

//             let testOutput = creditPatternHandler.handleInput(testInput1);
//             expect(testOutput).to.equal(expectedOutput1);
//         });

//         it("should update initMap.creditMultiplierMap when Credit Pattern String is passed - validate size of creditMultiplierMap", () => {
//             creditPatternHandler.handleInput(testInput1);
<<<<<<< HEAD
//             let creditMultiplierMap = Config.initMap.creditMultiplierMap;
=======
//             let creditMultiplierMap = Context.getInstance().creditMultiplierMap;
>>>>>>> 3104c03026cb53a4f32cfb4086e284de9fbbf094
//             let testOutput = Object.keys(creditMultiplierMap).length;
//             expect(testOutput).to.equal(expectedOutput2);
//         });

//         it("should update initMap.creditMultiplierMap when Credit Pattern String is passed - validate size of creditMultiplierMap", () => {
//             creditPatternHandler.handleInput(testInput2);
<<<<<<< HEAD
//             let creditMultiplierMap = Config.initMap.creditMultiplierMap;
=======
//             let creditMultiplierMap = Context.getInstance().creditMultiplierMap;
>>>>>>> 3104c03026cb53a4f32cfb4086e284de9fbbf094
//             let testOutput = Object.keys(creditMultiplierMap).length;
//             expect(testOutput).to.equal(expectedOutput3);
//         });

//         it("should validate the contents of initMap.creditMultiplierMap when Credit Pattern String is passed", () => {
<<<<<<< HEAD
//             let creditMultiplierMap = Config.initMap.creditMultiplierMap;
=======
//             let creditMultiplierMap = Context.getInstance().creditMultiplierMap;
>>>>>>> 3104c03026cb53a4f32cfb4086e284de9fbbf094
//             let expectedOutput = JSON.stringify(expectedOutput4) === JSON.stringify(creditMultiplierMap)
//             expect(true).to.equal(expectedOutput);
//         });

//     })
// });
