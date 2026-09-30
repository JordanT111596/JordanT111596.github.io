import { Link } from "react-router-dom";
import headshot from "../Assets/Images/Headshot.png";
import {
  EMAIL,
  EXTERNAL_LINK_PROPS,
  FLUID_TRUCK_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  PORTFOLIO_REPO_URL,
  UNION_URL,
  WORKDAY_EVERYWHERE_URL,
  WORKDAY_URL,
} from "../data/links";

const workdayHighlights: readonly string[] = [
  "Led an epic that lets approvers approve or deny Workday business processes directly from Slack and Teams "
    + "notifications, from the initial spike and proof of concept through design and delivery",
  "Built Workday's Microsoft 365 Copilot agent from early access through general availability, including single "
    + "sign-on, its data storage and cloud infrastructure, and human-in-the-loop approvals",
  "Eliminated customer-reported duplicate notifications with fixes across the TypeScript platform and Java backend",
  "Owned the Company Holidays and Coworker Lookup epics end to end, from React front ends to a GraphQL data layer",
  "Onboarded and mentored a new engineer from environment setup to his first merged pull request",
];

export const About = (): JSX.Element => (
  <div className="container pb-5">
    <div className="row justify-content-center">
      <div className="col-12 col-lg-10 mt-5 card">
        <div className="card-body">
          <h1 className="text-primary text-center mb-3">About Me</h1>
          <div className="text-center">
            <img src={headshot} alt="Jordan Triplett's headshot" className="mb-3 mx-auto img-fluid" />
          </div>
          <p>
            Always seeking a new challenge to overcome, Jordan Triplett is a full-stack Software Development Engineer
            at <a href={WORKDAY_URL} {...EXTERNAL_LINK_PROPS}>Workday</a> in Colorado, but most importantly he's an
            impassioned creator dedicated to turning fresh and bold ideas into products people use every day. He works
            on <a href={WORKDAY_EVERYWHERE_URL} {...EXTERNAL_LINK_PROPS}>Workday Everywhere</a>, which brings Workday into
            Slack, Microsoft Teams, Microsoft 365 Copilot, Gemini Enterprise, and more.
          </p>
          <p>
            After earning a bachelor's degree from the University of North Carolina at Charlotte and then a Full Stack Web
            Development Certificate in 12 weeks, Jordan began his career as a front-end developer, building consumer
            sites at <a href={UNION_URL} {...EXTERNAL_LINK_PROPS}>Union</a> and a React Native mobile app
            at <a href={FLUID_TRUCK_URL} {...EXTERNAL_LINK_PROPS}>Fluid Truck</a>. Since joining Workday in December 2023,
            he has grown into a full-stack role spanning TypeScript, Node.js, React, GraphQL, AWS serverless (Lambda,
            DynamoDB, CDK), and Java, and was promoted from Sr. Associate to Software Development Engineer in 2026.
          </p>
          <p>At Workday, Jordan has:</p>
          <ul>
            {workdayHighlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
          <p>
            Here you will find his <Link to="/portfolio">projects</Link>, this short biography, and
            a <Link to="/contact">page to contact him</Link>, complete with a space for leaving your name, email
            address, and a quick message! This site was built from scratch with React, TypeScript, and a little Bootstrap.
            Want to see how? Check out the <a href={PORTFOLIO_REPO_URL} {...EXTERNAL_LINK_PROPS}>repository</a> for
            this website!
          </p>
          <p>
            Besides coding, Jordan also enjoys making art, ranging from music recording, music production, and audio
            engineering to video editing, directing, production, and acting!
          </p>
          <ul className="list-unstyled">
            <li>
              Check out his <a href={`${process.env.PUBLIC_URL}/pdf/Jordan_Triplett_Resume.pdf`} {...EXTERNAL_LINK_PROPS}>resume!</a>
            </li>
            <li>Check out his <a href={LINKEDIN_URL} {...EXTERNAL_LINK_PROPS}>LinkedIn page!</a></li>
            <li>Check out his <a href={GITHUB_URL} {...EXTERNAL_LINK_PROPS}>GitHub profile!</a></li>
            <li>You can contact him via email at <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
