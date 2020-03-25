describe("visitor form testing", () => {
    const fixture = require('./fixture');
    const axios = require('axios');
    const view = require('./view');

    it('should return form html format', async(done)=>{
        try {
            const forms = await axios.get('http://localhost:3000/new_visit');
            expect(forms.data).toEqual(fixture)
        } catch (err) {
            console.log(err)
        }

        done()

    })

    it('return pug template', async(done) => {
        try{
            const pug = await axios.get('http://localhost:3000/new_visit');
            expect(pug.data).toEqual(view)
        } catch(err) {
            console.log(err)
        }

        done()
    })
});