import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/userSlicer";
import { addCourse } from "../../store/coursesSlicer";

export default function AddCourseFrom() {
  const getData = () => {
    const userdata = localStorage.getItem("user");
    return JSON.parse(userdata);
  };
  const timer =()=>{
    setTimeout(()=>{
      setIsCreated('')
    },2000)
  }


  const [courseName, setCourseName] = useState("");
  const [grade, setGrade] = useState('no-select');
  const [isSelectVaild, setisSelectVaild] = useState(false);
  const [isCreated, setIsCreated] = useState("");
  const [userData,setUserData] = useState({});
  



useEffect(()=>{
  setUserData(getData());
},[])


  const { loading, error } = useSelector((state) => state.createCourse);
  const dispatch = useDispatch();
  const handleFormData = (e) => {
    e.preventDefault();
    if (grade === "no-select") {
      setisSelectVaild(true);
    } else {
        setisSelectVaild(false);
      const coureseData = {
        courseName,
        grade,
        token:userData.token
      };
     
      dispatch(addCourse(coureseData)).then(resulte =>{
        if(resulte.payload.message === 'course created successfully'){
          setIsCreated('course created successfully')
          timer()
          setCourseName('')
          setGrade('no-select')
        }
      })
    }

    
  };


  return (
    <>
      <h1 className="text-center">Add Coureses</h1>
      <form className=" shadow-lg custom-from" onSubmit={handleFormData}>
        <div className="col ">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Course Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Course Name"
            value={courseName}
            onChange={(e) => {
              setCourseName(e.target.value);
            }}
          />
        </div>
        <div className="col ">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Enter grade
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="exampleFormControlInput2"
            value={grade}
            onChange={(e) => {
                if(e.target.value === "no-select"){
                    setisSelectVaild(true);
                }else{
                    setisSelectVaild(false);
                }
              setGrade(e.target.value);
            }}
          >
            <option value='no-select' defaultValue>
              Open this select menu
            </option>
            <option value="grade 1">grade 1</option>
            <option value="grade 2">grade 2</option>
            <option value="grade 3">grade 3</option>
            <option value="grade 4">grade 4</option>
          </select>
          {isSelectVaild && (
            <div className="alert alert-danger mt-2 p-2 " role="alert">
              select valid input
            </div>
          )}
        </div>
        <div className="col">
          <button className="btn btn-primary btn-md" type="submit">
            {loading ? "Create...." : "submit"}
          </button>
        </div>
        {error && (
          <div className="col">
            <div className="alert alert-danger " role="alert">
              {error}
            </div>
          </div>
        )}
        {isCreated && (
          <div className="col">
            <div className="alert alert-success " role="alert">
              {isCreated}
            </div>
          </div>
        )}
      </form>
    </>
  );
}
