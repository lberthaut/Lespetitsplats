class Timer {
    static start(name){
        if(!this.list){
            this.list = [];
        }
        this.list[name]=Date.now();
    }

    static stop(name){
        return Date.now()- this.list[name];
    }

    static test(term, nb){
        new Promise(async (resolve, reject)=>{
            let ops = 0n;
            this.start('loopTimer');
        for(let i=0; i<nb; i++){
            globalValue(term);
            ops += 1n;
        }
        let time = this.stop('loopTimer');
        resolve({
            time: time,
            ops: parseInt((ops * 1000000000n)/BigInt(time*1000000),10)
        })
        })
        .then(result =>  console.log(` ${nb} executions \n Temps d'execution :${result.time} ms \n opérations/s: ${result.ops} `));
    }
}