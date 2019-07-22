export class DataService{
    private data:string[]=[];
    
    addData(msg:string)
    {
        this.data.unshift(msg);
    }

    getData()
    {
        return this.data;
    }

    deleteMsg(msg:string)
    {
    const index: number = this.data.indexOf(msg);
    if (index !== -1) {
        this.data.splice(index, 1);
    } 
    }
}