import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('robin@robinttw.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-2 h-full">
        {/* About Me */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/robin.png"
              alt="grid-1"
              className="w-full h-auto object-cover rounded-t-lg"
            />

            <div className="flex flex-col">
              <p className="grid-headtext mb-1">Hi, I’m Robin Simpson</p>
              <p className="grid-subtext">
                I am a Computer Engineering student at California Polytechnic State University with extensive internship experience at organizations such as NASA, Microsoft, and various national laboratories. Some may call me the government merchant or the forever intern.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        {/* Education */}
<div className="col-span-1 xl:row-span-3">
  <div className="grid-container">
    <div className="pt-20 pb-14"> {/* Added padding-top */}
      <img
        src="assets/cp.jpg"
        alt="grid-2"
        className="w-full h-auto object-cover rounded-t-lg"
      />
    </div>
    <div className="flex flex-col">
      <p className="grid-headtext mb-1">Education</p>
      <p className="grid-subtext">
        <strong>California Polytechnic State University, San Luis Obispo, CA</strong><br />
        Bachelor of Science in Computer Engineering, December 2025<br />
        
      </p>
    </div>
  </div>
</div>


        {/* What I Do for Fun */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full h-full flex justify-center items-center overflow-hidden">
              <img
                src="assets/league.jpg"
                alt="grid-2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="grid-headtext mb-1">What I Do for Fun</p>
              <p className="grid-subtext">
                I’m actively involved in the Cal Poly D2 League of Legends team and enjoy <del>reverse engineering peoples code</del> contributing to open-source projects. I really like Steins;Gate too, if my first website was not telling enough. <del>I love using chatgpt</del>.
              </p>
            </div>
          </div>
        </div>

        {/* Publications */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/pubs.png"
              alt="grid-3"
              className="w-full h-auto object-cover rounded-t-lg"
            />

            <div className="flex flex-col">
              <p className="grid-headtext mb-1">Publications</p>
              <ul className="grid-subtext list-disc list-inside space-y-2">
                <li>
                  <strong>Robin Simpson</strong>, Anvitha Ramachandran, Dohyun Lee, “Containerization on Switches”, <em>Supercomputing 2024</em>, (November 2024, Atlanta, GA) https://doi.org/10.2172/2429299.
                </li>
                <li>
                  <strong>Robin Simpson</strong>, Dr. Pei Zhang, Dr. Ninqiao Li, “Integrating Robots in Hospitality: Opportunities Through Image Analysis”, <em>NCUR</em>, (April 2024, Long Beach, CA).
                </li>
                <li>
                  Contributions to "RUI: Harnessing Rubin Observatory Data to Prepare Tomorrow's STEM Leaders: Galaxy Evolution and Large Scale Structure”, <em>NSF Project Award Number: 2205976</em>, (Louise Edwards, PI, Cal Poly, September 2023 - April 2024).
                </li>
                <li>
                  <strong>Robin Simpson</strong>, “OneLaunch Threat Response”, <em>DOE Conference</em>, (August 2023, Washington, DC).
                </li>
                <li>
                  Yash Raj Singh, Jeffrey Yum, <strong>Robin Simpson</strong>, “Darc: Empowering LEP/MOD Test Data with Efficient Archive and Search”, <em>Summer Slam</em>, (August 2023, Livermore, CA).
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container flex flex-col items-center justify-center">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full h-auto object-cover rounded-t-lg"
            />

            <div className="space-y-1 mt-2 w-full flex flex-col items-center">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                  alt="copy"
                  className="w-6 h-6"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  robin@robinttw.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
