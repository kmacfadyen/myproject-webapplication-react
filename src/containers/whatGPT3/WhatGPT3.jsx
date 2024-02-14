import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3, short for Generative Pre-trained Transformer 3, is an advanced artificial intelligence model developed by OpenAI. It represents the latest iteration of the GPT series, renowned for its groundbreaking capabilities in natural language processing (NLP). GPT-3 is trained on an unprecedented scale with 175 billion parameters, enabling it to comprehend and generate human-like text with remarkable accuracy and fluency." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="The primary goal of a chatbot such as ChatGPT is to simulate natural language conversations with users, providing engaging and informative responses to their queries or prompts. It can be integrated into various applications and platforms to enable virtual assistants, and other conversational AI interfaces as well." />
      <Feature title="Knowledge Base" text="A knowledge base is a centralized repository of information that collects, organizes, and stores knowledge about a specific topic, domain, or subject matter. It serves as a reference resource for users seeking information and can be accessed through various interfaces such as search engines, chatbots, or self-service portals." />
      <Feature title="Education" text="GPT has revolutionized the field of natural language processing (NLP) and AI by its ability to understand, generate, and manipulate human-like text. Its education involves a pre-training phase where it learns from vast amounts of text data sourced from the internet or other corpora. During this phase, GPT develops a deep understanding of language patterns, semantics, and context. " />
    </div>
  </div>
);

export default WhatGPT3;