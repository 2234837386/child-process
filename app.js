const child_process =require('child_process')

let child1=child_process.exec('node ./child.js',(error,stdout,stderr)=>{
    if(error) throw error
     console.log('stdout',stdout);
     console.log('stderr',stderr);
})
console.log(process.pid);

let child2=child_process.spawn('node',['./child.js'])
child2.stdout.on('data',list=>{
    console.log('hdowhdo',list.toString());
})
child2.stderr.on('data',list=>{
    console.log('dj',list);
})
console.log(child2.pid);