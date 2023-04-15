import { TextField } from "@mui/material";
import { Button } from "antd";
import ReactQuill from "react-quill";
import dynamic from 'next/dynamic'
// const { default: UploadImage } = await import("@/utils/UploadImage"); 
const UploadImage= dynamic(()=> import("@/utils/UploadImage"), {loading: ()=> <>Loading...</>})

class CreateBlog extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "",
        title: "",
        image: undefined,
      };
    }
    handleClick = () => {
      const history = createBrowserHistory();
      history.goBack();
    }
    handleContentChange = (value) => {
      this.setState({ text: value });
    };
    modules = {
      // #3 Add "image" to the toolbar
      toolbar: [["bold", "italic", "image"]],
      // # 4 Add module and upload function
      imageUploader: {
        upload: (file) => {
          return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("image", file);
  
            fetch(
              "https://api.imgbb.com/1/upload?key=d36eb6591370ae7f9089d85875e56b22",
              {
                method: "POST",
                body: formData,
              }
            )
              .then((response) => response.json())
              .then((result) => {
                console.log(result);
                resolve(
                  "https://gd2.alicdn.com/imgextra/i3/2023922414/TB2EFu1X_cCL1FjSZFPXXXZgpXa_!!2023922414.jpg_400x400.jpg"
                );
              })
              .catch((error) => {
                reject("Upload failed");
                console.error("Error:", error);
              });
          });
        },
      },
    };
  
    formats = [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
      "imageBlot", // #5 Optinal if using custom formats
    ];
    setImage = (e) => {
      this.setState({ image: e });
    };
    render() {
      return (
        <div className={"userList"}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <div style={{ flex: "1 1 0" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 12,
                }}
              >
                <span style={{ fontSize: 18 }}>Title:</span>{" "}
                <TextField
                  value={this.state.title}
                  onChange={(e) => this.setState({ title: e.target.value })}
                  label={"title"}
                />
              </div>
              <UploadImage
                title={"Ảnh tin tức khuyến mãi"}
                setImage={this.setImage}
              />
  
              <div></div>
              <br />
              <ReactQuill
                onChange={this.handleContentChange}
                theme="snow"
                modules={this.modules}
                formats={this.formats}
              />
              <br />
              <Button
                type={"primary"}
                onClick={async () => {
                  const imageFinal = await upload_image(
                    this.state.image?.thumbUrl
                  );
  
                  const result = await add_blog(
                    this.state.text,
                    imageFinal?.img,
                    this.state.title
                  );
                  if (result?.add === true) {
                    swal("Notice", "Create is successfully", "success")
                    .then(()=> this.handleClick())
                  } else {
                    swal("Notice", "Error", "error");
                  }
                }}
                variant={"contained"}
                style={{ marginTop: 16 }}
              >
                Create
              </Button>
            </div>
            <div className="preview" style={{ flex: "1 1 0" }}>
              <h2 style={{ textAlign: "center" }}>Xem trước</h2>
              <div dangerouslySetInnerHTML={{ __html: this.state.text }} />
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default CreateBlog