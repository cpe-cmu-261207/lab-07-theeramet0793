const CourseCard = (props) => {
    return (
      <>
      <p>
      <div style={{width:"100%",borderStyle: "double",borderWidth: "10px",borderRadius: "10px",borderColor:"#ff9f80",backgroundColor:"#fcf7e9"}} id="courseCard">
        <br></br>
        <p>-  Course name : {props.name}</p>
        <p>-  Credit : {props.crd}</p>
        <p>-  Grade : {props.grd}</p>
        <p style={{textAlign:"center"}} id="deleteButton"><button onClick = {() =>props.del(props.name)}> ----- Delete this course ----- </button></p>
        <br></br>
      </div>
      <br></br>
      </p>
      </>
    );
  };
  
  export default CourseCard;