const {name,password} = {name: 'masai', password: 'admin@123', hostname:'masaischool', client: 'chrome'}
console.log(name,password)


const {address:{pincode:pin}} = {name: 'masai', address: {  pincode: 560095 }}
console.log(pin)

//use ...arr to get all elements
const [a,b] = [ 100, 200, 500, 600 ];
console.log(a,b)




const [x, [y]] = [ 100, [50, 60, 70]] ;
console.log(y)


const [i, {arr:[j,...k]}]= [  1, {  
    arr: [ 1, 2, 3 ]
  }
] 
console.log([...k])




