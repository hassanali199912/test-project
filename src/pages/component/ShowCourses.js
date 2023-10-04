export default function ShowCourses({course_name,course_grade,_id}) {
  return (
    <>
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{course_name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{course_grade}</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="card-link">
            {_id}
          </a>
        </div>
      </div>
    </>
  );
}
