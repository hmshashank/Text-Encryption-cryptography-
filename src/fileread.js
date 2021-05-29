import React, { Component } from "react";
import axios from "axios";
import { ExcelRenderer, OutTable } from "react-excel-renderer";
class SubmitComponent extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       image: "",
  //     };
  //   }
  state = {
    rows: "",
    cols: "",
  };
  fileHandler = (event) => {
    let fileObj = event.target.files[0];
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          cols: resp.cols,
          rows: resp.rows,
        });
      }
    });
  };

  // }
  //   onChange(e) {
  //     let files = e.target.files;
  //     // console.warn("data file", files);
  //     let reader = new FileReader();
  //     reader.readAsDataURL(files[0]);
  //     reader.onload = (e) => {
  //       console.log("data", e.target.result);
  //     };
  //   }

  myfunction() {
    console.log("CLICKED");
  }

  render() {
    return (
      <div>
        <h1>uplad your file here.!</h1>

        <button>
          <img
            src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/128x128/plain/copy.png"
            alt="my image"
            onClick={this.myfunction}
          />
        </button>
        <button>
          <img
            src="https://recoverytoolbox.com/src/images/icons/logo-excel-green-180.png"
            alt="my image"
            onClick={this.myfunction}
          />
        </button>

        <input
          type="file"
          onChange={this.fileHandler.bind(this)}
          style={{ padding: "10px" }}
        />
        <div>
          {this.state.rows && (
            <OutTable
              data={this.state.rows}
              columns={this.state.cols}
              tableClassName="ExcelTable2007"
              tableHeaderRowClass="heading"
            />
          )}
        </div>
      </div>
    );
  }
}
export default SubmitComponent;
