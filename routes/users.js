const router = require('koa-router')()
const Person=require('../dbs/models/person')
const Redis=require('koa-redis')

const Store=new Redis().client

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})


router.get('/fix',async function(ctx,next){
  const st=await Store.hset('fix','name',Math.random()) //取值用hget
  ctx.body={
    code:'fix'
  }
})

router.post('/addPerson',async function(ctx){
  const person=new Person({
    name:ctx.request.body.name,
    age:ctx.request.body.age
  })
  let code
  try{
    await person.save()
    code='addPerson file'
  }catch(e){
    code='addPerson success'
  }
  ctx.body={
    code:code
  }
})

router.post('/updatePerson',async function(ctx){
  const result=await Person.where({
    name:ctx.request.body.name
  }).update({
    age:ctx.request.body.age
  })

  ctx.body={
    code:2
  }
})

router.post('/removePerson',async function(ctx){
  const result=await Person.where({
    name:ctx.request.body.name
  }).remove()

  ctx.body={
    code:3
  }
})



module.exports = router
