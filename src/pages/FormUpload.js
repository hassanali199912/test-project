import { useEffect, useState } from "react";
import "./styles/form.css";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddedDate } from "../store/saveDataSlicer";

export default function FormUpload() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.saveData);
  const fileInput = useRef(null);
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const [name, setName] = useState("");

  const fileCahnge = () => {
    fileInput.current.click();
  };
  const chhhhhhhhhhhhhh = () => {};

  const handleUpload = (e) => {
    e.preventDefault();
    // const formDate = new FormData();
    // formDate.append("name", name);
    // formDate.append("file", file);

    const dataTransfare = new DataTransfer();
    dataTransfare.items.add(file);

    console.log(dataTransfare.files[0].name);
    localStorage.setItem("file_data", dataTransfare);

    // var object = {
    //   name : name,
    //   file : file
    // };
    // console.log(object);

    //   localStorage.setItem("file_data",JSON.stringify(object));
    //  const  storegData = JSON.parse(localStorage.getItem("file_data"));
    //   console.log(storegData);

    // fetch('https://api.escuelajs.co/api/v1/products/',{
    //   method:'post',
    //   body:{
    //     "title": "hassan ali ",
    //     "price": 54,
    //     "description": "This is Descrption",
    //     "categoryId": 1,
    //     "images": [formDate]
    //   }
    // }).then(res=> res.json()).then(resulet=> {
    //   console.log("success");
    //   console.log(resulet);
    // }).catch(err => console.log(err));
  };

  // useEffect(() => {
  //   console.log(data);
  //   // const storegData = JSON.parse(localStorage.getItem("file_data"));
  //   // console.log(storegData);
  // });

  return (
    <>
      <section className="form-upload">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <form onSubmit={handleUpload} className="text-center">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    placeholder="name"
                    className="form-control py-3 my-2"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                  />
                </div>
                <div className="input-group mb-3 ">
                  <input
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                      setFileName(e.target.files[0].name)
                    }}
                    type="file"
                    className="form-control"
                    id="inputGroupFile01"
                    hidden
                    ref={fileInput}
                  />
                </div>
                <label
                  className="input-group-text d-block p-5 my-2"
                  htmlFor="inputGroupFile01"
                  onClick={() => fileCahnge}
                >
                  {fileName ? fileName : "Click To Upload File"}
                </label>

                <button className="btn btn-primary" type="submit">
                  Upload
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
