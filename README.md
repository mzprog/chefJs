# chefJs
Create HTML Elements From Javascript

## How To Use
For now it's still early to use it.  but we have the defualt object is ready to create elements from it.

    // The include from should be renamed to "chefjs" later
    import ChefJs ,{render} from "src/index.js";
    
    // Extract the predefined elements to use, or if not defined use `createHTMLElement`
    const {div, img,createHTMLElement} = ChefJs
    
### Main Concepts 
All predefined elements can be used like `div("id")` or `createHTMLElement('video', 'video_ID')`

These function will return an `HTMLElement` instance, so you can you its propreties:
- attributes
- events
- children
- render

**NOTE** `render` is a method that you don't usualy need to call it, since we have an outer function `render` i will look better.

example:

    render(
      div('main-div')
        .attributes({class:"flex flex-wrap", style:"color:red;"})
        .attributes({checked:true}) // you can use it twice, it will append or override if the same name
        .children( // children can take multiple nodes
          "This child is just a string",
          div()
            .events({
              click: (e) => console.log("clicked")
            })
            .children("This child is from a nested div")
        )
    )
