import Form from './Form.svelte'

const app = new Form({
  target: document.getElementById('app'),
  props: { bug: true }
})

export default app
