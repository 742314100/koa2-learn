const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  global.console.log('index9999')
  ctx.cookies.set('pvid',Math.random())
  await ctx.render('index', {
    title: 'Hello Koa 21!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
    cookie:ctx.cookies.get('pvid')
  }
})


router.get('/liwei',async(ctx,next)=>{
  ctx.body={
    liwei:'liwei'
  }
})

module.exports = router
