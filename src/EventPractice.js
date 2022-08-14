import React, { Component } from 'react';
import { useState } from 'react';
// class EventPractice extends Component {
//   state = {
//     message: '',
//     username: '',
//   };

//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handeleClick = this.handeleClick.bind(this);
//   }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handeleClick = () => {
//     alert(this.state.username + ': ' + this.state.message);
//     this.setState({
//       username: '',
//       message: '',
//     });
//   };

//   handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       this.handeleClick();
//     }
//   };
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="사용자명"
//           value={this.state.message}
//           onChange={this.handleChange}
//           //   onChange={(e) => {
//           //     this.setState({
//           //       message: e.target.value,
//           //     });
//           //     // console.log(e.target.value);
//           //   }}
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//           //   onChange={(e) => {
//           //     this.setState({
//           //       message: e.target.value,
//           //     });
//           //     // console.log(e.target.value);
//           //   }}
//         />
//         <button
//           //   onClick={() => {
//           //     alert(this.state.message);
//           //     this.setState({
//           //       message: '',
//           //     });
//           //   }}
//           onClick={this.handeleClick}
//         >
//           확인
//         </button>
//       </div>
//     );
//   }
// }

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    mesage: '',
  });

  const { username, message } = form;
  const onChange = (e) => {
    const nextform = {
      form,
      [e.target.name]: e.target.value,
    };
    setForm(nextform);
  };
  const onClick = () => {
    alert(username + '' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={username}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
