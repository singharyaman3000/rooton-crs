
#Import required libraries
import pymongo
from flask import Flask, request, jsonify,render_template
from bson.objectid import ObjectId
from flask_cors import CORS,cross_origin


#Connect to MongoDB Atlas
client = pymongo.MongoClient("mongodb+srv://Dhrumil:Dhrumil@cluster0.unaufu9.mongodb.net/ROOT_ON?retryWrites=true&w=majority")
db = client.ROOT_ON

#Initialize flask application
app = Flask(__name__)
CORS = (app)

@app.route("/")
def my_index():
    return render_template('../frontend/build/index.html')

#Create user
@app.route('/userRegister', methods=['POST'])
@cross_origin()
def create_user():
    userdata = request.get_json()
    First_Name = userdata['First_Name']
    Last_Name = userdata['Last_Name']
    MobileNo = userdata['MobileNo']
    EmailId = userdata['EmailId']
    Country_Of_Birth = userdata['Country_Of_Birth']
    State=userdata['State']
    City=userdata['City']
    DOB=userdata['DOB']
    gender = userdata['gender']
    Maritial_Status = userdata['Maritial_Status']
    Module = userdata['Module']
    IELTS_O = userdata['IELTS_O']
    IELTS_L = userdata['IELTS_L']
    IELTS_R = userdata['IELTS_R']
    IELTS_W = userdata['IELTS_W']
    IELTS_S = userdata['IELTS_S']
    I_Date_OF_Exam_Taken = userdata['I_Date_OF_Exam_Taken']
    PTE_O = userdata['PTE_O']
    PTE_L = userdata['PTE_L']
    PTE_R = userdata['PTE_R']
    PTE_W = userdata['PTE_W']
    PTE_S = userdata['PTE_S']
    P_Date_OF_Exam_Taken = userdata['P_Date_OF_Exam_Taken']
    GRE = userdata['GRE']
    GRE_quantity = userdata['GRE_quantity']
    GRE_verbal = userdata['GRE_verbal']
    GRE_writing = userdata['GRE_writing']
    GMAT = userdata['GMAT']
    GMAT_quantity = userdata['GMAT_quantity']
    GMAT_verbal = userdata['GMAT_verbal']
    GMAT_writing = userdata['GMAT_writing']
    GMAT_reasoning = userdata['GMAT_reasoning']
    Duolingo = userdata['Duolingo']
    tenth = userdata['tenth']
    twelveth = userdata['twelveth']
    twelveth_Backlog = userdata['twelveth_Backlog']
    diplomaCGPA = userdata['diplomaCGPA']
    diploma_Backlog = userdata['diploma_Backlog']
    bachelorsDName = userdata['bachelorsDName']
    bachelorsCGPA = userdata['bachelorsCGPA']
    B_Backlog = userdata['B_Backlog']
    mastersDName = userdata['mastersDName']
    mastersCGPA = userdata['mastersCGPA']
    M_Backlog = userdata['M_Backlog']
    Company_Name = userdata['Company_Name']
    Designation = userdata['Designation']
    Years = userdata['Years']
    Months = userdata['Months']
    Highest_Level_of_Study = userdata['Highest_Level_of_Study']
    Preferred_Location_of_study = userdata['Preferred_Location_of_study']
    Preferred_Choice_of_Program = userdata['Preferred_Choice_of_Program']
    user_id = db.userdetails.insert_one({'First_Name':First_Name,'Last_Name':Last_Name,'MobileNo':MobileNo,'EmailId':EmailId,'Country_Of_Birth':Country_Of_Birth,'State':State,'City':City,'DOB':DOB,'gender':gender,'Maritial_Status':Maritial_Status,'Module':Module,'IELTS_O':IELTS_O,'IELTS_L':IELTS_L,'IELTS_R':IELTS_R,'IELTS_W':IELTS_W,'IELTS_S':IELTS_S,'I_Date_OF_Exam_Taken':I_Date_OF_Exam_Taken,'PTE_O':PTE_O,'PTE_L':PTE_L,'PTE_R':PTE_R,'PTE_W':PTE_W,'PTE_S':PTE_S,'P_Date_OF_Exam_Taken':P_Date_OF_Exam_Taken,'GRE':GRE,'GRE_quantity':GRE_quantity,'GRE_verbal':GRE_verbal,'GRE_writing':GRE_writing,'GMAT':GMAT,'GMAT_quantity':GMAT_quantity,'GMAT_verbal':GMAT_verbal,'GMAT_writing':GMAT_writing,'GMAT_reasoning':GMAT_reasoning,'Duolingo':Duolingo,'tenth':tenth,'twelveth':twelveth,'twelveth_Backlog':twelveth_Backlog,'diplomaCGPA':diplomaCGPA,'diploma_Backlog':diploma_Backlog,'bachelorsDName':bachelorsDName,'bachelorsCGPA':bachelorsCGPA,'B_Backlog':B_Backlog,'mastersDName':mastersDName,'mastersCGPA':mastersCGPA,'M_Backlog':M_Backlog,'Company_Name':Company_Name,'Designation':Designation,'Years':Years,'Months':Months,'Highest_Level_of_Study':Highest_Level_of_Study,'Preferred_Location_of_study':Preferred_Location_of_study,'Preferred_Choice_of_Program':Preferred_Choice_of_Program,}).inserted_id
    return jsonify({'user_id': str(user_id)}), 200


@app.route('/collegeRegister', methods=['POST'])
@cross_origin()
def create_college():
    data = request.get_json()
    collegeinfo={
    'FieldOfStudy' :  data['FieldOfStudy'],
    'Institute': data['Institute'],
    'Title' :  data['Title'],
    'Level' :  data['Level'],
    'Length_Years' :  data['Length_Years'],
    'Intake' :  data['Intake'],
    'Language': data['Language'],
    'Fee': data['Fee'],
    'ApplicationFee': data['ApplicationFee'],
    'Ielts_Reading':data['Ielts_Reading'],
    'Ielts_Writing':data['Ielts_Writing'],
    'Ielts_Overall':data['Ielts_Overall'],
    'Ielts_Speaking':data['Ielts_Speaking'],
    'Ielts_Listening':data['Ielts_Listening'],
    'Duolingo_Overall': data['Duolingo_Overall'],
   'PTE_Reading':data['PTE_Reading'],
    'PTE_Writing':data['PTE_Writing'],
    'PTE_Overall':data['PTE_Overall'],
    'PTE_Speaking':data['PTE_Speaking'],
    'PTE_Listening':data['PTE_Listening'],
    'City': data['City'],
  'Province': data['Province'],
  'Country': data['Country'],
  'Status': data['Status'],
  'Percentage':data['Percentage'] ,
  'Backlogs': data['Backlogs'],
  'Gap_Years': data['Gap_Years'],
  'Previous_Education': data['Previous_Education'],
  'Work_Expereiecne_Years': data['Work_Expereiecne_Years'],
  'GRE': data['GRE'],
  'GMAT': data['GMAT']
    
    }
    college_id = db.collegedetails.insert_one(collegeinfo).inserted_id
    return jsonify({'college_id': str(college_id)}), 200


#Read user
@app.route('/user/<user_id>', methods=['GET'])
def read_user(user_id):
    user = db.users.find_one({'_id': ObjectId(user_id)})
    if user:
        return jsonify({'name': user['name'], 'email': user['email']}), 200
    else:
        return jsonify({'message': 'User not found'}), 404

#Update user
@app.route('/user/<user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.get_json()
    name = data['name']
    email = data['email']
    user = db.users.update_one({'_id': ObjectId(user_id)}, {'$set': {'name': name, 'email': email}})
   

if __name__ == '__main__':
    app.run(port=5000)
