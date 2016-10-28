import React from 'react'

const Register = ({name}) => (
 <div>{`Hi ${name}`}</div>
);

export default Register;

// export default class Register extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       data: ''
//     }
//   }
//   click = (e) => {
//     console.log('clicked')
//     window.fetch('http://localhost:3000/register')
//     .then(res => console.log(res))
//     .then(data => console.log(data))
//   }
//   render() {
//     return <div><h1>REGISTER</h1>
//     <button onClick={this.click}>CLICK</button>
//     <h2>{this.state.data}</h2>
//     </div>
//   }
// }
