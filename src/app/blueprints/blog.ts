export class Blog {
  constructor(
    public id: number,
    public url: string,
    public image:string,
    public title:string,
    public description:string,
    public author_name: string,
    public blog_category: string,
    public SubCategory:string,
    public tagnames: any,
    public updated_at: Date,
    public created_at: Date,
    ){}
}
