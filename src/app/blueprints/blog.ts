export class Blog {
  constructor(
    public url: string,
    public image:string,
    public title:string,
    public description:string,
    public author: string,
    public category: string,
    public subcat:string,
    public tagname: any,
    public updated: Date,
    public created: Date,
    ){}
}
