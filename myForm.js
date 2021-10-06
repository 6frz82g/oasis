// import React from 'react';
// import { ConversationalForm } from 'conversational-form';
//
// export default class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.formFields = [
//       {
//         tag: 'input',
//         type: 'text',
//         name: 'firstname',
//         'cf-questions': 'what is your name?'
//       }
//     ];
//
//     this.submitCallback = this.submitCallback.bind(this);
//   }
//
//   componentDidMount() {
//     this.cf = ConversationalForm.startTheConversation({
//       options: {
//         submitCallback: this.submitCallback,
//         preventAutoFocus: true
//         // loadExternalStyleSheet: false
//       },
//       tags: this.formFields
//     });
//     this.elem.appendChild(this.cf.el);
//   }
//
//   submitCallback() {
//     var formDataSerialized = this.cf.getFormData(true);
//     console.log('Formdata, obj:', formDataSerialized);
//     this.cf.addRobotChatResponse(
//       "Thank you. Your rsvp has been recorded."
//     );
//   }
//
//   render() {
//     return (
//       <div>
//         <div ref={ref => (this.elem = ref)} />
//       </div>
//     );
//   }
// }
