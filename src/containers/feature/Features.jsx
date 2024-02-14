import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

// const featuresData = [
//   {
//     title: 'Improving end distrusts instantly',
//     text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
//   },
//   {
//     title: 'Become the tended active',
//     text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
//   },
//   {
//     title: 'Message or am nothing',
//     text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
//   },
//   {
//     title: 'Really boy law county',
//     text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
//   },
// ];

const featuresData = [
  {
    title: 'Enhanced Language Understanding',
    text: 'GPT-3 exhibits an unparalleled ability to comprehend and interpret human language, facilitating tasks such as translation, summarization, and sentiment analysis with remarkable accuracy.',
  },
  {
    title: 'Versatile Application Capabilities',
    text: 'With its adaptable architecture, GPT-3 seamlessly integrates into various applications, including chatbots, virtual assistants, content generation platforms, and automated customer support systems, revolutionizing user interactions across diverse domains.',
  },
  {
    title: 'Advanced Contextual Understanding',
    text: 'The contextual awareness of GPT-3 enables it to generate responses that are not only grammatically correct but also contextually relevant, enhancing the overall quality and coherence of conversations and text generation tasks.',
  },
  {
    title: 'Unprecedented Text Generation',
    text: `GPT-3's unparalleled text generation capabilities allow it to produce human-like text that is indistinguishable from content written by humans, empowering users with an endless reservoir of creative possibilities and informative insights.`,
  },
];


const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;