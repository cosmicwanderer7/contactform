import type { NextPage } from "next";

import Head from "next/head";
import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FormEvent, useState } from "react";

const Home: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {};
    Array.from(e.currentTarget);

    let form = {
      name,
      email,
      phone,
      message,
      country,
    };

    const rawResponse = await fetch("/api/submit", {
      method: "post",
      headers: {
        Accept: "aplication/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const content = await rawResponse.json();

    alert("Thank you for your response click ok to clear the form.");

    setMessage("");
    setPhone("");
    setEmail("");
    setName("");
    setCountry("");
  };

  return (
    <div className="antialiased p-2 ">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Form</title>
      </Head>
      <div className="flex w-full min-h-screen justify-center items-center ">
        <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 backdrop-blur-xs bg-[#1a1a1adc] border w-full max-w-4xl p-8 rounded-lg shadow-xl shadow-[#1d1e1fb4] overflow-hidden">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-3xl text-white tracking-wide">
                Contact Form
              </h1>
              <p className="pt2 text-[#f7768ec5] text-m">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
                ducimus Eos.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-y-2 items-center">
                <PhoneIcon className="h-5 text-slate-200 mt-2 mr-1" />
                <span className="text-white">+(91)866 922 1951</span>
              </div>
              <div className="inline-flex space-y-2 items-center">
                <MailIcon className="h-5 text-slate-200 mt-2 mr-1" />
                <span className="text-white">Contactus@website.com</span>
              </div>
              <div className="inline-flex space-y-2 items-center">
                <LocationMarkerIcon className="h-5 text-slate-200 mt-1 mr-1" />
                <span className="text-white">21, street 43 ,Delhi </span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="h-[1.4rem] text-white"
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="h-[1.4rem] text-white"
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-[1.4rem] text-white"
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="h-[1.4rem] text-white"
                />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 backdrop-blur-sm bg-white/40 rounded-lg shadow-lg p-5 md:w-[82] w-70 text-gray-600 ">
              <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="text-sm">
                    Name <text className="text-red-700">*</text>
                  </label>

                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    id="name"
                    className="ring-1 ring-gray-300 w-full rounded-md border-0 shadow-md px-4 py-2 focus:ring-teal-300 focus:ring-2 outline-none mt-2"
                    placeholder="Your Full Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm">
                    Phone <text className="text-red-700">*</text>
                  </label>

                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    name="phone"
                    id="phone"
                    className="ring-1 ring-gray-300 w-full rounded-md border-0 shadow-md px-4 py-2 focus:ring-teal-300 focus:ring-2 outline-none mt-2"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm">
                    Email Address <text className="text-red-700">*</text>
                  </label>

                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className="ring-1 ring-gray-300 w-full rounded-md border-0 shadow-md px-4 py-2 focus:ring-teal-300 focus:ring-2 outline-none mt-2"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm">
                    Country Of Origin
                  </label>

                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    name="message"
                    id="message"
                    className="ring-1 ring-gray-300 w-full rounded-md border-0 shadow-md px-4 py-2 focus:ring-teal-300 focus:ring-2 outline-none mt-2"
                    placeholder="slelect"
                  >
                    <option placeholder="AF">Afghanistan</option>
                    <option placeholder="AX">Åland Islands</option>
                    <option placeholder="AL">Albania</option>
                    <option placeholder="DZ">Algeria</option>
                    <option placeholder="AS">American Samoa</option>
                    <option placeholder="AD">Andorra</option>
                    <option placeholder="AO">Angola</option>
                    <option placeholder="AI">Anguilla</option>
                    <option placeholder="AQ">Antarctica</option>
                    <option placeholder="AG">Antigua and Barbuda</option>
                    <option placeholder="AR">Argentina</option>
                    <option placeholder="AM">Armenia</option>
                    <option placeholder="AW">Aruba</option>
                    <option placeholder="AU">Australia</option>
                    <option placeholder="AT">Austria</option>
                    <option placeholder="AZ">Azerbaijan</option>
                    <option placeholder="BS">Bahamas (the)</option>
                    <option placeholder="BH">Bahrain</option>
                    <option placeholder="BD">Bangladesh</option>
                    <option placeholder="BB">Barbados</option>
                    <option placeholder="BY">Belarus</option>
                    <option placeholder="BE">Belgium</option>
                    <option placeholder="BZ">Belize</option>
                    <option placeholder="BJ">Benin</option>
                    <option placeholder="BM">Bermuda</option>
                    <option placeholder="BT">Bhutan</option>
                    <option placeholder="BO">
                      Bolivia (Plurinational State of)
                    </option>
                    <option placeholder="BQ">
                      Bonaire, Sint Eustatius and Saba
                    </option>
                    <option placeholder="BA">Bosnia and Herzegovina</option>
                    <option placeholder="BW">Botswana</option>
                    <option placeholder="BV">Bouvet Island</option>
                    <option placeholder="BR">Brazil</option>
                    <option placeholder="IO">
                      British Indian Ocean Territory (the)
                    </option>
                    <option placeholder="BN">Brunei Darussalam</option>
                    <option placeholder="BG">Bulgaria</option>
                    <option placeholder="BF">Burkina Faso</option>
                    <option placeholder="BI">Burundi</option>
                    <option placeholder="CV">Cabo Verde</option>
                    <option placeholder="KH">Cambodia</option>
                    <option placeholder="CM">Cameroon</option>
                    <option placeholder="CA">Canada</option>
                    <option placeholder="KY">Cayman Islands (the)</option>
                    <option placeholder="CF">
                      Central African Republic (the)
                    </option>
                    <option placeholder="TD">Chad</option>
                    <option placeholder="CL">Chile</option>
                    <option placeholder="CN">China</option>
                    <option placeholder="CX">Christmas Island</option>
                    <option placeholder="CC">
                      Cocos (Keeling) Islands (the)
                    </option>
                    <option placeholder="CO">Colombia</option>
                    <option placeholder="KM">Comoros (the)</option>
                    <option placeholder="CD">
                      Congo (the Democratic Republic of the)
                    </option>
                    <option placeholder="CG">Congo (the)</option>
                    <option placeholder="CK">Cook Islands (the)</option>
                    <option placeholder="CR">Costa Rica</option>
                    <option placeholder="HR">Croatia</option>
                    <option placeholder="CU">Cuba</option>
                    <option placeholder="CW">Curaçao</option>
                    <option placeholder="CY">Cyprus</option>
                    <option placeholder="CZ">Czechia</option>
                    <option placeholder="CI">Côte d&aposIvoire</option>
                    <option placeholder="DK">Denmark</option>
                    <option placeholder="DJ">Djibouti</option>
                    <option placeholder="DM">Dominica</option>
                    <option placeholder="DO">Dominican Republic (the)</option>
                    <option placeholder="EC">Ecuador</option>
                    <option placeholder="EG">Egypt</option>
                    <option placeholder="SV">El Salvador</option>
                    <option placeholder="GQ">Equatorial Guinea</option>
                    <option placeholder="ER">Eritrea</option>
                    <option placeholder="EE">Estonia</option>
                    <option placeholder="SZ">Eswatini</option>
                    <option placeholder="ET">Ethiopia</option>
                    <option placeholder="FK">
                      Falkland Islands (the) [Malvinas]
                    </option>
                    <option placeholder="FO">Faroe Islands (the)</option>
                    <option placeholder="FJ">Fiji</option>
                    <option placeholder="FI">Finland</option>
                    <option placeholder="FR">France</option>
                    <option placeholder="GF">French Guiana</option>
                    <option placeholder="PF">French Polynesia</option>
                    <option placeholder="TF">
                      French Southern Territories (the)
                    </option>
                    <option placeholder="GA">Gabon</option>
                    <option placeholder="GM">Gambia (the)</option>
                    <option placeholder="GE">Georgia</option>
                    <option placeholder="DE">Germany</option>
                    <option placeholder="GH">Ghana</option>
                    <option placeholder="GI">Gibraltar</option>
                    <option placeholder="GR">Greece</option>
                    <option placeholder="GL">Greenland</option>
                    <option placeholder="GD">Grenada</option>
                    <option placeholder="GP">Guadeloupe</option>
                    <option placeholder="GU">Guam</option>
                    <option placeholder="GT">Guatemala</option>
                    <option placeholder="GG">Guernsey</option>
                    <option placeholder="GN">Guinea</option>
                    <option placeholder="GW">Guinea-Bissau</option>
                    <option placeholder="GY">Guyana</option>
                    <option placeholder="HT">Haiti</option>
                    <option placeholder="HM">
                      Heard Island and McDonald Islands
                    </option>
                    <option placeholder="VA">Holy See (the)</option>
                    <option placeholder="HN">Honduras</option>
                    <option placeholder="HK">Hong Kong</option>
                    <option placeholder="HU">Hungary</option>
                    <option placeholder="IS">Iceland</option>
                    <option placeholder="IN">India</option>
                    <option placeholder="ID">Indonesia</option>
                    <option placeholder="IR">Iran (Islamic Republic of)</option>
                    <option placeholder="IQ">Iraq</option>
                    <option placeholder="IE">Ireland</option>
                    <option placeholder="IM">Isle of Man</option>
                    <option placeholder="IL">Israel</option>
                    <option placeholder="IT">Italy</option>
                    <option placeholder="JM">Jamaica</option>
                    <option placeholder="JP">Japan</option>
                    <option placeholder="JE">Jersey</option>
                    <option placeholder="JO">Jordan</option>
                    <option placeholder="KZ">Kazakhstan</option>
                    <option placeholder="KE">Kenya</option>
                    <option placeholder="KI">Kiribati</option>
                    <option placeholder="KP">
                      Korea (the Democratic People&aposs Republic of)
                    </option>
                    <option placeholder="KR">Korea (the Republic of)</option>
                    <option placeholder="KW">Kuwait</option>
                    <option placeholder="KG">Kyrgyzstan</option>
                    <option placeholder="LA">
                      Lao People&aposs Democratic Republic (the)
                    </option>
                    <option placeholder="LV">Latvia</option>
                    <option placeholder="LB">Lebanon</option>
                    <option placeholder="LS">Lesotho</option>
                    <option placeholder="LR">Liberia</option>
                    <option placeholder="LY">Libya</option>
                    <option placeholder="LI">Liechtenstein</option>
                    <option placeholder="LT">Lithuania</option>
                    <option placeholder="LU">Luxembourg</option>
                    <option placeholder="MO">Macao</option>
                    <option placeholder="MG">Madagascar</option>
                    <option placeholder="MW">Malawi</option>
                    <option placeholder="MY">Malaysia</option>
                    <option placeholder="MV">Maldives</option>
                    <option placeholder="ML">Mali</option>
                    <option placeholder="MT">Malta</option>
                    <option placeholder="MH">Marshall Islands (the)</option>
                    <option placeholder="MQ">Martinique</option>
                    <option placeholder="MR">Mauritania</option>
                    <option placeholder="MU">Mauritius</option>
                    <option placeholder="YT">Mayotte</option>
                    <option placeholder="MX">Mexico</option>
                    <option placeholder="FM">
                      Micronesia (Federated States of)
                    </option>
                    <option placeholder="MD">Moldova (the Republic of)</option>
                    <option placeholder="MC">Monaco</option>
                    <option placeholder="MN">Mongolia</option>
                    <option placeholder="ME">Montenegro</option>
                    <option placeholder="MS">Montserrat</option>
                    <option placeholder="MA">Morocco</option>
                    <option placeholder="MZ">Mozambique</option>
                    <option placeholder="MM">Myanmar</option>
                    <option placeholder="NA">Namibia</option>
                    <option placeholder="NR">Nauru</option>
                    <option placeholder="NP">Nepal</option>
                    <option placeholder="NL">Netherlands (the)</option>
                    <option placeholder="NC">New Caledonia</option>
                    <option placeholder="NZ">New Zealand</option>
                    <option placeholder="NI">Nicaragua</option>
                    <option placeholder="NE">Niger (the)</option>
                    <option placeholder="NG">Nigeria</option>
                    <option placeholder="NU">Niue</option>
                    <option placeholder="NF">Norfolk Island</option>
                    <option placeholder="MP">
                      Northern Mariana Islands (the)
                    </option>
                    <option placeholder="NO">Norway</option>
                    <option placeholder="OM">Oman</option>
                    <option placeholder="PK">Pakistan</option>
                    <option placeholder="PW">Palau</option>
                    <option placeholder="PS">Palestine, State of</option>
                    <option placeholder="PA">Panama</option>
                    <option placeholder="PG">Papua New Guinea</option>
                    <option placeholder="PY">Paraguay</option>
                    <option placeholder="PE">Peru</option>
                    <option placeholder="PH">Philippines (the)</option>
                    <option placeholder="PN">Pitcairn</option>
                    <option placeholder="PL">Poland</option>
                    <option placeholder="PT">Portugal</option>
                    <option placeholder="PR">Puerto Rico</option>
                    <option placeholder="QA">Qatar</option>
                    <option placeholder="MK">
                      Republic of North Macedonia
                    </option>
                    <option placeholder="RO">Romania</option>
                    <option placeholder="RU">Russian Federation (the)</option>
                    <option placeholder="RW">Rwanda</option>
                    <option placeholder="RE">Réunion</option>
                    <option placeholder="BL">Saint Barthélemy</option>
                    <option placeholder="SH">
                      Saint Helena, Ascension and Tristan da Cunha
                    </option>
                    <option placeholder="KN">Saint Kitts and Nevis</option>
                    <option placeholder="LC">Saint Lucia</option>
                    <option placeholder="MF">Saint Martin (French part)</option>
                    <option placeholder="PM">Saint Pierre and Miquelon</option>
                    <option placeholder="VC">
                      Saint Vincent and the Grenadines
                    </option>
                    <option placeholder="WS">Samoa</option>
                    <option placeholder="SM">San Marino</option>
                    <option placeholder="ST">Sao Tome and Principe</option>
                    <option placeholder="SA">Saudi Arabia</option>
                    <option placeholder="SN">Senegal</option>
                    <option placeholder="RS">Serbia</option>
                    <option placeholder="SC">Seychelles</option>
                    <option placeholder="SL">Sierra Leone</option>
                    <option placeholder="SG">Singapore</option>
                    <option placeholder="SX">Sint Maarten (Dutch part)</option>
                    <option placeholder="SK">Slovakia</option>
                    <option placeholder="SI">Slovenia</option>
                    <option placeholder="SB">Solomon Islands</option>
                    <option placeholder="SO">Somalia</option>
                    <option placeholder="ZA">South Africa</option>
                    <option placeholder="GS">
                      South Georgia and the South Sandwich Islands
                    </option>
                    <option placeholder="SS">South Sudan</option>
                    <option placeholder="ES">Spain</option>
                    <option placeholder="LK">Sri Lanka</option>
                    <option placeholder="SD">Sudan (the)</option>
                    <option placeholder="SR">Suriname</option>
                    <option placeholder="SJ">Svalbard and Jan Mayen</option>
                    <option placeholder="SE">Sweden</option>
                    <option placeholder="CH">Switzerland</option>
                    <option placeholder="SY">Syrian Arab Republic</option>
                    <option placeholder="TW">Taiwan (Province of China)</option>
                    <option placeholder="TJ">Tajikistan</option>
                    <option placeholder="TZ">
                      Tanzania, United Republic of
                    </option>
                    <option placeholder="TH">Thailand</option>
                    <option placeholder="TL">Timor-Leste</option>
                    <option placeholder="TG">Togo</option>
                    <option placeholder="TK">Tokelau</option>
                    <option placeholder="TO">Tonga</option>
                    <option placeholder="TT">Trinidad and Tobago</option>
                    <option placeholder="TN">Tunisia</option>
                    <option placeholder="TR">Turkey</option>
                    <option placeholder="TM">Turkmenistan</option>
                    <option placeholder="TC">
                      Turks and Caicos Islands (the)
                    </option>
                    <option placeholder="TV">Tuvalu</option>
                    <option placeholder="UG">Uganda</option>
                    <option placeholder="UA">Ukraine</option>
                    <option placeholder="AE">United Arab Emirates (the)</option>
                    <option placeholder="GB">
                      United Kingdom of Great Britain and Northern Ireland (the)
                    </option>
                    <option placeholder="UM">
                      United States Minor Outlying Islands (the)
                    </option>
                    <option placeholder="US">
                      United States of America (the)
                    </option>
                    <option placeholder="UY">Uruguay</option>
                    <option placeholder="UZ">Uzbekistan</option>
                    <option placeholder="VU">Vanuatu</option>
                    <option placeholder="VE">
                      Venezuela (Bolivarian Republic of)
                    </option>
                    <option placeholder="VN">Viet Nam</option>
                    <option placeholder="VG">Virgin Islands (British)</option>
                    <option placeholder="VI">Virgin Islands (U.S.)</option>
                    <option placeholder="WF">Wallis and Futuna</option>
                    <option placeholder="EH">Western Sahara</option>
                    <option placeholder="YE">Yemen</option>
                    <option placeholder="ZM">Zambia</option>
                    <option placeholder="ZW">Zimbabwe</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm">
                    Your Feedback
                  </label>

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    id="message"
                    className="ring-1 ring-gray-300 w-full rounded-md border-0 shadow-md px-4 py-2 focus:ring-teal-300 focus:ring-2 outline-none mt-2"
                    placeholder="Your Feedback"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-block self-end bg-[#f7768ef5] text-white font-bold rounded-lg py-2 px-6"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
