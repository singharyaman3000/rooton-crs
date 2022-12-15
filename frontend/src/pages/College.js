import { Button, Input, PageHeader } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { collegedetail} from "../api/user";
import Fog from "../components/Fog";
import "./Register.css";

const Main = () => {
  const navigate = useNavigate();
  const levels = ['Bachelors', 'Masters', 'Ph.D', 'PG'];
  const Intaker= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
  const [userData, setUserData] = useState({
    'FieldOfStudy' :  "",
    'Institute': "",
    'Title' : "",
    'Level' : null,
    'Length_Years' : null,
    'Intake' :  null,
    'Language': "",
    'Fee': null,
    'ApplicationFee': "",
    'Ielts_Reading': null,
    'Ielts_Writing': null,
    'Ielts_Overall': null,
    'Ielts_Speaking': null,
    'Ielts_Listening': null,
    'Duolingo_Overall': null,
   'PTE_Reading': null,
    'PTE_Writing': null,
    'PTE_Overall': null,
    'PTE_Speaking': null,
    'PTE_Listening': null,
    'City': "",
  'Province': "",
  'Country': "",
  'Status': "",
  'Percentage': null,
  'Backlogs': null,
  'Gap_Years': null,
  'Previous_Education': "",
  'Work_Expereiecne_Years': null,
  'GRE': null,
  'GMAT': null
  });
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };


  const validate = () => {
    const {
      FieldOfStudy ,
  Institute,
  Title ,
  Level  ,
  Length_Years  ,
  Intake ,
  Language,
  Fee ,
  ApplicationFee,
  Ielts_Reading ,
  Ielts_Writing ,
  Ielts_Overall ,
  Ielts_Speaking ,
  Ielts_Listening ,
  Duolingo_Overall ,
 PTE_Reading ,
  PTE_Writing ,
  PTE_Overall ,
  PTE_Speaking ,
  PTE_Listening ,
  City,
  Province,
  Country,
  Status,
  Percentage ,
  Backlogs ,
  Gap_Years ,
  Previous_Education,
  Work_Expereiecne_Years,
  GRE,
  GMAT  
} = userData;

    let err = "";
    let msg = "";

    if (!FieldOfStudy) {
      msg = "Field of study is required";
      err = "FieldOfStudy";
    }
    else if(!Institute){
      msg = "Institute is required";
      err = "Institute";
    } 
    else if(!Title){
      msg = "Title is required";
      err = "Title";
    } else if(!Level){
      msg = "Level is required";
      err = "Level";
    } else if(!Length_Years){
      msg = "Length_Years is required";
      err = "Length_Years";
    } else if(!Intake){
      msg = "Intake is required";
      err = "Intake";
    } else if(!Language){
      msg = "Language is required";
      err = "Language";
    } else if(!Fee){
      msg = "Fee is required";
      err = "Fee";
    } else if(!ApplicationFee){
      msg = "ApplicationFee is required";
      err = "ApplicationFee";
    } else if(!Ielts_Reading && Ielts_Reading<=9){
      msg = "Ielts_Reading is required";
      err = "Ielts_Reading";
    } else if(!Ielts_Writing && Ielts_Writing<=9){
      msg = "Ielts_Writing is required";
      err = "Ielts_Writing";
    } else if(!Ielts_Overall && Ielts_Overall<=9){
      msg = "Ielts_Overall is required";
      err = "Ielts_Overall";
    } else if(!Ielts_Speaking && Ielts_Speaking<=9){
      msg = "Ielts_Speaking is required";
      err = "Ielts_Speaking";
    } else if(!Ielts_Listening && Ielts_Listening<=9){
      msg = "Ielts_Listening is required";
      err = "Ielts_Listening";
    } else if(!Duolingo_Overall && Duolingo_Overall<=160){
      msg = "Duolingo_Overall is required";
      err = "Duolingo_Overall";
    } else if(!PTE_Reading  && PTE_Reading<=90){
      msg = "PTE_Reading is required";
      err = "PTE_Reading";
    } else if(!PTE_Writing && PTE_Writing<=90){
      msg = "PTE_Writing is required";
      err = "PTE_Writing";
    } else if(!PTE_Overall && PTE_Overall<=90){
      msg = "PTE_Overall is required";
      err = "PTE_Overall";
    } else if(!PTE_Speaking && PTE_Speaking<=90){
      msg = "PTE_Speaking is required";
      err = "PTE_Speaking";
    } else if(!PTE_Listening && PTE_Listening<=90){
      msg = "PTE_Listening is required";
      err = "PTE_Listening";
    } else if(!City){
      msg = "City is required";
      err = "City";
    } else if(!Province){
      msg = "Province is required";
      err = "Province";
    } else if(!Country){
      msg = "Country is required";
      err = "Country";
    } else if(!Status){
      msg = "Status is required";
      err = "Status";
    } else if(!Percentage){
      msg = "Percentage is required";
      err = "Percentage";
    } else if(!Backlogs){
      msg = "Backlogs is required";
      err = "Backlogs";
    } else if(!Gap_Years){
      msg = "Gap_Years is required";
      err = "Gap_Years";
    } else if(!Previous_Education){
      msg = "Previous_Education is required";
      err = "Previous_Education";
    } else if(!Work_Expereiecne_Years && Work_Expereiecne_Years>=0){
      msg = "Work_Expereiecne_Years is required";
      err = "Work_Expereiecne_Years";
    } else if(!GRE){
      msg = "GRE is required";
      err = "GRE";
    } else if(!GMAT){
      msg = "GMAT is required";
      err = "GMAT";
    } 

    if (err) {
      toast.warn(msg);
      document.getElementById(err).focus();
      return false;
    }

    return true;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
      const {
        FieldOfStudy ,
    Institute,
    Title ,
    Level  ,
    Length_Years  ,
    Intake ,
    Language,
    Fee ,
    ApplicationFee,
    Ielts_Reading ,
    Ielts_Writing ,
    Ielts_Overall ,
    Ielts_Speaking ,
    Ielts_Listening ,
    Duolingo_Overall ,
   PTE_Reading ,
    PTE_Writing ,
    PTE_Overall ,
    PTE_Speaking ,
    PTE_Listening ,
    City,
    Province,
    Country,
    Status,
    Percentage ,
    Backlogs ,
    Gap_Years ,
    Previous_Education,
    Work_Expereiecne_Years,
    GRE,
    GMAT  
  } = userData;
  if(validate()){
    collegedetail({
      FieldOfStudy ,
  Institute,
  Title ,
  Level,
  Length_Years  ,
  Intake ,
  Language,
  Fee ,
  ApplicationFee,
  Ielts_Reading ,
  Ielts_Writing ,
  Ielts_Overall ,
  Ielts_Speaking ,
  Ielts_Listening ,
  Duolingo_Overall ,
 PTE_Reading ,
  PTE_Writing ,
  PTE_Overall ,
  PTE_Speaking ,
  PTE_Listening ,
  City,
  Province,
  Country,
  Status,
  Percentage ,
  Backlogs ,
  Gap_Years ,
  Previous_Education,
  Work_Expereiecne_Years,
  GRE,
  GMAT }, navigate);
  }
      
  handleReset()
    
  };

  const handleReset = (e) => {
    setUserData({});
  };

  return (
    <Fog>
      <div className="register">
        <PageHeader
          className="site-page-header-responsive"
          onBack={() => navigate("/")}
          title="College Registration"
        />
        <form
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
          className="register-form"
        >
          <h2>College Registration</h2>
          <div className="register-inputs">
          <label htmlFor="FieldOfStudy">Filed Of Study</label>
            <Input
              type="text"
              name="FieldOfStudy"
              id="FieldOfStudy"
              value={userData.FieldOfStudy}
              onChange={handleChange}
            />
            <label htmlFor="Institute">Institute</label>
            <Input
              type="text"
              name="Institute"
              id="Institute"
              value={userData.Institute}
              onChange={handleChange}
            />
            <label htmlFor="Title">Course Title</label>
            <Input
              type="text"
              name="Title"
              id="Title"
              value={userData.Title}
              onChange={handleChange}
            />
            <label htmlFor="Level">Level</label>
            <select  onChange={handleChange} name="Level">
                    <option>Please choose one option</option>
                    {levels.map((option, index) => {
                        return <option key={index} value={option} name="Level">
                            {option}
                        </option>
                    })}
            </select>
            <label htmlFor="Length_Years">Length Of Years</label>
            <Input
              type="text"
              name="Length_Years"
              id="Length_Years"
              value={userData.Length_Years}
              onChange={handleChange}
            />
            <label htmlFor="Intake">Intake</label>
            <select  onChange={handleChange} name="Intake">
                    <option>Please choose one option</option>
                    {Intaker.map((option, index) => {
                        return <option key={index} value={option} name="Intake">
                            {option}
                        </option>
                    })}
            </select>
            <label htmlFor="Language">Language</label>
            <Input
              type="text"
              name="Language"
              id="Language"
              value={userData.Language}
              onChange={handleChange}
            />
            <label htmlFor="Fee">Fees</label>
            <Input
              type="Number"
              name="Fee"
              id="Fee"
              value={userData.Fee}
              onChange={handleChange}
            />
            <label htmlFor="ApplicationFee">Application Fee</label>
            <Input
              type="Number"
              name="ApplicationFee"
              id="ApplicationFee"
              value={userData.ApplicationFee}
              onChange={handleChange}
            />
             <label htmlFor="Ielts_Reading">IELTS Reading</label>
            <Input
              type="Number"
              name="Ielts_Reading"
              id="Ielts_Reading"
              value={userData.Ielts_Reading}
              onChange={handleChange}
            />
             <label htmlFor="Ielts_Writing">IELTS Writing</label>
            <Input
              type="Number"
              name="Ielts_Writing"
              id="Ielts_Writing"
              value={userData.Ielts_Writing}
              onChange={handleChange}
            />
             <label htmlFor="Ielts_Overall">IELTS Overall</label>
            <Input
              type="Number"
              name="Ielts_Overall"
              id="Ielts_Overall"
              value={userData.Ielts_Overall}
              onChange={handleChange}
            />
             <label htmlFor="Ielts_Speaking">IELTS Speaking</label>
            <Input
              type="Number"
              name="Ielts_Speaking"
              id="Ielts_Speaking"
              value={userData.Ielts_Speaking}
              onChange={handleChange}
            />
            <label htmlFor="Ielts_Listening">IELTS Listening</label>
            <Input
              type="Number"
              name="Ielts_Listening"
              id="Ielts_Listening"
              value={userData.Ielts_Listening}
              onChange={handleChange}
            />
            <label htmlFor="Duolingo_Overall">Duolingo Overall</label>
            <Input
              type="Number"
              name="Duolingo_Overall"
              id="Duolingo_Overall"
              value={userData.Duolingo_Overall}
              onChange={handleChange}
            />
            <label htmlFor="PTE_Reading">PTE Reading</label>
            <Input
              type="Number"
              name="PTE_Reading"
              id="PTE_Reading"
              value={userData.PTE_Reading}
              onChange={handleChange}
            />
             <label htmlFor="PTE_Writing">PTE Writing</label>
            <Input
              type="Number"
              name="PTE_Writing"
              id="PTE_Writing"
              value={userData.PTE_Writing}
              onChange={handleChange}
            />
             <label htmlFor="PTE_Overall">PTE Overall</label>
            <Input
              type="Number"
              name="PTE_Overall"
              id="PTE_Overall"
              value={userData.PTE_Overall}
              onChange={handleChange}
            />
             <label htmlFor="PTE_Speaking">PTE Speaking</label>
            <Input
              type="Number"
              name="PTE_Speaking"
              id="PTE_Speaking"
              value={userData.PTE_Speaking}
              onChange={handleChange}
            />
             <label htmlFor="PTE_Listening">PTE Listening</label>
            <Input
              type="Number"
              name="PTE_Listening"
              id="PTE_Listening"
              value={userData.PTE_Listening}
              onChange={handleChange}
            />
            <label htmlFor="City">City</label>
            <Input
              type="Text"
              name="City"
              id="City"
              value={userData.City}
              onChange={handleChange}
            />
            <label htmlFor="Province">Province</label>
            <Input
              type="Text"
              name="Province"
              id="Province"
              value={userData.Province}
              onChange={handleChange}
            />
            <label htmlFor="Country">Country</label>
            <Input
              type="Text"
              name="Country"
              id="Country"
              value={userData.Country}
              onChange={handleChange}
            />
            <label htmlFor="Status">Status</label>
            <Input
              type="Text"
              name="Status"
              id="Status"
              value={userData.Status}
              onChange={handleChange}
            />
            <label htmlFor="Percentage">Percentage</label>
            <Input
              type="Number"
              name="Percentage"
              id="Percentage"
              value={userData.Percentage}
              onChange={handleChange}
            />
            <label htmlFor="Backlogs">Backlogs</label>
            <Input
              type="Number"
              name="Backlogs"
              id="Backlogs"
              value={userData.Backlogs}
              onChange={handleChange}
            />
            <label htmlFor="Gap_Years">Gap Years</label>
            <Input
              type="Number"
              name="Gap_Years"
              id="Gap_Years"
              value={userData.Gap_Years}
              onChange={handleChange}
            />
            <label htmlFor="Previous_Education">Previous Education</label>
            <Input
              type="Text"
              name="Previous_Education"
              id="Previous_Education"
              value={userData.Previous_Education}
              onChange={handleChange}
            />
            <label htmlFor="Work_Expereiecne_Years">Work Expereiecne Years</label>
            <Input
              type="Number"
              name="Work_Expereiecne_Years"
              id="Work_Expereiecne_Years"
              value={userData.Work_Expereiecne_Years}
              onChange={handleChange}
            />
            <label htmlFor="GRE">GRE</label>
            <Input
              type="Number"
              name="GRE"
              id="GRE"
              value={userData.GRE}
              onChange={handleChange}
            />
            <label htmlFor="GMAT">GMAT</label>
            <Input
              type="Number"
              name="GMAT"
              id="GMAT"
              value={userData.GMAT}
              onChange={handleChange}
            />
            
          </div>
          <div className="register-buttons">
            <Button onClick={handleReset}>Reset</Button>
            <Button htmlType="submit" type="primary">
              Register
            </Button>
          </div>
        </form>
      </div>
    </Fog>
  );
};

export default Main;