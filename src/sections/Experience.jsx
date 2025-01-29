import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { Model as RoomModel } from '../components/Room.jsx';

import Model from '../components/MC.jsx'; // <-- import your MC model here
import CanvasLoader from '../components/Loading.jsx';

// At the top of your file
import exp1 from '../icons/exp1.png';
import exp2 from '../icons/exp2.png';
import exp3 from '../icons/exp3.png';
import exp4 from '../icons/exp4.png';
import exp5 from '../icons/exp5.jpg';
import exp6 from '../icons/exp6.png';
// Example data with animation names that exist in your GLB
// Make sure these exactly match the animation clip names in the model:
// e.g. 'Player Idle', 'Player TakeMobile', 'Player Jump', etc.
const workExperiences = [
  {
    name: 'Microsoft',
    pos: 'Technical Program Manager Intern',
    duration: 'Summer 2025',
    title: 'Upcoming TPM within the Azure Cloud Native team.',
    // Must match the name in GLTF animations: 'Player TakeMobile'
    animation: 'Player TakeMobile',
    icon: exp1
  },
  {
    name: 'National Renewable Energy Laboratory',
    pos: 'Software Engineer Intern',
    duration: 'Fall 2024 to Summer 2025',
    title: 'Optimized backend performance, improved system reliability through testing and automation, and enhanced frontend user experience with interactive features and efficient loading strategies.',
    // e.g. 'Player Jump'
    animation: 'Player Jump',
    icon: exp2
  },
  {
    name: 'Los Alamos National Laboratory',
    pos: 'High Performance Computing Intern',
    duration: 'Summer 2024',
    title: 'Built a 10-node HPC Linux cluster with Ansible, optimizing performance using Docker, MPI, SLURM, and real-time monitoring with Telegraf and Grafana.',
    // e.g. 'Player Airplane'
    animation: 'Player Airplane',
    icon: exp3
  },
  {
    name: 'NASA',
    pos: 'Software Developer Intern',
    duration: 'Spring 2024',
    title: 'Built a search engine with Elasticsearch and FastAPI for NASA reports and designed Python-based dashboards to improve cost tracking and reporting accuracy.',
    // e.g. 'Player Open Normal'
    animation: 'Player Take',
    icon: exp4
  },
  {
    name: 'Lawrence Livermore National Laboratory',
    pos: 'Software Engineer Intern',
    duration: 'Summer 2023',
    title: 'Developed a secure data management app with FastAPI, AngularJS, and MongoDB, improving data retrieval by 20% and backend reliability by 15% through tested RESTful API.',
    // e.g. 'Player Open Normal'
    animation: 'Player Lit',
    icon: exp6
  },
  {
    name: 'Argonne National Laboratory',
    pos: 'Software Developer Intern',
    duration: 'Summer 2022',
    title: 'Created a web app to scrape, geolocate, and visualize critical infrastructure connections with 3D arcs and heat maps, integrating Unity simulations and deploying via Heroku for stakeholder accessibility.',
    // e.g. 'Player Open Normal'
    animation: 'Player Fall',
    icon: exp5
  }
];

const WorkExperience = () => {
  // Default animation is Idle
  const [animationName, setAnimationName] = useState('Player Idle');

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas
              // Set an initial camera position that shows the room + MC
              camera={{ position: [2, 5, 9], fov: 100 }}
            >
              {/* Enable rotate, pan, zoom, etc. */}
              <OrbitControls 
                enableZoom={true} 
                enablePan={true} 
                enableRotate={true}
                maxPolarAngle={Math.PI / 2}
              />
              {/* Some basic lighting */}
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              
              <Suspense fallback={<CanvasLoader />}>
                {/* Your room model. Adjust scale/position as necessary */}
                <RoomModel 
                  scale={4}
                  position={[-6, 0, 0]}
                />

                {/* MC model in the same scene */}
                <Model 
                  position={[1, 0, 2]} 
                  scale={1.8} 
                  animationName={animationName} 
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation)}
                  onPointerOver={() => setAnimationName(item.animation)}
                  onPointerOut={() => setAnimationName('Player Idle')}
                  className="work-content_container group"
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt={item.name} />
                    </div>
                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} — <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;