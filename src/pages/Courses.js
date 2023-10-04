import { Link } from "react-router-dom";
import AddCourseFrom from "./component/AddCourseFrom";
import ShowCourses from "./component/ShowCourses";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCourses } from "../store/getCoursesSlicer";

export default function Courses() {
  const getData = () => {
    const userdata = localStorage.getItem("user");
    return JSON.parse(userdata);
  };
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { loading, courses, error } = useSelector((state) => state.getCourses);
  useEffect(() => {
    const uerdata =  getData();
    dispatch(
      getCourses(uerdata.token)
    ).then((resulte) => {
      if (resulte.payload.data) {
        setData(resulte.payload.data);
      }else{
        setData([]);

      }
    });
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="col content">
              <Link className="btn btn-primary" to={"/"}>
                {" "}
                back Home
              </Link>
              <AddCourseFrom />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col content d-flex gap-5 flex-wrap">
              {!error ? (
                data !== [] ? (
                  data.map((item) => {
                    return (
                      <ShowCourses
                        key={item._id}
                        course_name={item.course_name}
                        course_grade={item.course_grade}
                        _id={item._id}
                      />
                    );
                  })
                ) : (
                  <>
                    <h1>loading ......</h1>
                  </>
                )
              ) : (
                <h1>Some error happend {error}</h1>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
