export default class BulletinPost {
    private _author: string;
  
    private _title: string;
  
    private _text: string;
  
    private _creationTime: number;
  
    constructor(author: string, title: string, text: string) {
      this._author = author;
      if (title.length > 50) {
       this._title = title.substring(0, 50);
     } else {
       this._title = title;
     }
     if (text.length > 50) {
       this._text = text.substring(0, 300);
     } else {
       this._text = text;
     }
      this._creationTime = Date.now();
    }
  
    get author() {
      return this._author;
    }
  
    get title() {
      return this._title;
    }
  
    set title(newTitle: string) {
      if (newTitle.length > 50) {
       this._title = newTitle.substring(0, 50);
     } else {
       this._title = newTitle;
     }
    }

    set text(newText: string) {
      if (newText.length > 300) {
       this._text = newText.substring(0, 300);
     } else {
       this._text = newText;
     }
    }
  
    get text() {
      return this._text;
    }

    get creationTime() {
      return this._creationTime;
    }
  }