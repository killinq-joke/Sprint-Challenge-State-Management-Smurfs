1. What problem does the context API help solve?

passing props from adult to child1 then child2, child3, child4, child5 and instead pass them from adult to child 5

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What 
does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are functions that return an object with a type & maybe a payload
reducers are functions that connect actions to state
store is the thing that gives

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state can be accessed by any component whereas component state can only be accessed by child of that component, this is why we prefer either put all state in at application level or use something like redux/context api.  

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

instead of returning only an object from action creators you can return functions that are called "thunks"

5. What is your favorite state management system you've learned and this sprint? Please explain why!

redux, really reusable and interesting to setup
