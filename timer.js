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
            this.start('loopTimer');
        for(let i=0; i<nb; i++){
            await SearchAsync.globalValue(term);
        }
        resolve( this.stop('loopTimer'));
        })
        .then(time =>  console.log(`Temps d'execution :${time} ms pour ${nb} executions`));
    }
}