import React, { useState } from 'react'
import './Home.css'

function Home() {
    const [activeIndex,setactiveIndex] = useState(1);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      note: '',
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const createMailtoLink = () => {
      const { name, email, note } = formData;
      const subject = 'Form Submission';
      const body = `Name: ${name}\nEmail: ${email}\nNote: ${note}`;

      return `mailto:xyzafaq@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const handleFormSubmit = () => {
      const mailtoLink = createMailtoLink();
      window.location.href = mailtoLink;
    };    
  return (
    <>
        <div className='Home' >
            <svg className='bg_left' width="532" height="514" viewBox="0 0 532 514" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M506.188 484.983C548.279 552.762 528.182 693.169 512.872 754.9L-163.92 872.689L-235.121 602.869L-211.51 1.10027C-132.892 -1.84673 42.6733 1.30833 115.992 37.5045C207.64 82.7497 168.546 160.241 244.513 198.372C320.48 236.504 280.105 343.036 307.087 382.38C334.07 421.724 453.575 400.259 506.188 484.983Z" fill="#FFF1DA"/>
            </svg>
            <svg className='bg_right' width="727" height="730" viewBox="0 0 727 730" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3069 228C-18.0931 159.2 5.4736 19.3333 22.3069 -42L701.807 -143L766.307 128.5L727.807 729.5C649.14 730.5 473.707 723 401.307 685C310.807 637.5 351.807 561 276.807 521C201.807 481 244.807 375.5 218.807 335.5C192.807 295.5 72.8069 314 22.3069 228Z" fill="#FFF1DA"/>
            </svg>
            {   activeIndex === 1 ?
                <div className='hero1 fade-in' >
                    <div className='hero1_left flex' >
                        <div className='h1_left_con' >
                            <img className='logo' src='/logo.webp' />
                            <div className='text1' >Best Destinations around the world</div>
                            <div className='text2' >
                                Travel, enjoy <br/> and live a new <br/> and full life
                                <img src='/line.png' className='line_text' />
                            </div>
                            <div className='text3' >
                                Built Wicket longer admire do barton vanity <br/> 
                                itself do in it. Preferred to sportsmen it <br/> 
                                engrossed listening. Park gate sell they west <br/>
                                hard for the.
                            </div>
                            <div className='align_center' >
                                <img src='/next.png' onClick={()=>{setactiveIndex(2)}} className='next_icon' />
                            </div>
                        </div>
                    </div>
                    <div className='hero1_right flex' >
                        <img src='/illustrator.webp' />
                    </div>
                </div>
                : activeIndex === 2 ?
                <div className='hero2 fade-in' >
                    <img className='logo mb-5' src='/logo.webp' />
                    <div className='text2 fs25' >
                        thatsWE App - Software Description
                    </div>
                    <div className='text3 fs17 w50' >
                        The <span style={{fontWeight:'600',color:'#b07800',textDecoration:'underline'}} >thatsWE app</span> is your ultimate travel companion, bringing <span style={{fontWeight:'600'}}>innovation</span>
                        and convenience to every step of your journey. Whether you're a frequent
                        traveler or planning a once-in-a-<span style={{fontWeight:'600'}} >lifetime</span> adventure, thatsWE is designed
                        to enhance your <span style={{fontWeight:'600'}}> travel experience </span> from start to finish.
                    </div>
                    <div className='features' >
                        <ul className='text3 fs15' >
                            <p className='text1 fs17 m0' >Key Features:</p>
                            <li><strong>Interactive Maps:</strong> Seamlessly navigate through cities, landmarks, and attractions with our interactive maps. Get real-time updates on points of interest, nearby restaurants, and more.</li>

                            <li><strong>Personalized Itineraries:</strong> Create custom itineraries based on your interests, travel preferences, and available time. Let thatsWE suggest the best routes, activities, and experiences tailored just for you.</li>

                            <li><strong>Exclusive Travel Offers:</strong> Access special discounts and promotions from partnered travel agencies. Save on flights, accommodations, and activities, making your travel budget-friendly without compromising on quality.</li>

                            <li><strong>Real-time Updates:</strong> Stay informed with live updates on flight status, weather conditions, and local events. thatsWE keeps you in the loop, ensuring a smooth and stress-free travel experience.</li>

                            <li><strong>Social Integration:</strong> Share your travel experiences with friends and family directly through the app. Connect with fellow travelers, discover new destinations, and build a community of like-minded explorers.</li>

                            <li><strong>Language Support:</strong> Break down language barriers with built-in language translation features. Communicate effortlessly with locals and immerse yourself in the culture of your destination.</li>
                        </ul>
                        <p className='text1 fs17 m0' >Legal Notice:</p>
                        <ul className='text3 fs15' >
                            <li> Seamlessly navigate through cities, landmarks, and attractions with our interactive maps. Get real-time updates on points of interest, nearby restaurants, and more.</li>

                            <li> Create custom itineraries based on your interests, travel preferences, and available time. Let thatsWE suggest the best routes, activities, and experiences tailored just for you.</li>

                            <li> Access special discounts and promotions from partnered travel agencies. Save on flights, accommodations, and activities, making your travel budget-friendly without compromising on quality.</li>

                            <li> Stay informed with live updates on flight status, weather conditions, and local events. thatsWE keeps you in the loop, ensuring a smooth and stress-free travel experience.</li>

                            <li> Share your travel experiences with friends and family directly through the app. Connect with fellow travelers, discover new destinations, and build a community of like-minded explorers.</li>

                            <li> Break down language barriers with built-in language translation features. Communicate effortlessly with locals and immerse yourself in the culture of your destination.</li>
                            
                            <li> Seamlessly navigate through cities, landmarks, and attractions with our interactive maps. Get real-time updates on points of interest, nearby restaurants, and more.</li>

                            <li> Create custom itineraries based on your interests, travel preferences, and available time. Let thatsWE suggest the best routes, activities, and experiences tailored just for you.</li>

                            <li> Access special discounts and promotions from partnered travel agencies. Save on flights, accommodations, and activities, making your travel budget-friendly without compromising on quality.</li>

                            <li> Stay informed with live updates on flight status, weather conditions, and local events. thatsWE keeps you in the loop, ensuring a smooth and stress-free travel experience.</li>

                            <li> Share your travel experiences with friends and family directly through the app. Connect with fellow travelers, discover new destinations, and build a community of like-minded explorers.</li>

                            <li> Break down language barriers with built-in language translation features. Communicate effortlessly with locals and immerse yourself in the culture of your destination.</li>
                        </ul>
                    </div>
                    <div className='align_center w50' >
                        <img src='/next.png' onClick={()=>{setactiveIndex(3)}} className='next_icon' />
                    </div>
                </div>
                :
                <>
                    <div className='hero3 fade-in' >
                        <div className='hero3_left flex' >
                            <img style={{height:'30rem'}} src='/c2.webp' />
                        </div>
                        <div className='hero3_right flex' >
                            <form onSubmit={handleFormSubmit} className='contact_con' >
                                <div className='text2 fs30' >Contact Us</div>
                                <label htmlFor='name' className='input_label w28 mb-5' >Name</label>
                                <input 
                                    type='text' 
                                    id='name'
                                    name='name'
                                    className='contact_input w28 mb-10' 
                                    placeholder='Enter name here'
                                    onChange={handleInputChange}
                                    value={formData.name}
                                />
                                <label htmlFor='email' className='input_label w28 mb-5' >Email</label>
                                <input 
                                    type='text' 
                                    id='email'
                                    name='email'
                                    className='contact_input w28 mb-10'
                                    placeholder='Enter email here'
                                    onChange={handleInputChange}
                                    value={formData.email}
                                />
                                <label htmlFor='note' className='input_label w28 mb-5' >Note</label>
                                <textarea
                                    className='contact_input w28 h11 mb-10 note_padding'
                                    type='text'
                                    id='note'
                                    name='note'
                                    placeholder='Enter note here' 
                                    onChange={handleInputChange}
                                    value={formData.note}
                                />
                                <div className='w28 align_end' >
                                    <button className='submit-btn mr7' onClick={()=>{setactiveIndex(2)}} >Back</button>
                                    <button type='Submit' className='submit-btn' >Submit</button>
                                    {/* <a href="mailto:xyzafaq@gmail.com?subject=Test%20Subject&body=Test%20Body">
                                        Send Email
                                    </a> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            }
        </div>
    </>
  )
}

export default Home
