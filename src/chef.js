export default class ChefJs{
    createHTMLElement = (name, id = null) => {
        return new HTMLElement (name, id)
    }

    // define most used elements
    div = (id= null) =>  this.createHTMLElement('div', id)
    img = (id= null) =>  this.createHTMLElement('img', id)
}

function HTMLElement (name, id = null){

    let childrenList = []
    let attributesList = []
    let eventsList = []

    this.children = (...children) => {
        childrenList = [
            ...childrenList,
            ...children
        ]
        return this
    }

    this.attributes = (attributes) => {
        attributesList = {
            ...attributesList,
            ...attributes
        }
        return this
    }

    this.events = (events) => {
        eventsList = {
            ...eventsList,
            ...events
        }
        return this
    }


    this.render = () => {
        let element = document.createElement(name)
        // assign the id
        if(id){
            element.id = id
        }
        // set atrributes
        for (const [key, value] of Object.entries(attributesList)) {
            element.setAttribute(key, value)
        }
        // set events
        for (const [key, value] of Object.entries(eventsList)) {
            element.addEventListener(key, value)
        }

        // append all children
        element.append(
            ...childrenList.map
                (child => typeof child === 'object'?child.render() : child)
        )
        return element
    }
}
