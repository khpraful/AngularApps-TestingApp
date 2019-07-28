import { AppService } from "./app.service";

describe('testing app service', () =>{
    let appService: AppService = null;
beforeEach(() =>{
appService = new AppService();
})
afterEach(()=>{
    appService = null;
});

it('testing divide function for positivity', () => {
    const actual = appService.divide(10,2);
    expect(actual).toEqual(6);
});
it('testing divide function for infinity', () => {
    const actual = appService.divide(10,0);
    expect(actual).toEqual(Infinity);
});
})