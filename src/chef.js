export default class ChefJs{
    createHTMLElement = (name, id = null) => {
        return new HTMLElement (name, id)
    }

    // define most used elements
    div = (id= null) =>  this.createHTMLElement('div', id)
    a = (id= null) =>  this.createHTMLElement('a', id)
    button = (id= null) =>  this.createHTMLElement('button', id)
    canvas = (id= null) =>  this.createHTMLElement('canvas', id)
    footer = (id= null) =>  this.createHTMLElement('footer', id)
    form = (id= null) =>  this.createHTMLElement('form', id)
    h1 = (id= null) =>  this.createHTMLElement('h1', id)
    h2 = (id= null) =>  this.createHTMLElement('h2', id)
    h3 = (id= null) =>  this.createHTMLElement('h3', id)
    h4 = (id= null) =>  this.createHTMLElement('h4', id)
    h5 = (id= null) =>  this.createHTMLElement('h5', id)
    h6 = (id= null) =>  this.createHTMLElement('h6', id)
    header = (id= null) =>  this.createHTMLElement('header', id)
    i = (id= null) =>  this.createHTMLElement('i', id)
    img = (id= null) =>  this.createHTMLElement('img', id)
    iframe = (id= null) =>  this.createHTMLElement('iframe', id)
    input = (id= null) =>  this.createHTMLElement('input', id)
    label = (id= null) =>  this.createHTMLElement('label', id)
    li = (id= null) =>  this.createHTMLElement('li', id)
    main = (id= null) =>  this.createHTMLElement('main', id)
    nav = (id= null) =>  this.createHTMLElement('nav', id)
    ol = (id= null) =>  this.createHTMLElement('ol', id)
    option = (id= null) =>  this.createHTMLElement('img', id)
    p = (id= null) =>  this.createHTMLElement('p', id)
    select = (id= null) =>  this.createHTMLElement('select', id)
    span = (id= null) =>  this.createHTMLElement('span', id)
    table = (id= null) =>  this.createHTMLElement('table', id)
    tbody = (id= null) =>  this.createHTMLElement('tbody', id)
    td = (id= null) =>  this.createHTMLElement('td', id)
    textarea = (id= null) =>  this.createHTMLElement('textarea', id)
    tfoot = (id= null) =>  this.createHTMLElement('tfoot', id)
    th = (id= null) =>  this.createHTMLElement('th', id)
    thead = (id= null) =>  this.createHTMLElement('thead', id)
    tr = (id= null) =>  this.createHTMLElement('tr', id)
    u = (id= null) =>  this.createHTMLElement('u', id)
    ul = (id= null) =>  this.createHTMLElement('ul', id)
    video = (id= null) =>  this.createHTMLElement('video', id)
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
