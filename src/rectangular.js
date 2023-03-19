import Form from './Form.svelte'

const app = new Form({
  target: document.getElementById('app'),
  props: { bugfix: true }
})

export default app
