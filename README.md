# Read Me

## 1. HTML

## 2. CSS

### 2.1 Responsive layouts tips
* P.S. You need to have a content in child to test it
 1. Use max-width if you need to use
 2. Use min-height if you need to use
 3. `width: auto` is default in browser
    - so do not declare `width: 100%` randomly otherwise it will create overflow
    - for example see at responsive-layouts/styles.css 2
    - you can use `width: 50% or 60%` to make it responsive
  4. Do not declare `width: 100vw` on body or any other element which will create an overflow issue
  5. with the height, if you set height to child element with percentage, it will not work unless you set height to the parent element.
   - for example: `.parent {height: 500px} .child {height: 200%}`
   - this will create a overflow issue so use wisely or don't use it
  6. `max-width: 900px` when depending on content
  7. you can use `flex: 1 flex-basis: 100% width: 100%` you don't have to use `width: 33.33%` and if you want more child then you can use `width: 25% flex-grow: 1` if you parent class has `diplay: flex flex-wrap: wrap gap: 1rem`
  8. another way is using `display: grid grid-template-columns: repeat(3, 1fr)`
  9. also in grid you can do `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` or for bigger card you can also do `grid-template-columns: repeat(auto-fit, minmax(min(500px, 100%), 1fr))`
  10. for input if it does not shrink or responsive, use `min-width: 0` to the input element

# JS

