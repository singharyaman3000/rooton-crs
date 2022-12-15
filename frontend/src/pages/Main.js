import { Button, Input, PageHeader } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { profiledetail} from "../api/user";
import Fog from "../components/Fog";
import "./Register.css";

const Main = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
      First_Name:"",
      Last_Name:"",
      MobileNo:"",
      EmailId:"",
      Country_Of_Birth: "",
      State: "",
      City:"",
      DOB: "",
      gender: "",
      Maritial_Status: "",
      Module: "",
      IELTS_O: null,
      IELTS_L: null,
      IELTS_R: null,
      IELTS_W: null,
      IELTS_S: null,
      I_Date_OF_Exam_Taken: null,
      PTE_O: null,
      PTE_L: null,
      PTE_R: null,
      PTE_W: null,
      PTE_S: null,
      P_Date_OF_Exam_Taken: null,
      GRE: null,
      GRE_quantity: null,
      GRE_verbal: null,
      GRE_writing: null,
      GMAT: null,
      GMAT_quantity: null,
      GMAT_verbal: null,
      GMAT_writing: null,
      GMAT_reasoning:null,
      Duolingo: null,
      tenth: null,
      twelveth: null,
      twelveth_Backlog: null,
      diplomaCGPA: null,
      diploma_Backlog: null,
      bachelorsDName: "",
      bachelorsCGPA: null,
      B_Backlog: null,
      mastersDName: "",
      mastersCGPA: null,
      M_Backlog: null,
      Company_Name: [],
      Designation: "",
      Years: "",
      Months: "",
      Highest_Level_of_Study: "",
      Preferred_Location_of_study: "",
      Preferred_Choice_of_Program : "",
  });
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      const {
        First_Name,
        Last_Name,
        MobileNo,
        EmailId,
        Country_Of_Birth,
        State,
        City,
        DOB,
        gender,
        Maritial_Status,
        Module,
        IELTS_O,
        IELTS_L,
        IELTS_R,
        IELTS_W,
        IELTS_S,
        I_Date_OF_Exam_Taken,
        PTE_O,
        PTE_L,
        PTE_R,
        PTE_W,
        PTE_S,
        P_Date_OF_Exam_Taken,
        GRE,
        GRE_quantity,
        GRE_verbal,
        GRE_writing,
        GMAT,
        GMAT_quantity,
        GMAT_verbal,
        GMAT_writing,
        GMAT_reasoning,
        Duolingo,
        tenth,
        twelveth,
        twelveth_Backlog,
        diplomaCGPA,
        diploma_Backlog,
        bachelorsDName,
        bachelorsCGPA,
        B_Backlog,
        mastersDName,
        mastersCGPA,
        M_Backlog,
        Company_Name,
        Designation,
        Years,
        Months,
        Highest_Level_of_Study,
        Preferred_Location_of_study,
        Preferred_Choice_of_Program  } = userData;

      profiledetail({
        First_Name,
        Last_Name,
        MobileNo,
        EmailId, 
        Country_Of_Birth,
        State,
        City,
        DOB,
        gender,
        Maritial_Status,
        Module,
        IELTS_O,
        IELTS_L,
        IELTS_R,
        IELTS_W,
        IELTS_S,
        I_Date_OF_Exam_Taken,
        PTE_O,
        PTE_L,
        PTE_R,
        PTE_W,
        PTE_S,
        P_Date_OF_Exam_Taken,
        GRE,
        GRE_quantity,
        GRE_verbal,
        GRE_writing,
        GMAT,
        GMAT_quantity,
        GMAT_verbal,
        GMAT_writing,
        GMAT_reasoning,
        Duolingo,
        tenth,
        twelveth,
        twelveth_Backlog,
        diplomaCGPA,
        diploma_Backlog,
        bachelorsDName,
        bachelorsCGPA,
        B_Backlog,
        mastersDName,
        mastersCGPA,
        M_Backlog,
        Company_Name,
        Designation,
        Years,
        Months,
        Highest_Level_of_Study,
        Preferred_Location_of_study,
        Preferred_Choice_of_Program  }, navigate);

        handleReset();
    
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
          title="User Registration"
        />
        <form
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
          className="register-form"
        >
          <h2>User Registration</h2>
          <div className="register-inputs">
          <label htmlFor="First_Name">First Name</label>
            <Input
              type="text"
              name="First_Name"
              id="First_Name"
              value={userData.First_Name}
              onChange={handleChange}
            />
            <label htmlFor="Last_Name">Last Name</label>
            <Input
              type="text"
              name="Last_Name"
              id="Last_Name"
              value={userData.Last_Name}
              onChange={handleChange}
            />
            <label htmlFor="MobileNo">Mobile Number</label>
            <Input
              type="text"
              name="MobileNo"
              id="MobileNo"
              value={userData.MobileNo}
              onChange={handleChange}
            />
            <label htmlFor="EmailId">Email</label>
            <Input
              type="text"
              name="EmailId"
              id="EmailId"
              value={userData.EmailId}
              onChange={handleChange}
            />
            <label htmlFor="Country_Of_Birth">Country Of Birth</label>
            <Input
              type="text"
              name="Country_Of_Birth"
              id="Country_Of_Birth"
              value={userData.Country_Of_Birth}
              onChange={handleChange}
            />
            <label htmlFor="State">State</label>
            <Input
              type="text"
              name="State"
              id="State"
              value={userData.State}
              onChange={handleChange}
            />
            <label htmlFor="City">City</label>
            <Input
              type="text"
              name="City"
              id="City"
              value={userData.City}
              onChange={handleChange}
            />
            <label htmlFor="DOB">Date Of Birth</label>
            <Input
              type="Date"
              name="DOB"
              id="DOB"
              value={userData.DOB}
              onChange={handleChange}
            />
            <label htmlFor="gender">Gender</label>
            <div style={{display:"flex"}}><Input
              type="Radio"
              name="gender"
              id="Male"
              value={"Male"}
              onChange={handleChange}
            /><label htmlFor="Male" style={{marginRight:"10px"}}>Male</label>
            <Input
              type="Radio"
              name="gender"
              id="Female"
              value={"Female"}
              onChange={handleChange}
            /><label htmlFor="Female">Female</label>
            </div>
            <label htmlFor="Maritial_Status">Maritial</label>
            <div style={{display:"flex"}}>
            <Input
              type="Radio"
              name="Maritial_Status"
              id="Single"
              value="Single"
              onChange={handleChange}
            /><label htmlFor="Single" style={{marginRight:"10px"}}>Single</label>
            <Input
              type="Radio"
              name="Maritial_Status"
              id="Married"
              value="Married"
              onChange={handleChange}
            /><label htmlFor="Married">Married</label>
            </div>
            <label htmlFor="Module">Module Status</label>
            <div style={{display:"flex"}}>
            <Input
              type="Radio"
              name="Module"
              id="Academic"
              value="Academic"
              onChange={handleChange}
            /><label htmlFor="Academic" style={{marginRight:"10px"}}>Academic</label>
            <Input
              type="Radio"
              name="Module"
              id="General"
              value="General"
              onChange={handleChange}
            /><label htmlFor="General">General</label>
            </div>
            <label htmlFor="IELTS_O">IELTS O</label>
            <Input
              type="Number"
              name="IELTS_O"
              id="IELTS_O"
              value={userData.IELTS_O}
              onChange={handleChange}
            />
             <label htmlFor="IELTS_L">IELTS L</label>
            <Input
              type="Number"
              name="IELTS_L"
              id="IELTS_L"
              value={userData.IELTS_L}
              onChange={handleChange}
            />
             <label htmlFor="IELTS_R">IELTS R</label>
            <Input
              type="Number"
              name="IELTS_R"
              id="IELTS_R"
              value={userData.IELTS_R}
              onChange={handleChange}
            />
             <label htmlFor="IELTS_W">IELTS W</label>
            <Input
              type="Number"
              name="IELTS_W"
              id="IELTS_W"
              value={userData.IELTS_W}
              onChange={handleChange}
            />
             <label htmlFor="IELTS_S">IELTS S</label>
            <Input
              type="Number"
              name="IELTS_S"
              id="IELTS_S"
              value={userData.IELTS_S}
              onChange={handleChange}
            />
            <label htmlFor="I_Date_OF_Exam_Taken">IELTS Exam Date</label>
            <Input
              type="Date"
              name="I_Date_OF_Exam_Taken"
              id="I_Date_OF_Exam_Taken"
              value={userData.I_Date_OF_Exam_Taken}
              onChange={handleChange}
            />
            <label htmlFor="PTE_O">PTE O</label>
            <Input
              type="Number"
              name="PTE_O"
              id="PTE_O"
              value={userData.PTE_O}
              onChange={handleChange}
            />
             <label htmlFor="PTE_L">PTE L</label>
            <Input
              type="Number"
              name="PTE_L"
              id="PTE_L"
              value={userData.PTE_L}
              onChange={handleChange}
            />
             <label htmlFor="PTE_R">PTE R</label>
            <Input
              type="Number"
              name="PTE_R"
              id="PTE_R"
              value={userData.PTE_R}
              onChange={handleChange}
            />
             <label htmlFor="PTE_W">PTE W</label>
            <Input
              type="Number"
              name="PTE_W"
              id="PTE_W"
              value={userData.PTE_W}
              onChange={handleChange}
            />
             <label htmlFor="PTE_S">PTE S</label>
            <Input
              type="Number"
              name="PTE_S"
              id="PTE_S"
              value={userData.PTE_S}
              onChange={handleChange}
            />
            <label htmlFor="P_Date_OF_Exam_Taken">PTE Exam Date</label>
            <Input
              type="Date"
              name="P_Date_OF_Exam_Taken"
              id="P_Date_OF_Exam_Taken"
              value={userData.P_Date_OF_Exam_Taken}
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
            <label htmlFor="GRE_quantity">GRE Quantitive</label>
            <Input
              type="Number"
              name="GRE_quantity"
              id="GRE_quantity"
              value={userData.GRE_quantity}
              onChange={handleChange}
            />
            <label htmlFor="GRE_verbal">GRE Verbal</label>
            <Input
              type="Number"
              name="GRE_verbal"
              id="GRE_verbal"
              value={userData.GRE_verbal}
              onChange={handleChange}
            />
            <label htmlFor="GRE_writing">GRE Writing</label>
            <Input
              type="Number"
              name="GRE_writing"
              id="GRE_writing"
              value={userData.GRE_writing}
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
            <label htmlFor="GMAT_quantity">GMAT Quantitive</label>
            <Input
              type="Number"
              name="GMAT_quantity"
              id="GMAT_quantity"
              value={userData.GMAT_quantity}
              onChange={handleChange}
            />
            <label htmlFor="GMAT_verbal">GMAT Verbal</label>
            <Input
              type="Number"
              name="GMAT_verbal"
              id="GMAT_verbal"
              value={userData.GMAT_verbal}
              onChange={handleChange}
            />
            <label htmlFor="GMAT_writing">GMAT Writing</label>
            <Input
              type="Number"
              name="GMAT_writing"
              id="GMAT_writing"
              value={userData.GMAT_writing}
              onChange={handleChange}
            />
            <label htmlFor="GMAT_reasoning">GMAT Reasoning</label>
            <Input
              type="Number"
              name="GMAT_reasoning"
              id="GMAT_reasoning"
              value={userData.GMAT_reasoning}
              onChange={handleChange}
            />
            <label htmlFor="Duolingo">Duolingo S</label>
            <Input
              type="Number"
              name="Duolingo"
              id="Duolingo"
              value={userData.Duolingo}
              onChange={handleChange}
            />
            <label htmlFor="tenth">10th Score</label>
            <Input
              type="Number"
              name="tenth"
              id="tenth"
              value={userData.tenth}
              onChange={handleChange}
            />
            <label htmlFor="twelveth">12th Score</label>
            <Input
              type="Number"
              name="twelveth"
              id="twelveth"
              value={userData.twelveth}
              onChange={handleChange}
            />
            <label htmlFor="twelveth_Backlog">12th Backlog</label>
            <Input
              type="Number"
              name="twelveth_Backlog"
              id="twelveth_Backlog"
              value={userData.twelveth_Backlog}
              onChange={handleChange}
            />
            <label htmlFor="diploma">Diploma Score</label>
            <Input
              type="Number"
              name="diplomaCGPA"
              id="diplomaCGPA"
              value={userData.diplomaCGPA}
              onChange={handleChange}
            />
            <label htmlFor="diploma_Backlog">Diploma Backlog</label>
            <Input
              type="Number"
              name="diploma_Backlog"
              id="diploma_Backlog"
              value={userData.diploma_Backlog}
              onChange={handleChange}
            />
            <label htmlFor="bachelorsDName">Bachelor Degree Name</label>
            <Input
              type="text"
              name="bachelorsDName"
              id="bachelorsDName"
              value={userData.bachelorsDName}
              onChange={handleChange}
            />
            <label htmlFor="bachelorsCGPA">Bachelor Score</label>
            <Input
              type="Number"
              name="bachelorsCGPA"
              id="bachelorsCGPA"
              value={userData.bachelorsCGPA}
              onChange={handleChange}
            />
            <label htmlFor="B_Backlog">Bachelor Backlog</label>
            <Input
              type="Number"
              name="B_Backlog"
              id="B_Backlog"
              value={userData.B_Backlog}
              onChange={handleChange}
            />
            <label htmlFor="mastersDName">Master Degree Name</label>
            <Input
              type="text"
              name="mastersDName"
              id="mastersDName"
              value={userData.mastersDName}
              onChange={handleChange}
            />
            <label htmlFor="mastersCGPA">Master Score</label>
            <Input
              type="Number"
              name="mastersCGPA"
              id="mastersCGPA"
              value={userData.mastersCGPA}
              onChange={handleChange}
            />
            <label htmlFor="M_Backlog">Master Backlog</label>
            <Input
              type="Number"
              name="M_Backlog"
              id="M_Backlog"
              value={userData.M_Backlog}
              onChange={handleChange}
            />
            <label htmlFor="Company_Name">Company name</label>
            <Input
              type= "Array"
              name="Company_Name"
              id="Company_Name"
              value={userData.Company_Name}
              onChange={handleChange}
            />
            <label htmlFor="Designation">Designation</label>
            <Input
              type="String"
              name="Designation"
              id="Designation"
              value={userData.Designation}
              onChange={handleChange}
            />
            <label htmlFor="Years">Years</label>
            <Input
              type="Number"
              name="Years"
              id="Years"
              value={userData.Years}
              onChange={handleChange}
            />
            <label htmlFor="Months">Months</label>
            <Input
              type="Number"
              name="Months"
              id="Months"
              value={userData.Months}
              onChange={handleChange}
            />
            <label htmlFor="Highest_Level_of_Study">High Level Of Study</label>
            <Input
              type="String"
              name="Highest_Level_of_Study"
              id="Highest_Level_of_Study"
              value={userData.Highest_Level_of_Study}
              onChange={handleChange}
            />
            <label htmlFor="Preferred_Location_of_study">Perffered Location Of Study</label>
            <Input
              type="String"
              name="Preferred_Location_of_study"
              id="Preferred_Location_of_study"
              value={userData.Preferred_Location_of_study}
              onChange={handleChange}
            />
            <label htmlFor="Preferred_Choice_of_Program">Peffered Choice Of Program</label>
            <Input
              type="String"
              name="Preferred_Choice_of_Program"
              id="Preferred_Choice_of_Program"
              value={userData.Preferred_Choice_of_Program}
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