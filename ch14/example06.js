<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
<body>
  <root></root>
</body>
<script>
const child = React.createElement('li', null, '項目')
const root = React.createElement('ul', {className:'my-list'}, child)

if(typeof window !== 'undefined') {
  ReactDOM.render(root, document.getElementById('root'))
}
</script>
