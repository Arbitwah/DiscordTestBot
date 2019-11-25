module.exports = {
    name: 'ping',
    description:'sends the message pong to the user',
    execute(msg,args){
      
     if(args[0]==='ping'){
            return msg.channel.send('pong');
        }
    }
};

