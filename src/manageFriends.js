export function manageFriends(state, action) {
  // your code here
  let newState = {...state}
  return reducer(newState, action)
}


function reducer(state, action) {
  switch (action.type) {
    case "friends/add":
      let newFriend = state.friends
      newFriend.push(action.payload)
      return { ...state,  friends: newFriend};
    case "friends/remove":
      let newFriends = state.friends
      newFriends = newFriends.filter(friend => friend.id !== action.payload)
      return { ...state,  friends: newFriends};
    default:
      return state;
  }
}
