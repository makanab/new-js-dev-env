import {expect} from 'chai';
import {JSDOM} from 'jsdom';
import fs  from 'fs';


describe('our first test',()=>{
    it('should pass',()=>{
        expect(true).to.equal(false)
    })
})

// describe('index.html', () => { // eslint-disable-line
//     it('should say hello' , (done) => { // eslint-disable-line
//       const options = { }
//       JSDOM.fromFile('./src/index.html', options).then(dom => {
//         const h1 = dom.window.document.getElementsByTagName('h1')[0];
//         expect(h1.innerHTML).to.equal('Hello World')
//         done()
//         window.close();
//       }).catch(done)
//     })
//   })


// describe('index.html',()=>{
//     it('hello world',()=>{
//          const index = fs.readFileSync('./src/index.html','utf-8');
         
//        JSDOM.env(index,function(err,window){
//             const h1 = window.getElementByTag('h1')[0];
//             expect(h1.innerHTML).to.equal('hello world');
//             window.close();
//         })

//     })})