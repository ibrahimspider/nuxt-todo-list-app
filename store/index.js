export const state = () => ({
	tasks: [
    {
      content: "go to the gym",
      done: false
    }
  ]
})

export const mutations = {
	ADD_TASK(state, task) {
		state.tasks = [{ content: task, done: false }, ...state.tasks];
	},
	REMOVE_TASK(state, task) {
		state.tasks.splice(state.tasks.indexOf(task), 1);
	},
	TOGGLE_TASK(state, task) {
		task.done = !task.done;
	}
}
