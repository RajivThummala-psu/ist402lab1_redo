Open package.json and look at the scripts devDependencies and dependencies sections. What do you think each section does here? What commands can you run?

I think the devDepencies is being utilized to describe custom elements. It gathers a multitude of metadata and rich information about the modules in a package. The dependencies section appears to be storing information about the version of npm that was installed. That is why there are numbers following it. In addition, these numbers are also present in @custom-elements-manifest/analyzer in addition to @web/dev-server". This may indicate the version type for these scripts. As the question mentions that these are scripts, my best guess is that these @ symbols are used to indicate that what follows is a script

The "demo" for your hello-world element is found in index.html. Reading this code, what does it do and how does it work? What HTML is making your script load to show a demo? How is this file rendering HTML via JavaScript?

Reading his code, it appears to be exporting my hello world from the filepath where it is stored via javascript. I think it is leveraging some sort of function that enables the filetype to change. It may be formatted with export [filename] from [filepath+type]. The "export from" is the HTML making the script load to show a demo. It is rendering html via javascript by using this function. You can tell as the export from are in a blue color to indicate that it is a function. 

The Definition of your element is in your-element-name.js, while the class JS object is found in src/YourElementName.js. Why do you think they put these in two separate files? 

I think they put these in 2 separate files so that the compiler or IDE can reference the element with ease as opposed to when they are in the same file. Another speculation I have is so that elements can reference different classes or vice versa. 

What do you think each code block is doing in the class'ed object? Leaving comments either in the source via // 

left my comments in the file

Try to explain what Lit is providing to the repo. What's so special about what Lit is providing that I'd be so bold to say it changes how the web is developed, forever? After anwering these questions to the best of your abilities...

Lit is enabeling us to embed our html inside of javascript. This would essentially enable us to optimize our microservices that I believe we will be creating in this class. Something special about it that will change web development is that the browser will not treat it as any different and it will still function as it is native javascript code. This will probably remove any potential complications with thing such as a service not being developed with it in mind to be optimized for a browser. 







# \<hello-world_RajivLab1>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i hello-world_RajivLab1
```

## Usage

```html
<script type="module">
  import 'hello-world_RajivLab1/hello-world_RajivLab1.js';
</script>

<hello-world_RajivLab1></hello-world_RajivLab1>
```



## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
