const fixture = require('./fixture');
const axios = require('axios');
let visits;

describe("visitor form testing", () => {
    beforeEach(()=>{
        visits = require('../form')
    });

    afterEach(()=>{
        visits.close()
    });

    it('should return form html format', async(done)=>{
        try {
            const forms = await axios.get('http://localhost:3001/new_visit');
            expect(forms.data).toEqual(fixture)
        } catch (err) {
            console.log(err)
        }

        done()

    })
});