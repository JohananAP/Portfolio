import React from "react";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Chip, Typography } from "@material-tailwind/react";
import { experiences } from "../lib/data";

function MyTimeline() {
  return (
    <VerticalTimeline lineColor="">
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <VerticalTimelineElement
            contentStyle={{
              background: "white",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid #9ca3af",
            }}
            date={experience.date}
            iconStyle={{
              background: "white",
              fontSize: "1.5rem",
              scale: "0.3",
            }}
          >
            <Typography variant="h5">{experience.role}</Typography>
            <Typography variant="h6" className="!m-0 pb-2">
              {experience.company}
            </Typography>
            <Typography className="font-normal text-gray-800 !m-0 ">
              {experience.description}
            </Typography>

            <div className="flex flex-wrap gap-2 pt-2">
              {experience.techstack.map((tech) => (
                <Chip
                  variant="ghost"
                  value={tech}
                  className="rounded-full"
                  key={`/${experience.company}-/${index}-/${tech}`}
                />
              ))}
            </div>
          </VerticalTimelineElement>
        </React.Fragment>
      ))}
    </VerticalTimeline>
  );
}

function Experince() {
  return (
    <section id="experience" className="lg:pt-20 pr-4">
      <SectionHeading>Experience</SectionHeading>
      <MyTimeline />
    </section>
  );
}

export default Experince;
