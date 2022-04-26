import React, { Component } from "react";
import { Modal } from "antd";

export class MyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal2Visible: true,
    };
  }
  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }
  render() {
    return (
      <div>
        <Modal
          title="Error Message"
          centered
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >
          <p>{this.props.err}</p>
        </Modal>
      </div>
    );
  }
}

export default MyModal;
