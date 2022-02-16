import React from 'react';
import Header from '../components/Header';

const Home = () => (
  <section>
    <Header />
    <div className="home">
      <h3>Welcome to our page</h3>
      <p className="paragraph1">
        Mathematics is a methodical application of matter. It is
        so said because the subject makes a man methodical or
        systematic. Mathematics makes our life orderly and prevents
        chaos. Certain qualities that are nurtured by mathematics
        are power of reasoning, creativity, abstract or spatial thinking,
        critical thinking, problem-solving ability and even effective
        communication skills.
      </p>
      <p className="paragraph2">
        Mathematics is the cradle of all creations, without which the world
        cannot move an inch. Be it a cook or a farmer, a carpenter or
        a mechanic, a shopkeeper or a doctor, an engineer or a scientist,
        a musician or a magician, everyone needs mathematics in their
        day-to-day life. Even insects use mathematics in their everyday
        life for existence.
      </p>
    </div>
  </section>
);

export default Home;
