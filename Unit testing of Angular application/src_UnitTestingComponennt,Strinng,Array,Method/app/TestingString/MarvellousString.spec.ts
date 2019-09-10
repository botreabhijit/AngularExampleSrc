
// Import requred funnction from .ts file
import {Display} from './AbcString';

// Write test suit
describe('Display', ()=>{

    it('should return name of student', ()=>{
        expect(Display('Abhijit')).toContain('Abhijit welcome to Abc Infosystems');
    })
})