import { html, css, LitElement } from 'lit';

export class HelloWorld_RajivLab1 extends LitElement { //extends meaning that this javascript file is taking in the variables from LitElement
  static get styles() {  //I think this part is doing something with formatting, padding I believe has to do with margins/spacing between things
    return css` 
      :host {
        display: block; 
        padding: 25px; 
        color: var(--hello-world_RajivLab1-text-color, #000);
      }
    `;
  }

  static get properties() {  
    return {
      title: { type: String }, /*not quite sure what is happening here. What I do notice is that title has a type string which would make sense because it is words
     I also see that counter below has a type number which would make sense as well because a counter is quantitative */
      counter: { type: Number },
    };
  }

  constructor() { // I think a constructor intializes an object of a class 
    super(); //super I believe is used to reference a parent class. This one is extending 'lit' so that is what it is referencing
    this.title = 'Hey there';
    this.counter = 5; //not sure what the purpose of this counter is at the moment. I am assuming it would be to note the frequency of something
  }

  __increment() {
    this.counter += 1; //this is clearly incrementing something by 1 each time, however, I don't see it being referenced anywhere
  }
//what is below appears to be html that is referncing this counter and increment function that was created earlier
  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2> 
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
