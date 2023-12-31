import { Injectable } from '@angular/core';
import { Project } from './project/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  public projects: any = [
    {
      title: 'StoryBot Adventures',
      id: 'storybot',
      description:
        'StoryBot Adventures is designed to help kids develop their artistic talent, improve their visualization skills, and encourage their creativity like never before. They not only read but also become the storytellers, guiding the narrative in their own unique way',
      imageSrc: 'assets/projects/storybot/front-page.png',
      displayCards: [
        {
          type: 'text',
          config: {
            title: 'Description',
            innerHtml:
              "Storybot Adventure is an innovative system designed to foster creativity and imagination in children by merging the power of artificial intelligence with the boundless world of storytelling. When a child inputs a prompt, the system crafts a unique, engaging story tailored to that idea. But the magic doesn't stop there. Once the story is generated, children are given the tools to illustrate each scene, bringing their own personal touch and vision to the narrative. This encourages artistic expression and deepens their connection to the story. Upon completion, the system offers an option to export the entire project, allowing children to have a tangible book of their own creation. Storybot Adventure is more than just a storytelling tool; it's a bridge between technology and the timeless art of storytelling, empowering the next generation of writers and illustrators. <br /><br />Source code: <a href='https://github.com/kayrux/Story-Sketch'>Github</a> <br />Website: <a href='https://kayrux.github.io/Story-Sketch/'>StoryBot Adventures</a>",
          },
        },
        {
          type: 'video',
          config: {
            title: 'Demo',
            src: 'https://www.youtube.com/embed/jssGwbnWTWA',
          },
        },
        {
          type: 'text',
          config: {
            title: 'Concept Sketches',
            innerHtml:
              "These concept sketches serve as the visual foundation for our storyboard system, a tool we've developed to facilitate discussions on system design. They are instrumental in helping us visualize and refine the user interface, functionality, and overall user experience",
          },
        },
        {
          type: 'carousel',
          config: {
            title: '10 Concept Sketches',
            items: [
              {
                imageSrc: 'assets/projects/storybot/d1.png',
                description:
                  'Drag and drop: A delightful, user-friendly system for kids to craft imaginative pictures by effortlessly dragging and dropping playful elements onto a dynamic drawing board.',
              },
              {
                imageSrc: 'assets/projects/storybot/d2.png',
                description:
                  'Child-AI Artistry: Kids sketch their ideas, and AI enhances them for stunning results',
              },
              {
                imageSrc: 'assets/projects/storybot/d3.png',
                description:
                  'Advanced AI generates initial drafts, providing a creative starting point for children. Kids then add their unique magic, modifying, embellishing, and customizing the artwork to align with their artistic vision.',
              },
              {
                imageSrc: 'assets/projects/storybot/d4.png',
                description:
                  'Children become the creative directors, providing prompts or ideas; the AI transforms their words into vivid and personalized drawings.',
              },
              {
                imageSrc: 'assets/projects/storybot/d5.png',
                description:
                  "Children's creativity takes center stage as they write prompts that AI turns into captivating stories. Afterward, a drawing board allows kids to bring those stories to life through illustrations, fostering storytelling skills and artistic expression in a dynamic and engaging way.",
              },
              {
                imageSrc: 'assets/projects/storybot/d6.png',
                description:
                  'ColorMatch Canvas: An interactive system where children paint objects to match specified colors',
              },
              {
                imageSrc: 'assets/projects/storybot/d7.png',
                description:
                  'With a simple click, children select a story base, and like magic, the AI crafts a one-of-a-kind tale, igniting their imagination and nurturing their storytelling skills with each enchanting click.',
              },
              {
                imageSrc: 'assets/projects/storybot/d8.png',
                description:
                  'StoryGenie: A magical system where children simply click to choose a theme, and AI conjures up a unique story, sparking imagination and storytelling prowess with each enchanting click.',
              },
              {
                imageSrc: 'assets/projects/storybot/d9.png',
                description:
                  'Children can explore animated stories on the right side of the screen, sparking their imagination and engagement. On the left side, they are presented with a fun and educational challenge: sorting text into a box. This system seamlessly combines entertainment and learning, making it an enjoyable and enriching experience for young minds.',
              },
              {
                imageSrc: 'assets/projects/storybot/d10.png',
                description:
                  'Children share the story they have with another person and co-illustrate the story with them.',
              },
            ],
          },
        },
        {
          type: 'text',
          config: {
            title: 'Idea Selection',
            innerHtml:
              'After a thorough discussion among our team members, we have collectively decided to embrace the fifth concept sketch as the cornerstone of our project. The primary reason for this choice is our unwavering commitment to providing children with a flexible and creative platform to design their own books. This concept aligns perfectly with our mission to empower young minds, allowing them to shape and personalize their storytelling experiences. We believe that this decision will not only enrich the user experience but also inspire a new generation of young authors and artists. For these sketches, I focused mainly on the AI aspects that we could include.',
          },
        },
        {
          type: 'text',
          config: {
            title: 'Detailed Sketches',
            innerHtml:
              "Detailed sketches: Following the selection of our concept from the initial concept sketches, we embarked on the next phase of our project by creating detailed sketches. These intricate renderings provide a comprehensive visual blueprint, capturing every nuance of our system's design and functionality. With these detailed sketches in hand, we are prepared to translate our creative vision into a tangible and user-friendly system that will both entertain and educate children.",
          },
        },
        {
          type: 'carousel',
          config: {
            title: '10 Detailed Sketches',
            items: [
              {
                imageSrc: 'assets/projects/storybot/d1.png',
                description: 'Save temporary work',
              },
              {
                imageSrc: 'assets/projects/storybot/d2.png',
                description: 'Clear everything in the drawing',
              },
              {
                imageSrc: 'assets/projects/storybot/d3.png',
                description: 'Change pen thickness',
              },
              {
                imageSrc: 'assets/projects/storybot/d4.png',
                description: 'Erase some parts of the drawing',
              },
              {
                imageSrc: 'assets/projects/storybot/d5.png',
                description: 'Undo the last step',
              },
              {
                imageSrc: 'assets/projects/storybot/d6.png',
                description: 'Share the drawing with someone else',
              },
              {
                imageSrc: 'assets/projects/storybot/d7.png',
                description: 'View someone’s gallery',
              },
              {
                imageSrc: 'assets/projects/storybot/d8.png',
                description:
                  'Children can use voice to text if they don’t want the story from the AI',
              },
              {
                imageSrc: 'assets/projects/storybot/d9.png',
                description:
                  'Children should be able to have voice-to-text so the story can be read to them',
              },
              {
                imageSrc: 'assets/projects/storybot/d10.png',
                description: 'Predesigned background',
              },
            ],
          },
        },
        {
          type: 'text',
          config: {
            title: 'Detailed Sketches Idea Selection',
            innerHtml:
              'Out of the ten meticulously crafted detailed sketches, our selection process has led us to prioritize the implementation of the first seven sketches and the ninth sketch. These particular sketches have been chosen because of their fundamental importance in providing children with the necessary support and guidance for their drawing endeavors. Equally significant is our commitment to maintaining a system that is both easy to understand and executable within a relatively short timeframe. By focusing on these key sketches, we aim to ensure that our system strikes the right balance between accessibility and functionality, ultimately enhancing the overall user experience. My sketches were mainly focused on the interface design, and what sort of features we should include.',
          },
        },
        {
          type: 'text',
          config: {
            title: 'Contribution',
            innerHtml:
              'For this project I was in charge of creating the foundations of the website, and making all the different components work together. I also worked on the main theme and design of the website.',
          },
        },
      ],
    },
  ];

  constructor() {}
}
