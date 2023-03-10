import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import TechStackWheels from '../components/TechStackWeels/TechStackWheels';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <TechStackWheels/>
      <Timeline />
      {/* <Acomplishments /> */}
      {/* <BackToTopButton/> */}
      
    </Layout>
  );
};

export default Home;
