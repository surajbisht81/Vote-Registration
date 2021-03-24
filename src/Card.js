import React from 'react';
import "./Card.css";

function Card() {
    return (
        <div className="card">
            
            <div className=" same__header card__header1">
                <p>Type 6</p>
                <p>[See rule 13(1) and 26]</p>
            </div>
            <div className=" same__header card__header2">
                <p>Application for inclusion of name in the electoral roll for the first time due to the transfer of voter or any other</p>
                <p>constituency from any one constituency</p>
            </div>

            <div className="upper__specifications">
                <h4 id="h4__part">In Service</h4>
                <h4 id="h4__part">Electoral Registration Officer,</h4>

                <div className="upper__specifications__first">
                    <section>
                        <h4>State</h4>
                        <select>
                            <option value="select">Select</option>
                        </select>
                        <h4 id="h4__part2">District</h4>
                        <select>
                            <option value="select">Select</option>
                        </select>
                    </section>
                    <section>
                        <h4>Legislative Assembly / Parlimentary constituency *</h4>
                        <select>
                            <option value="select">Select</option>
                        </select>
                    </section>
                </div>
                <h4 id="h4__part">I request that my name be included in electoral rolls for all the aforesaid areas.</h4>
                <input type="radio" />
                <label>First time voter</label>
                <br />
                <input type="radio" />
                <label>Due to transfer from other meeting areas.</label>
                <h4 id="h4__part">Below are specifications in support of my claim to be included in the electoral rolls.</h4>
            </div>

            <div className=" same__header card__header2">
                <p>Mandatory specifications</p>
            </div>

            <div className="middle__specification1">
                <ul>
                    <li>
                        <span>(A) Name*</span>
                        <span id="middle__specification1__span"> <input type="text" placeholder="(In English)"/> </span>
                        <span id="middle__specification1__span"> <input type="text" placeholder="(In Regional)"/> </span>
                    </li>
                    <li>
                        <span>(B) Surname (if any)*</span>
                        <span id="middle__specification1__span"> <input type="text" placeholder="(In English)"/> </span>
                        <span id="middle__specification1__span"> <input type="text" placeholder="(In Regional)"/> </span>
                    </li>
                    <li>
                        <span>(C) Name of the applicant's relative *</span>
                        <span id="middle__specification1__span"> <input type="text" placeholder="(In English)"/> </span>
                        <span id="middle__specification1__span"> <input type="text" placeholder="(In Regional)"/> </span>
                    </li>
                    <li>
                        <span>Nickname of the applicant's relative * </span>
                        <span id="middle__specification1__span"> <input type="text" placeholder="(In English)"/> </span>
                        <span id="middle__specification1__span"> <input type="text" placeholder="(In Regional)"/> </span>
                    </li>
                    <li>
                        <span>(D) Type of the relationship </span>
                        <span id="middle__specification1__select"> <select><option value="select">select</option></select> </span>
                    </li>
                    <li>
                        <input type="radio"></input>
                        <span>(E) Age [on January 1 of the current calender] * </span>
                        <span> <button> 2019 </button> </span>
                        <span id="middle__specification1__select"> <select><option value="select">Year</option></select> </span>
                        <span id="middle__specification1__select"> <select><option value="select">Month</option></select> </span>
                    </li>
                    <h4>Or</h4>
                    <li>
                        <input type="radio"></input>
                        <span> (F) Date of birth (in the form of day/ month/ year) (if known) *</span>
                        <span id="middle__specification1__span"> <input type="date" /> </span>
                    </li>
                    <li>
                        <span>(G) Applicant's gender * </span>
                        <span id="middle__specification1__select"> 
                            <select>
                                <option value="select">select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select> 
                        </span>
                    </li>
                </ul>
            </div>

            <div className=" same__header card__header2">
                <p>(H) Current address, whose applicant is nominally resident</p>
            </div>

            <div className="middle__specification1">
                 <ul>
                     <li>
                        <span>House no. *</span>
                        <span id="middle__specification1__span"> <input type="text" placeholder="(In English)"/> </span>
                        <span id="middle__specification1__span"> <input type="text" placeholder="(In Regional)"/> </span>
                     </li>
                     <li>
                        <span>Street / area / location *</span>
                        <span id="middle__specification1__span"> <input type="text" placeholder="(In English)"/> </span>
                        <span id="middle__specification1__span"> <input type="text" placeholder="(In Regional)"/> </span>
                     </li>
                     <li>
                        <span>City / Village: * </span>
                        <span id="middle__specification1__span"> <input type="text" placeholder="(In English)"/> </span>
                        <span id="middle__specification1__span"> <input type="text" placeholder="(In Regional)"/> </span>
                     </li>
                     <li>
                        <span>Post Office: *</span>
                        <span id="middle__specification1__span"> <input type="text" placeholder="(In English)"/> </span>
                        <span id="middle__specification1__span"> <input type="text" placeholder="(In Regional)"/> </span>
                     </li>
                     <li>
                        <span>Pin Code * </span>
                        <span id="middle__specification1__span"> <input type="number" /> </span>
                     </li>
                     <li>
                        <span>State / Union Territory *</span>
                        <span id="middle__specification1__select"><select><option value="select">select</option></select></span>
                    </li>
                    <li>
                        <span>District *</span>
                        <span id="middle__specification1__select"><select><option value="select">select</option></select></span>
                    </li>
                    <li id="special__listItem"></li>

                    <li>
                        <span>Family / Neighbour Epic No.</span>
                        <span id="middle__specification1__span"> <input type="number" /> </span>
                     </li>

                     <li id="special__listItem"></li>
                 </ul>
            </div>

            <div className=" same__header card__header2">
                <p>Optional specialties</p>
            </div>

            <div className="middle__specification1">
                <ul>
                    <li>
                        <span>(T) Disability (if any)</span>
                    </li>
                    <li>
                        <span>
                            <input type="checkbox" />
                            <label>Visual impairment  </label>
                        </span>
                        <span>
                            <input type="checkbox" />
                            <label>Speech and hearing impairment   </label>
                        </span>
                        <span>
                            <input type="checkbox" />
                            <label>Motion disabling   </label>
                        </span>
                        <span>
                            <input type="checkbox" />
                            <label>other   </label>
                        </span>
                        <span id="middle__specification1__span"> <input type="text" /> </span>
                    </li>
                    <li>
                        <span>(Th) Email ID (optional) </span>
                        <span id="middle__specification1__span"> <input type="text" /> </span>
                    </li>
                    <li>
                        <span>(D) mobile number (optional)</span>
                        <span id="indian__number">+91</span>
                        <span id="middle__specification1__span"> <input type="number" /> </span>
                    </li>
                </ul>
            </div>
            <div className=" same__header card__header2">
                <p>Upload supporting documents (Supported formats .jpg, .png, .bmp, .jpeg) (max. 2MB)</p>
            </div>

            <div className="middle__specification1">
                <ul>
                    <li>
                    <   span>Your photo *</span>
                        <input type="file"/>
                    </li>
                    <li>
                        <span>Age proof *</span>
                        <input type="file"/>
                    </li>
                    <li>
                        <span>Adress proof *</span>
                        <input type="file"/>
                    </li>
                </ul>
            </div>

            <div className=" same__header card__header2">
                <p>Declaration</p>
            </div>   

            <div className="middle__specification1">
                <h4 id="h4__part">I declare I declare that according to my best knowledge and belief</h4>
                <h4 id="h4__part">I am a citizen of India and of my birth;</h4>
                <br />
                <ul>
                    <li>
                        <span>City / Village:  </span>
                        <span id="middle__specification1__span"> <input type="text" /> </span>
                    </li>
                    <li>
                        <span>Select state *</span>
                        <span id="middle__specification1__select"><select><option value="select">select</option></select></span>
                        <span>District * </span>
                        <span id="middle__specification1__select"><select><option value="select">select</option></select></span>
                    </li>
                    <li>
                        <span>Date * </span>
                        <span id="middle__specification1__span"> <input type="date" /> </span>
                    </li>
                </ul>
                <h4 id="h4__part">(ii) I am a nominally resident in the address given in the above (date, month, year) above;</h4>
                <h4 id="h4__part">I have not applied to include my name in the electoral roll for any other constituency;</h4>
                <br />
                <ul>
                    <li>
                        <input type="radio"></input>
                        <span>(iv) My name has not been already included in the electoral roll for this or any other assembly / parliamentary constituenc</span>
                    </li>
                    <h4> Or </h4>
                    <li>
                        <input type="radio"></input>
                        <span>My name would have been included in electoral rolls of the State's constituency, in which I was already residing in the address mentioned</span>
                        <span>below, and if so, then I request that it be removed from that electoral roll. Go.</span>
                    </li>
                    <li id="special__listItem"></li>
                    <li>
                        <span>Location *</span>
                        <span id="middle__specification1__span"> <input type="text" /> </span>
                        <span>date </span>
                        <span id="middle__specification1__span"> <input type="date" /> </span>
                    </li>
                </ul>
                <h4 id="h4__part">I am afraid that the statement or declaration, which is false, to whom I know it or believe that it is false or I do not believe in being true, the People's</h4>
                <h4 id="h4__part">Representation Act, 1950 (43 of 1950 ) Is punishable under section 31</h4>
                <span id="card__buttons"><button>Reset</button></span>
                <span><button>Submit</button></span>
            </div>

            {/* <div id="card__buttons">
                <span><button>Reset</button></span>
                <span><button>Submit</button></span>
            </div> */}
        </div>
    )
}

export default Card
