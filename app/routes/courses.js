import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {
        title: "Course Title 1",
        desc: "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.",
        is_mine: false
      },
      {
        title: "Course Title 2",
        desc: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.",
        is_mine: false
      },
      {
        title: "Course Title 3",
        desc: 'Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.',
        is_mine: true
      },
      {
        title: "Course Title 4",
        desc: 'Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.',
        is_mine: false
      },
      {
        title: "Course Title 5",
        desc: 'Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.',
        is_mine: false
      },
      {
        title: "Course Title 6",
        desc: 'Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower fully researched growth strategies and interoperable internal or "organic" sources.',
        is_mine: false
      },
      {
        title: "Course Title 7",
        desc: 'Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks.',
        is_mine: false
      },
      {
        title: "Course Title 8",
        desc: 'Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.',
        is_mine: false
      },
      {
        title: "Course Title 9",
        desc: 'Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures.',
        is_mine: false
      }
    ];
  },
  afterModel: function(){
    this.transitionTo('courses.mine');
  }
});


