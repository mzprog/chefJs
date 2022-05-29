import ChefJs from './chef.js'

export default  new ChefJs()

export  function render(elements, selector = 'body'){
    document.querySelector(selector).append(elements.render())
}
