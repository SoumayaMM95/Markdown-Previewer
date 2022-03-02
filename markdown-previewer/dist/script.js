console.clear();

// title component
let Title = React.createClass({ displayName: "Title",
  render: function () {
    let titleClass = 'heading-text-one';
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { className: titleClass }, this.props.title), /*#__PURE__*/));
  } });

ReactDOM.render( /*#__PURE__*/
React.createElement(Title, { title: "Markdown Previewer" }),
document.getElementById('title'));


// markdown and output
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false });

let MarkdownOutput = React.createClass({ displayName: "MarkdownOutput",
  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
        React.createElement("h4", null, "Markdown Output"), /*#__PURE__*/
        React.createElement("hr", null), /*#__PURE__*/
        React.createElement("div", { id:"preview", dangerouslySetInnerHTML: 
                                    { __html: marked(this.props.value) } })));


  } });

let MarkdownContainer = React.createClass({ displayName: "MarkdownContainer",
  getInitialState: function () {
    return {
      value: '# This is a Heading h1 \n## This is a Heading h2 \nLink: [CodePen](https://codepen.io/Soumaya-Mahdi2/) \n InlineCode `markedjs/marked` \n ## Blocks of code \n```\nlet message = Hello world;\n```\n#### List items\n- item1\n- item2\n- item3\n\n## Blockquotes\n> First line.\n>\n>> Second line\n\n![alt text.](https://www.codegrepper.com/codeimages/react-show-file-object.png "This is a sample image.")\n\n**This text will be bold** ' };

  },
  handleChange(event) {
    this.setState({ value: event.target.value });
  },
  render: function () {
    console.log(marked(this.state.value));
    let containerClass = 'rounded-corners container-class col-xs-12 col-md-5';
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: containerClass }, /*#__PURE__*/
      React.createElement("h4", null, "Markdown Input"), /*#__PURE__*/
      React.createElement("hr", null), /*#__PURE__*/
      React.createElement("textarea", { id:"editor", className: "markdown-text", onChange: this.handleChange, value: this.state.value }), /*#__PURE__*/
        ), /*#__PURE__*/


      React.createElement("div", { className: containerClass }, /*#__PURE__*/
      React.createElement(MarkdownOutput, { value: this.state.value }))));



  } });

ReactDOM.render( /*#__PURE__*/
React.createElement(MarkdownContainer, null),
document.getElementById('markdown-container'));


// Footer component
let Footer = React.createClass({ displayName: "Footer",
  render: function () {
    let codedByClass = 'heading-text-two';
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h4", { className: codedByClass }, "Coded by Soumaya Mahdi")));
  } });

  ReactDOM.render( /*#__PURE__*/
    React.createElement(Footer, null),
    document.getElementById('footer'));