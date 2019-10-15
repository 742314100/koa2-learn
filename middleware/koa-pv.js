function pv(ctx){
    global.console.log('--koa-pv--')
    global.console.log(ctx.path)
    ctx.session.count++
}

module.exports=function(){
    return async function(ctx,next){
        pv(ctx)
        await next()
    }
}