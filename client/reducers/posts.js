// reducer takes --> the action && copy of current state

export default function posts(state = [], action) {
  console.log('the post will change')
  console.log(state, action);
  return state;
}