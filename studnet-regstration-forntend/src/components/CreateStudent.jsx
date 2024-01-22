import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createStudent, getStudentById, updateStudents } from "../services/EmployeeService";

export default function CreateStudent() {
  const [name, setName] = useState("");
  const [NRC, setNRC] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("MALE", "FEMALE");
  const [hobby, setHobby] = useState("");
  const [DateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [region, setRegion] = useState("");
  const [capital, setCapital] = useState("");
  const [township, setTownship] = useState("");
  const [street, setStreet] = useState("");
  const [year, setYear] = useState("");
  const [bachelor, setBachelor] = useState("");


const {id} = useParams(); 

  const NameHandler = (e) => setName(e.target.value);
  const NRCHandler = (e) => setNRC(e.target.value);
  const EmailHandler = (e) => setEmail(e.target.value);
  const PhoneHandler = (e) => setPhone(e.target.value);
  const GenderHandler = (e) => setGender(e.target.value);
  const HobbyHandler = (e) => setHobby(e.target.value);
  const PasswordHandler = (e) => setPassword(e.target.value);
  const DateOfBirthHandler = (e) => setDateOfBirth(e.target.value);
  const AddressHandler = (e) => setAddress(e.target.value);
  const RegionHandler = (e) => setRegion(e.target.value);
  const CapitalHandler = (e) => setCapital(e.target.value);
  const TownshipHandler = (e) => setTownship(e.target.value);
  const StreetHandler = (e) => setStreet(e.target.value);
  const YearHandler = (e) => setYear(e.target.value);
  const BachelorHandler = (e) => setBachelor(e.target.value);

  const navigator = useNavigate();

  const saveAndUpdateStudent = (e) => {
    e.preventDefault();
    const students = {
      id: 0,
      name,
      NRC,
      email,
      phone,
      gender,
      hobby,
      DateOfBirth,
      password,
      address: { id: 0, address, region, capital, township, street },
      educations: [{ id: 0, year, bachelor }],
    };
    console.log(students);
    if (id){

        updateStudents(id,students).then ( resp => console.log(resp)) 
                                .catch(error => console.log(error))
                                navigator("/student")
            
        }
        else{

            createStudent(students)
            .then((stu) => console.log(stu))
            .catch((error) => console.log(error));
          navigator("/student");
        }
    
  };


  function pageTitle(){
    if(id) {
        return <h2 className="text-center">Update Student</h2>
    }
    else{
        return  <h2 className="text-center"> Create Student </h2>
    }
  }

  useEffect ( () => {

    if(id){
        getStudentById(id)
            .then( resp => {
                setName(resp.data.name);
                setNRC(resp.data.NRC);
                setPhone(resp.data.phone);
                setEmail(resp.data.email);
                setGender(resp.data.gender);
                setHobby(resp.data.hobby);
                setAddress(resp.data.address);
                setDateOfBirth(resp.data.DateOfBirth);
                setRegion(resp.data.region);
                setTownship(resp.data.township);
                setCapital(resp.data.capital);
                setStreet(resp.data.street);
                setYear(resp.data.year);
                setBachelor(resp.data.bachelor)
            })
            .catch(error => console.log(error));
    }
 

    }, [id])


  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
             {
                pageTitle()
             }
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={NameHandler}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={EmailHandler}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="NRC" className="form-label">
                    NRC
                  </label>
                  <input
                    id="NRC"
                    type="text"
                    name="nrc"
                    className="form-control"
                    value={NRC}
                    onChange={NRCHandler}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    className="form-control"
                    value={phone}
                    onChange={PhoneHandler}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    id="password"
                    type="text"
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={PasswordHandler}
                  />
                </div>
                <div className="mb-3">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="male" className="form-check-l">
                          MALE
                        </label>
                        <input
                          id="male"
                          type="radio"
                          name="gender"
                          value={gender}
                          onChange={GenderHandler}
                        />{" "}
                        <br />
                        <label htmlFor="female" className="form-check-label">
                          FEMALE
                        </label>
                        <input
                          id="female"
                          type="radio"
                          name="gender"
                          value={gender}
                          onChange={GenderHandler}
                        />
                      </div>

                      <div className="col-md-6">
                        <input
                          id="swimming"
                          type="checkbox"
                          name="hobby"
                          value="SWIMMING"
                          onChange={HobbyHandler}
                        />
                        <label htmlFor="swimming" className="form-check-label">
                          SWIMMING
                        </label>
                        <br />
                        <input
                          id="reading"
                          type="checkbox"
                          name="hobby"
                          value="READING"
                          onChange={HobbyHandler}
                        />
                        <label htmlFor="reading" className="form-check-label">
                          READING
                        </label>
                        <br />
                        <input
                          id="coding"
                          type="checkbox"
                          name="hobby"
                          value="CODEING"
                          onChange={HobbyHandler}
                        />
                        <label htmlFor="coding" className="form-check-label">
                          CODING
                        </label>
                        <br />
                        <input
                          id="sleeping"
                          type="checkbox"
                          name="hobby"
                          value="SLEEPING"
                          onChange={HobbyHandler}
                        />
                        <label htmlFor="sleeping" className="form-check-label">
                          SLEEPING
                        </label>{" "}
                        <br />
                        <input
                          id="gym"
                          type="checkbox"
                          name="hobby"
                          value="GYM"
                          onChange={HobbyHandler}
                        />
                        <label htmlFor="gym" className="form-check-label">
                          GYM
                        </label>{" "}
                        <br />
                        <input
                          id="football"
                          type="checkbox"
                          name="hobby"
                          value="FOOTBALL"
                          onChange={HobbyHandler}
                        />
                        <label htmlFor="football" className="form-check-label">
                          FOOTBALL
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="dob" className="form-label">
                    DOB
                  </label>
                  <br></br>
                  <input
                    id="dob"
                    type="date"
                    name="dob"
                    value={DateOfBirth}
                    onChange={DateOfBirthHandler}
                  />
                </div>
                <div className="mb-3">
                  <div className="row">
                    <div className="col-md-2">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        value={address}
                        onChange={AddressHandler}
                      />
                    </div>
                    <div className="col-md-2">
                      <label className="form-label">Region</label>
                      <input
                        type="text"
                        name="region"
                        className="form-control"
                        value={region}
                        onChange={RegionHandler}
                      />
                    </div>
                    <div className="col-md-2">
                      <label className="form-label">Capital</label>
                      <input
                        type="text"
                        name="capital"
                        className="form-control"
                        value={capital}
                        onChange={CapitalHandler}
                      />
                    </div>
                    <div className="col-md-2">
                      <label className="form-label">Township</label>
                      <input
                        type="text"
                        name="township"
                        className="form-control"
                        value={township}
                        onChange={TownshipHandler}
                      />
                    </div>
                    <div className="col-md-2">
                      <label className="form-label">Street</label>
                      <input
                        type="text"
                        name="street"
                        className="form-control"
                        value={street}
                        onChange={StreetHandler}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Year</label>
                  <input
                    type="date"
                    name="year"
                    value={year}
                    onChange={YearHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Bachelor</label>
                  <input
                    type="text"
                    name="bachelor"
                    value={bachelor}
                    onChange={BachelorHandler}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary rounded"
                  onClick={saveAndUpdateStudent}
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
