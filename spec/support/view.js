const pug = `doctype html
html
  head
    
    meta(charset='utf-8')
    meta(name='viewpoint' content='width=device-width, intitial-scale=1.0')
    
    title Thank you
  body
    h1 Thanks for the info!
    p The following was saved to the database: 
    p Id: #{id} <br> name: #{name} <br> Assistant: #{assistant} <br> Age: #{age}  <br> Date: #{date}  <br> Time: #{time} <br> Comments: #{comments}.`


module.exports = pug;